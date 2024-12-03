import WishCard from './WishCard';

type PageProps = {};

export default function Page({}: PageProps) {
	return (
		<>
			<WishCard name="Peter Parker" gift="Something nice" status="naughty" />
		</>
	);
}
