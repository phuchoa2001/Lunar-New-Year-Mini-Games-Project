import 'antd/dist/antd.css';
import '@/styles/globals.scss'
import '../styles/tailwind.css';
import '@/styles/all.scss'
import RootLayout from '../components/Layout'
import Head from 'next/head'
import useSWR, { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
	return (
		<SWRConfig
			value={{
				fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
			}}
		>
			<RootLayout>
				<Head>
					<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
				</Head>
				<Component {...pageProps} />
			</RootLayout>
		</SWRConfig>
	)
}

export default MyApp
