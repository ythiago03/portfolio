import { twMerge } from "tailwind-merge";

interface AboutCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	icon: React.ElementType;
	title: string;
}

const AboutCard = ({
	children,
	icon: Icon,
	title,
	className,
	...rest
}: AboutCardProps) => {
	return (
		<section {...rest} className={twMerge(className, "mt-20")}>
			<h2 className="sticky top-20 w-full h-20 flex items-center gap-3 text-2xl font-semibold rounded-lg bg-background">
				<Icon /> {title}
			</h2>
			{children}
		</section>
	);
};

export default AboutCard;
