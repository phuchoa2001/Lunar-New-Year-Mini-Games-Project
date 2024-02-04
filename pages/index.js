import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { Typography } from 'antd';
import { Space } from 'antd-mobile';
import { FacebookFilled } from '@ant-design/icons';

const { Title } = Typography;

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.banner}>
				<div style={{ width: 300, maxWidth: "100%" }}>
					<img src="/image/WishTree.jpg" style={{ width: '100%', height: 'auto' }} alt="Your Image" />
				</div>
				<Title level={2} className={styles.title}>Cây Mục Tiêu</Title>
				<div style={{ width: 600, maxWidth: "100%" }}>
					<Typography.Text>
					Cùng nhau vun đắp ước mơ tại <Typography.Text strong>'Cây Mục Tiêu' </Typography.Text> 
					của cộng đồng Avatar! Đặt mục tiêu, chia sẻ với cộng đồng và nỗ lực không ngừng để biến chúng thành hiện thực. 
					Mỗi bước tiến là một chiến thắng, mỗi mục tiêu đều quý giá. Hãy cam kết với chính mình và khám phá sức mạnh của sự đoàn kết. 
					Ghi lại mục tiêu của bạn ngay hôm nay và cùng chúng tôi xây dựng một năm tràn đầy thành công!
					</Typography.Text>
					<Space align="start" style={{ width : "100%" }} className='mt-1'>
					<div>Liên hệ chúng tôi nếu cần hỗ trợ :</div>
					<div>
						<FacebookFilled />
					</div>
				</Space>
				</div>
			</div>
		</div>
	)
}
