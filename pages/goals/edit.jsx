import Styles from '@/styles/goals/add.module.scss';
import { useState } from 'react';
import {
	Button,
	Dialog,
	Form,
	Input,
	Selector,
	Space,
	TextArea
} from 'antd-mobile';
import { requiredFieldRule } from 'utils/validationRules';
import { GAME_OPTION } from 'constants/Game';
import NavBarBack from '@/components/NavBarBack';
import ProtectedComponent from '@/components/auth/ProtectedComponent';

export default () => {
	const [formData, setFormData] = useState({
		idGame: 'phuchoa00',
		target: '',
		note: '',
		inGame: 'Avatar 3x',
	});

	const onFinish = (values) => {
		Dialog.alert({
			content: <pre>{JSON.stringify(values, null, 2)}</pre>,
		})
	}

	return (
		<ProtectedComponent>
			<NavBarBack title="Sửa mục tiêu">
				<div className={Styles.add}>
					<Form
						layout='vertical'
						onFinish={onFinish}
						footer={
							<Button block type='submit' color='primary' size='large'>
								Sửa
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
							<TextArea
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