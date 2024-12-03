import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div className={'mx-auto max-w-screen-sm w-full p-24 pb-0 h-screen flex flex-col'}>
			<div className={'flex-1'}>{children}</div>
			<div
				className={
					'h-12 w-full flex items-center justify-center bg-muted text-muted-foreground'
				}>
				<Link
					href={'https://github.com/B33fb0n3/aoc-ui/tree/main/app/day'}
					target={'_blank'}
					className={'flex items-center hover:text-foreground hover:underline'}>
					<FaGithub className={'size-5 mr-2'} />
					Watch on Github
				</Link>
			</div>
		</div>
	);
}
