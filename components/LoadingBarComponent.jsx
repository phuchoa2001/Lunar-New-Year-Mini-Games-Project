import Router from 'next/router';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function LoadingBarComponent(props) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleStart = () => setProgress(30); // Bắt đầu với giá trị tiến trình
		const handleComplete = () => setProgress(100); // Hoàn thành tiến trình

		Router.events.on('routeChangeStart', handleStart);
		Router.events.on('routeChangeComplete', handleComplete);
		Router.events.on('routeChangeError', handleComplete); // Cũng hoàn thành trong trường hợp lỗi

		return () => {
			Router.events.off('routeChangeStart', handleStart);
			Router.events.off('routeChangeComplete', handleComplete);
			Router.events.off('routeChangeError', handleComplete);
		};
	}, []);
	return (
		<div>
			<LoadingBar
				color="#f11946"
				progress={progress}
				className='react-top-loading-bar'
				containerClassName={"progress-bar-container"}
				onLoaderFinished={() => setProgress(0)}
			/>
		</div>
	);
}

export default LoadingBarComponent;