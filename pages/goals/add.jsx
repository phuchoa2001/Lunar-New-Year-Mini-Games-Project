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
import { useAddGoal } from 'hooks/swr/useGoal';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { requiredFieldRule } from 'utils/validationRules';

export default () => {
	const { user, isLoading } = useAuth();
	const addNewGoal = useAddGoal();
	const router = useRouter();
	const [form] = Form.useForm();
	const [formData, setFormData] = useState({
		idGame: "phuchoa00",
		target: '',
		note: '',
		inGame: ['Avatar 3x'],
	});

	const onFinish = async (values) => {
		const res = await addNewGoal({
			...values,
			idUser: user.idUser,
			inGame : values.inGame[0]
		})
		if (res.isSuccess) {
			Toast.show({
				content: 'Thêm mục tiêu thành công',
			})
			router.push("/personalGoalList")
		} else {
			Toast.show({
				content: 'Thêm mục tiêu thất bại',
			})
		}
	}

	useEffect(() => {
		if (!isLoading) {
			form.setFieldsValue({
				idGame: user.idGame
			});
		}
	}, [isLoading])

	if (isLoading) {
		return <LoadingComponent />
	}

	return (
		<ProtectedComponent>
			<NavBarBack title="Thêm mục tiêu">
				<div className={Styles.add}>
					<Form
						layout='vertical'
						form={form}
						onFinish={onFinish}
						footer={
							<Button block type='submit' color='primary' size='large' className='ant-button'>
								Thêm mới
							</Button>
						}
						initialValues={formData}
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