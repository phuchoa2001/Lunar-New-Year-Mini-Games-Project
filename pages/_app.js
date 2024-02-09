import 'antd/dist/antd.css';
import '@/styles/globals.scss'
import '../styles/tailwind.css';
import '@/styles/all.scss'
import RootLayout from '../components/Layout'
import Head from 'next/head'
import useSWR, { SWRConfig } from 'swr'
import { StatsProvider } from 'context/statsContext';

function MyApp({ Component, pageProps }) {
	return (
		<StatsProvider>
			<SWRConfig
				value={{
					fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
					revalidateOnFocus: false,
					revalidateOnReconnect: false,
					refreshWhenHidden: false,
					refreshWhenOffline: false,
					refreshInterval: 0,
					focusThrottleInterval: 0
				}}
			>
				<RootLayout>
					<Head>
						<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
					</Head>
					<Component {...pageProps} />
				</RootLayout>
			</SWRConfig>
		</StatsProvider>
	)
}

export default MyApp
