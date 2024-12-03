import dynamic from 'next/dynamic';

const CountdownTimer = dynamic(() => import('./components/CountdownTimer'), {
	ssr: false,
});

type PageProps = {};

export default function Page({}: PageProps) {
	return (
		<div className="flex items-center justify-center relative overflow-hidden h-[250px]">
			<div className={'flex items-center justify-center flex-col'}>
				<p className={'font-bold self-start mb-2'}>🎄 Countdown to Xmas:</p>
				<CountdownTimer targetDate={1735032459000} />
			</div>
			<img
				src="https://i.pinimg.com/originals/b2/e6/e2/b2e6e2326a4bf1bdc457769a91087fbd.gif"
				alt="background"
				className="absolute top-0 left-0 -z-10 opacity-50"
			/>
		</div>
	);
}
