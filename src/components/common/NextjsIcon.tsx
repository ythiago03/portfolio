"use client";

import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLImageElement> {}

const NextjsIcon = ({ className = "", ...rest }: Props) => {
	const { theme } = useTheme();

	return (
		<>
			<img
				{...rest}
				src="/assets/nextjs-dark.png"
				alt="NextJs Logo"
				width={0}
				height={0}
				className={twMerge("w-12 block dark:hidden", className)}
			/>
			<img
				{...rest}
				src="/assets/nextjs-light.png"
				alt="NextJs Logo"
				width={0}
				height={0}
				className={twMerge("w-12 hidden dark:block", className)}
			/>
		</>
	);
};

export default NextjsIcon;
