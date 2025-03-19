import { ArrowBigUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
	return (
		<footer className="flex flex-col items-center gap-3 text-center justify-between border-t mt-auto py-10 lg:flex-row">
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
				.{" "}
			</p>
			<ScrollToTop />
		</footer>
	);
};

export default Footer;
