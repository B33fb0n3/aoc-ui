import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BiWorld } from 'react-icons/bi';

export default function Home() {
	return (
		<>
			<h1 className={'text-2xl flex items-center'}>
				<BiWorld className={'w-6 h-6'} />
				Hello World!
			</h1>
			<div className={'flex flex-col gap-y-2'}>
				{[...Array(24)].map((e, i) => {
					const day = i + 1;

					return (
						<Link
							href={`/day/${day}`}
							className={cn(buttonVariants({ variant: 'link' }), 'w-fit')}
							key={day}>
							Day {day}
						</Link>
					);
				})}
			</div>
		</>
	);
}
