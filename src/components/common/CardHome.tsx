import { twMerge } from "tailwind-merge";

interface CardHomeProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const CardHome = ({ children, className = "", ...rest }: CardHomeProps) => {
	const baseClassName =
		"h-48 w-full rounded-lg overflow-hidden border  bg-cover bg-[0%_20%] hover:scale-[0.99] duration-300 ease-out hover:ease-in";
	return (
		<div className={twMerge(baseClassName, className)} {...rest}>
			{children}
		</div>
	);
};

export default CardHome;
