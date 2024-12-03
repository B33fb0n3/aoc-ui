'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useCountdown } from '../useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

type ShowCounterProps = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
	return (
		<div className={'flex gap-x-2'}>
			<DateTimeDisplay value={days} type={'Days'} />
			<p>|</p>
			<DateTimeDisplay value={hours} type={'Hours'} />
			<p>|</p>
			<DateTimeDisplay value={minutes} type={'Mins'} />
			<p>|</p>
			<DateTimeDisplay value={seconds} type={'Seconds'} />
		</div>
	);
};

type CountdownTimerProps = {
	targetDate: number;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
	const router = useRouter();
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) return <p>Merry Christmas :)</p>;

	return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
