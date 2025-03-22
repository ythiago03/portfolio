"use client";

import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLImageElement> {}

const NextjsIcon = ({ className = "", ...rest }: Props) => {
	const { theme } = useTheme();

	return (
		<img
			{...rest}
			src={
				theme === "light"
					? "/assets/nextjs-dark.png"
					: "/assets/nextjs-light.png"
			}
			alt="NextJs Logo"
			width={0}
			height={0}
			className={twMerge("w-12", className)}
		/>
	);
};

export default NextjsIcon;
