import 'antd/dist/antd.css'; 
import '@/styles/globals.scss'
import '../styles/tailwind.css';
import '@/styles/all.scss'
import RootLayout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
	return (
		<RootLayout>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
			</Head>
			<Component {...pageProps} />
		</RootLayout>
	)
}

export default MyApp
