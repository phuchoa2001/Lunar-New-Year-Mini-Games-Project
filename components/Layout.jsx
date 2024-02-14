import { useEffect, useRef, useState } from 'react';
import Styles from '@/styles/components/layout.module.scss';
import Header from './Header';
import LoadingBarComponent from './LoadingBarComponent';
import Tabs from './Tabs';

const DEFAULT_MARGIN = 50;

function RootLayout(props) {
	const tabRef = useRef(null);
	const [tabHeight, setTabHeight] = useState(0);

	useEffect(() => {
		if (tabRef.current) {
			setTabHeight(tabRef.current.clientHeight);
		}
	}, []);

	return (
		<div className='container'>
			<LoadingBarComponent />
			<div className={Styles.root}>
				<Header />
				<div className={Styles.children} style={{ paddingBottom: tabHeight > 0 ? tabHeight : DEFAULT_MARGIN }}>
					{props.children}
				</div>
				<div ref={tabRef}>
					<Tabs />
				</div>
			</div>
		</div>
	);
}

export default RootLayout;