import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex justify-between border-t mt-10 py-10">
			<Link
				href={"https://github.com/ythiago03/portfolio"}
				target="_blank"
				className="flex font-semibold text-lg items-center gap-1 hover:text-blue-400"
			>
				<ExternalLink />
				Github
			</Link>
			<p>
				Built with <span className="font-bold">Next.js</span>,{" "}
				<span className="font-bold">TailwindCss</span> and{" "}
				<span className="font-bold">Shadcn</span> by{" "}
				<Link
					href={"https://github.com/ythiago03"}
					target="_blank"
					className="font-bold hover:text-blue-400"
				>
					Thiago Fidêncio
				</Link>
				.
			</p>
		</footer>
	);
};

export default Footer;
