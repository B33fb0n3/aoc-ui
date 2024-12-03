type ButtonVariant = 'primary' | 'secondary' | 'icon';

type ButtonProps = {
	variant: ButtonVariant;
	children?: React.ReactNode;
};

export default function CustomButton({ variant, children }: ButtonProps) {
	const baseStyles = 'bg-gray-700 py-1 px-2 rounded transition-all';

	const getVariantStyles = (variant: ButtonVariant) => {
		switch (variant) {
			case 'primary':
				return 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 focus:ring-blue-500';
			case 'secondary':
				return 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105 focus:ring-gray-500 text-white hover:text-gray-800';
			case 'icon':
				return 'bg-transparent text-blue-500 hover:text-blue-600 p-2';
			default:
				return '';
		}
	};

	const variantStyles = getVariantStyles(variant);

	return (
		<button className={`${baseStyles} ${variantStyles} group`}>
			{variant === 'icon' ? (
				<div className="relative">
					<p className="text-2xl">*</p>
					<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
						<div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
					</div>
				</div>
			) : (
				children
			)}
		</button>
	);
}
