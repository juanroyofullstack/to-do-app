import React from 'react';

interface CustomButtonProps {
	title: string;
	className: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({
	title,
	className,
	onClick,
	type = 'button',
}: CustomButtonProps) => {
	const onClickAction = () => {
		return onClick && onClick();
	};

	return (
		<button
			onClick={onClickAction}
			className={className}
			type={type}
			data-testid="Button"
		>
			{title}
		</button>
	);
};
