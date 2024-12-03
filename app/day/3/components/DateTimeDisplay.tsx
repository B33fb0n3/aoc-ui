import React from 'react';

type DateTimeDisplayProps = {
	value: number;
	type: string;
};

const DateTimeDisplay = ({ value, type }: DateTimeDisplayProps) => {
	return (
		<div>
			<p>{value}</p>
			<span>{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
