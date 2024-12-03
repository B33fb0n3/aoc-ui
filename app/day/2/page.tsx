import CustomButton from './CustomButton';

type PageProps = {};

export default function Page({}: PageProps) {
	return (
		<div className={'flex gap-2 flex-col'}>
			<CustomButton variant="primary">Deliver Gifts</CustomButton>
			<CustomButton variant="secondary">Review Requests</CustomButton>
			<CustomButton variant="icon" />
		</div>
	);
}
