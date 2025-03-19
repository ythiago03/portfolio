import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	icon: React.ElementType;
	title: string;
	variant?: "default" | "secondary";
}

const ExibitionCard = ({
	children,
	title,
	icon: Icon,
	variant = "default",
	className = "",
	...rest
}: CardProps) => {
	const variants = {
		default: "text-primary",
		secondary: "text-muted-foreground",
	};
	return (
		<div
			{...rest}
			className={twMerge(
				className,
				"w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm",
			)}
		>
			<div
				className={twMerge(
					variants[variant],
					"flex items-center gap-3 text-lg font-semibold",
				)}
			>
				<Icon /> {title}
			</div>
			{children}
		</div>
	);
};

export default ExibitionCard;
