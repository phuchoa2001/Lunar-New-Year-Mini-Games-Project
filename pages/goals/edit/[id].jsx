import AutoFocusTextArea from '@/components/AutoFocusTextArea';
import LoadingComponent from '@/components/Loading';
import NavBarBack from '@/components/NavBarBack';
import ProtectedComponent from '@/components/auth/ProtectedComponent';
import Styles from '@/styles/goals/add.module.scss';
import {
  Button,
  Form,
  Input,
  Selector,
  TextArea,
  Toast
} from 'antd-mobile';
import { GAME_OPTION } from 'constants/Game';
import { useGoalContext } from 'context/goalContext';
import { useGoalDetails, useUpdateGoal } from 'hooks/swr/useGoal';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { requiredFieldRule } from 'utils/validationRules';
import HeaderSeo from '@/components/HeaderSeo';

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [form] = Form.useForm();

  const { user, isLoading: isLoadingAuth } = useAuth();
  const updateGoal = useUpdateGoal();
  const { data, resetData } = useGoalContext();
  const { goalDetails, isLoading } = useGoalDetails(id, !data.idGame);

  function getFirstElementOrString(input) {
    if (Array.isArray(input)) {
      return input[0];
    } else {
      return input;
    }
  }

  const onFinish = async (values) => {
    const res = await updateGoal(id, {
      ...values,
      idUser: user.idUser,
      inGame: getFirstElementOrString(values.inGame),
      confirmUser: user.confirmUser
    })
    if (res.isSuccess) {
      Toast.show({
        content: 'Sửa mục tiêu thành công',
      })
      resetData();
      router.back()
    } else {
      Toast.show({
        content: 'Sửa mục tiêu thất bại',
      })
    }
  }

  useEffect(() => {
    if (!data.idGame && !isLoading) {
      form.setFieldsValue({
        ...goalDetails
      });
    }
  }, [isLoading])

  if (isLoading && !data.idGame && !isLoadingAuth) {
    return <LoadingComponent />
  }

  return (
    <ProtectedComponent>
      <HeaderSeo title="Sửa mục tiêu" />
      <NavBarBack title="Sửa mục tiêu">
        <div className={Styles.add}>
          <Form
            layout='vertical'
            onFinish={onFinish}
            initialValues={data}
            form={form}
            footer={
              <Button block type='submit' color='primary' size='large' className='ant-button'>
                Sửa
              </Button>
            }
          >
            <Form.Item
              name='idGame'
              label='IdGame'
              rules={requiredFieldRule}
            >
              <Input onChange={console.log} placeholder='vd:admin001' disabled />
            </Form.Item>
            <Form.Item name='target' label='Mục tiêu 2024' rules={requiredFieldRule}>
              <AutoFocusTextArea
                placeholder='Ghi mục tiêu chơi game Avatar 2014, mục tiêu đời sống 2024, hay điều gì đó muốn chia sẻ cùng cộng đồng. Ví dụ: nâng cấp cánh XX, học hỏi, tìm bạn trai'
                maxLength={1000}
                autoSize={{
                  minRows: 6,
                  maxRows: 16
                }}
                showCount
              />
            </Form.Item>
            <Form.Item name='note' label='Ghi chú'>
              <TextArea
                placeholder='Ghi chú bổ sung...'
                maxLength={1000}
                autoSize={{
                  minRows: 2,
                  maxRows: 16
                }}
                showCount
              />
            </Form.Item>
            <Form.Item name='inGame' label='Thuộc game:' rules={requiredFieldRule}>
              <Selector
                options={GAME_OPTION}
                onChange={(arr, extend) => console.log(arr)}
              />
            </Form.Item>
          </Form>
        </div>
      </NavBarBack>
    </ProtectedComponent>
  )
}