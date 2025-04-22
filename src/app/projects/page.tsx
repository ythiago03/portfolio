import NextjsIcon from "@/components/common/NextjsIcon";
import { Badge } from "@/components/ui/badge";
import { AppWindow, Construction, Github } from "lucide-react";
import Link from "next/link";
interface Stack {
	id: string;
	imgPath: string;
}
const Projects = () => {
	return (
		<main className="mt-30 xl:mt-40 mb-20">
			<h1 className="flex items-center gap-3 my-10 text-2xl font-semibold">
				<Construction /> Projects
			</h1>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://timerify.thiagof.com"}
						target="_blank"
						className="rounded-lg overflow-hidden  border shadow-sm"
					>
						<img
							src="/assets/timerify.png"
							className="w-full  object-cover aspect-video"
							alt="Timerify project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">Timerify</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://timerify.thiagof.com"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/timerify"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<NextjsIcon className="size-6" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/tailwind.png" alt="" />
					</div>
					<p className="line-clamp-3">
						Timerify is a web-based Pomodoro application designed to boost your
						productivity during study sessions, work, or any other
						focus-intensive activities. With an intuitive interface and
						customizable features, Timerify provides a unique experience for
						managing your time efficiently.
					</p>
					<div className=" space-x-2 space-y-2">
						<Badge>NextJs</Badge>
						<Badge>Typescript</Badge>
						<Badge>TailwindCss</Badge>
						<Badge>Youtube Iframe API</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
					</div>
				</div>
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://devutils.thiagof.com"}
						target="_blank"
						className="rounded-lg overflow-hidden  border shadow-sm"
					>
						<img
							src="/assets/devutils.png"
							className="w-full  object-cover aspect-video"
							alt="DevUtils project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">DevUtils</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://devutils.thiagof.com"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/devutils"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<img className="size-6" src="/assets/react.png" alt="" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/scss.png" alt="" />
						<img className="size-6" src="/assets/firebase.png" alt="" />
					</div>
					<p className="line-clamp-3">
						DevUtils is a utility website created for developers, focused on
						providing practical tools that simplify test data generation and
						string manipulation. The main goal is to speed up development by
						offering a platform to quickly generate valid data and perform
						various string operations, such as conversion and formatting.
					</p>
					<div className="space-x-2 space-y-2">
						<Badge>React</Badge>
						<Badge>Typescript</Badge>
						<Badge>Scss</Badge>
						<Badge>Firebase Firestore</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
					</div>
				</div>
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://physiosearch.thiagof.com"}
						target="_blank"
						className="rounded-lg overflow-hidden  border shadow-sm"
					>
						<img
							src="/assets/physiosearch.png"
							className="w-full  object-cover aspect-video"
							alt="PhysioSearch project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">PhysioSearch</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://physiosearch.thiagof.com"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/physiosearch"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<img className="size-6" src="/assets/react.png" alt="" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/scss.png" alt="" />
						<img className="size-6" src="/assets/firebase.png" alt="" />
					</div>
					<p className="line-clamp-3">
						App designed for a group of physiotherapy students to visualize
						parts of the lower limbs of the body, click on highlighted areas,
						and access articles, videos, texts, and more.
					</p>
					<div className="space-x-2 space-y-2">
						<Badge>React</Badge>
						<Badge>Typescript</Badge>
						<Badge>Scss</Badge>
						<Badge>Firebase Firestore</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
						<Badge>React Pinch Zoom</Badge>
					</div>
				</div>
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://thiagof.com"}
						target="_blank"
						className="rounded-lg overflow-hidden  border shadow-sm"
					>
						<img
							src="/assets/portfolio.png"
							className="w-full  object-cover aspect-video"
							alt="Portfolio project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">Thiago.F</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://thiagof.com"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/portfolio"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<NextjsIcon className="size-6" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/tailwind.png" alt="" />
					</div>
					<p className="line-clamp-3">
						A digital space where I showcase what I can do! Here, you'll find my
						projects, the technologies I use, and a bit about my journey as a
						developer. Built with lots of code, coffee, lofi, and a constant
						drive to learn more. Feel free to explore! 😃💻
					</p>
					<div className=" space-x-2 space-y-2">
						<Badge>NextJs</Badge>
						<Badge>Typescript</Badge>
						<Badge>TailwindCss</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
					</div>
				</div>
				<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-2 gap-6">
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">MangaStore</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"https://manga-store-six.vercel.app/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"https://github.com/ythiago03/manga-store"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<img className="size-6" src="/assets/react.png" alt="" />
							<img className="size-6" src="/assets/typescript.png" alt="" />
							<img className="size-6" src="/assets/css.png" alt="" />
						</div>
						<p className="line-clamp-3">A Manga E-Commerce.</p>
						<div className=" space-x-2 space-y-2">
							<Badge>React</Badge>
							<Badge>Typescript</Badge>
							<Badge>Css</Badge>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Projects;
