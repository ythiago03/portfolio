import GithubCard from "@/components/template/GithubCard";
import HomeCards from "@/components/template/HomeCards";
import Typewriter from "@/components/template/Typewriter";
import GithubService from "@/services/githubService";
import { FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const githubService = new GithubService("ythiago03");
	const latestRepos = await githubService.getLastUpdateds();

	return (
		<main className="mt-40">
			<section>
				<section className="relative z-10 w-full mt-20 flex items-center">
					<div className="grow">
						<h1 className="text-6xl md:text-7xl font-extrabold">
							Thiago Fidêncio,
						</h1>
						<Typewriter />
					</div>
					<div className="w-full opacity-40 -z-1 blur-[1px] absolute md:opacity-100 md:w-auto md:blur-none md:z-0 md:relative md:left-0 grow flex justify-end">
						<Image
							unoptimized
							src={"/assets/lain.gif"}
							alt="Serial Experiments Lain gif"
							width={0}
							height={0}
							className="mx-auto size-1/2 md:size-10/12"
							draggable={false}
						/>
					</div>
				</section>
				<span
					className="absolute w-[15%] max-w-[320px] h-[15%] top-[200px] opacity-[0.1] z-[3] blur-[20px]"
					style={{
						backgroundImage:
							"radial-gradient(at 50% 50%, currentColor 0px, transparent 100%)",
						color: "var(--foreground)",
					}}
				/>
				<div className="mt-16 w-fit mx-auto">
					<p>
						Press{" "}
						<span className="pointer-events-none text-sm p-1.5 text-muted-foreground bg-muted rounded border font-mono">
							Ctrl + K
						</span>{" "}
						to explore
					</p>
				</div>
			</section>
			<HomeCards />
			<section className="mt-16 flex flex-col lg:flex-row">
				<div className="w-full lg:w-1/2">
					<h3 className="inline-flex items-center text-xl font-semibold ">
						<img
							src="/assets/ghost.gif"
							alt="Pixel art ghost gif"
							className="size-10"
						/>{" "}
						Hello World
					</h3>
					<p className="mt-3">
						I'm Thiago Fidêncio, a <span className="font-bold">full-stack</span>{" "}
						developer residing in Brazil.
					</p>

					<p className="mt-3">
						Since I was a child, I've always been interested in
						<span className="font-bold"> games</span> and
						<span className="font-bold"> technology</span>. I've always liked
						creating something from scratch and understanding how things work.
					</p>

					<p className="mt-3">
						I believe that creating <span className="font-bold"> logical</span>{" "}
						and
						<span className="font-bold"> creative</span> solutions is one of the
						factors that most attracts me to embark on a journey into the world
						of coding and software development.
					</p>

					<p className="mt-3">
						My days are filled with lines of code, where I'm constantly
						exploring new ways to{" "}
						<span className="font-bold"> solve problems</span> and{" "}
						<span className="font-bold"> create innovative </span>
						solutions using technologies such as{" "}
						<Link
							href={"https://react.dev/"}
							target="_blank"
							className="inline-flex items-center p-1 gap-1 border rounded-md hover:bg-blue-400/20"
						>
							<img
								src="/assets/react.png"
								alt="React logo"
								className="size-3"
							/>{" "}
							react
						</Link>
						,{" "}
						<Link
							href={"https://www.typescriptlang.org/"}
							target="_blank"
							className="inline-flex items-center p-1 gap-1 border rounded-md hover:bg-blue-400/20"
						>
							<img
								src="/assets/typescript.png"
								alt="Typescript logo"
								className="size-3"
							/>{" "}
							typescript
						</Link>
						,{" "}
						<Link
							href={"https://tailwindcss.com/"}
							target="_blank"
							className="inline-flex items-center p-1 gap-1 border rounded-md hover:bg-blue-400/20"
						>
							<img
								src="/assets/tailwind.png"
								alt="Tailwindcss logo"
								className="size-3"
							/>{" "}
							tailwindcss
						</Link>{" "}
						among others.
					</p>

					<p className="mt-3">
						See more{" "}
						<Link className="font-bold text-blue-400 underline" href={"/about"}>
							about me
						</Link>{" "}
						or my{" "}
						<Link
							className="font-bold text-blue-400 underline"
							href={"/projects"}
						>
							projects
						</Link>
						.
					</p>
					<p className="mt-3">
						Feel free to connect with me, whether it's to discuss the latest
						anime series, share programming insights, or engage in epic gaming
						quests.
					</p>
					<Link
						href={"/assets/ThiagoFidencioCV.pdf"}
						download={"Thiago-Fidencio-CV.pdf"}
						className="flex w-fit px-3 py-2 gap-2 rounded-md mt-3 hover:-rotate-6 hover:bg-primary/90 bg-foreground text-background text-sm"
					>
						<FileDown className="size-4" /> Download Cv
					</Link>
				</div>
				<div className="w-full pt-16 lg:w-1/2 lg:pt-0 lg:pl-16 ">
					<h3 className="font-bold">Recent Projects</h3>
					<div className="w-full h-3/4 mt-3 flex flex-col items-end gap-3 overflow-y-auto">
						{latestRepos.map((repo) => (
							<GithubCard key={repo.name} repo={repo} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
