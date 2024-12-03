'use client';

import { useState } from 'react';

type WishCardProps = {
	name: string;
	gift: string;
	status: 'nice' | 'naughty';
};

export default function WishCard({ gift, name, status }: WishCardProps) {
	const [watched, setWatched] = useState(false);

	return (
		<div
			className="flex flex-col gap-2 border-4 border-solid p-4 rounded"
			style={{ borderColor: watched ? 'green' : 'red' }}>
			<h2 className="text-2xl text-bold">{name}</h2>
			<p>Gift: {gift}</p>
			<p>Status: {status}</p>
			<button
				onClick={() => setWatched((prev) => !prev)}
				className="bg-primary py-1 px-2 rounded text-primary-foreground">
				Mark as {watched && 'un'}watched
			</button>
		</div>
	);
}
