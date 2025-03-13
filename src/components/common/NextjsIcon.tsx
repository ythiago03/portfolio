"use client";

import { useTheme } from "next-themes";

const NextjsIcon = () => {
	const { theme } = useTheme();

	return (
		<img
			src={
				theme === "light"
					? "/assets/nextjs-dark.png"
					: "/assets/nextjs-light.png"
			}
			alt="Youtube Music Logo"
			width={0}
			height={0}
			className="w-12"
		/>
	);
};

export default NextjsIcon;
