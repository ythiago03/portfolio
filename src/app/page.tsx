import NextjsIcon from "@/components/common/NextjsIcon";
import { Button } from "@/components/ui/button";
import { Codepen, FileDown, Github, Linkedin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Stack {
	id: string;
	imgPath: string;
}

export default function Home() {
	const stacks: Stack[] = [
		{
			id: "angular",
			imgPath: "/assets/angular.png",
		},
		{
			id: "azure",
			imgPath: "/assets/azure.png",
		},
		{
			id: "css",
			imgPath: "/assets/css.png",
		},
		{
			id: "docker",
			imgPath: "/assets/docker.png",
		},
		{
			id: "figma",
			imgPath: "/assets/figma.png",
		},
		{
			id: "firebase",
			imgPath: "/assets/firebase.png",
		},
		{
			id: "html",
			imgPath: "/assets/html.png",
		},
		{
			id: "ionic",
			imgPath: "/assets/ionic.png",
		},
		{
			id: "java",
			imgPath: "/assets/java.png",
		},
		{
			id: "javascript",
			imgPath: "/assets/javascript.png",
		},
		{
			id: "mysql",
			imgPath: "/assets/mysql.png",
		},
		{
			id: "nodejs",
			imgPath: "/assets/nodejs.png",
		},

		{
			id: "react",
			imgPath: "/assets/react.png",
		},
		{
			id: "scss",
			imgPath: "/assets/scss.png",
		},
		{
			id: "spring",
			imgPath: "/assets/spring.png",
		},
		{
			id: "tailwind",
			imgPath: "/assets/tailwind.png",
		},
		{
			id: "typescript",
			imgPath: "/assets/typescript.png",
		},
	];
	return (
		<>
			<main className="mt-40">
				<section>
					<section className="relative z-10 w-full mt-20 flex items-center">
						<div className="grow">
							<h1 className="text-7xl font-extrabold">Thiago Fidêncio,</h1>
							<p className="text-3xl mt-4">Frontend Developer</p>
						</div>
						<div className="grow flex justify-end">
							<Image
								unoptimized
								src={"/assets/lain.gif"}
								alt="Serial Experiments Lain gif"
								width={0}
								height={0}
								className="size-10/12"
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
				<section className="mt-16 grid grid-cols-5 gap-3">
					<div className="col-span-2 h-48 w-full rounded-lg overflow-hidden border bg-[url('/assets/penguin.gif')] bg-cover bg-[0%_20%] hover:scale-[0.99] duration-300 ease-out hover:ease-in">
						<Link
							href={"https://github.com/ythiago03"}
							target="_blank"
							className="w-full h-full p-4 flex flex-col justify-between bg-black/50 hover:bg-black/80  duration-300 ease-out hover:ease-in"
						>
							<Github className="size-6 text-white" />
							<div>
								<h3 className="text-white font-semibold text-xl">Github</h3>
								<p className="text-white text-lg">See my github profile</p>
							</div>
						</Link>
					</div>
					<div className="col-span-2 h-48 w-full rounded-lg overflow-hidden border bg-[url('/assets/github-commits.png')] bg-cover  bg-[0%_20%] hover:scale-[0.99] duration-300 ease-out hover:ease-in">
						<Link
							href={"https://github.com/ythiago03?tab=repositories"}
							target="_blank"
							className="w-full h-full p-4 flex items-end bg-black/50 hover:bg-black/80  duration-300 ease-out hover:ease-in"
						>
							<div className="w-full flex justify-between text-white">
								<p>
									<span className="font-semibold">Stars:</span> 12
								</p>
								<p>
									<span className="font-semibold">Commits:</span> 1.112
								</p>
								<p>
									<span className="font-semibold">Repos:</span> 230
								</p>
							</div>
						</Link>
					</div>
					<div className="h-48 w-full rounded-lg overflow-hidden border bg-black text-white hover:scale-[0.99] duration-300 ease-out hover:ease-in">
						<Link
							href={
								"https://music.youtube.com/watch?v=UggO16V62PY&si=VCMGMuZ4k6NBKe60"
							}
							target="_blank"
							className="w-full h-full relative p-4 flex flex-col justify-between bg-black/50 hover:bg-black/80  duration-300 ease-out hover:ease-in"
						>
							<img
								src="/assets/youtube.png"
								alt="Youtube Music Logo"
								width={0}
								height={0}
								className="size-6"
							/>
							<div className="absolute bottom-14 -left-11 overflow-hidden w-2/3 -rotate-90">
								<div className="marquee space-x-8">
									<span className="whitespace-nowrap text-xl font-bold">
										A Desire to disappear
									</span>
								</div>
							</div>
							<span className="absolute -bottom-10 -right-10 block size-48 animate-spin duration-50000 rounded-full overflow-hidden border bg-[url('/assets/song-cover.jpg')] bg-cover bg-center shadow-[0px_0px_60px_0px_rgba(247,_250,_252,_0.4)]">
								<span className="absolute block top-0 right-0 bottom-0 left-0 m-auto rounded-full size-8 border-2 border-gray bg-black" />
							</span>
						</Link>
					</div>

					<div className="col-span-3 h-48 w-full  rounded-lg overflow-hidden">
						<div className="w-full h-full grid grid-cols-2 gap-3">
							<Link
								href={"https://www.linkedin.com/in/ythiago03/"}
								target="_blank"
								className="w-full h-full p-4 flex items-center justify-center text-xl border  rounded-lg bg-blue-500 hover:scale-[0.99] duration-300 ease-out hover:ease-in"
							>
								<Linkedin className="size-10 text-white" />
							</Link>
							<Link
								href={"https://codepen.io/Ythiago03"}
								target="_blank"
								className="w-full h-full p-4 flex items-center justify-center text-xl border  rounded-lg bg-white hover:scale-[0.99] duration-300 ease-out hover:ease-in"
							>
								<Codepen className="size-10 text-black" />
							</Link>
							<div className="relative col-span-2 w-full h-full flex items-center ">
								<span className="absolute left-0 z-10 block bg-gradient-to-r from-background to- h-full w-32" />
								<div className="flex w-full items-center gap-3 marquee ">
									<NextjsIcon />
									{stacks.map((stack: Stack) => (
										<img
											key={stack.id}
											src={stack.imgPath}
											alt={`${stack.id} logo`}
											width={0}
											height={0}
											className="w-12"
										/>
									))}
									<NextjsIcon />
									{stacks.map((stack: Stack) => (
										<img
											key={stack.id}
											src={stack.imgPath}
											alt={`${stack.id} logo`}
											width={0}
											height={0}
											className="w-12"
										/>
									))}
								</div>
								<span className="absolute right-0 z-16 block bg-gradient-to-l from-background to- h-full w-32" />
							</div>
						</div>
					</div>
					<div className="col-span-2 h-48 w-full flex justify-center items-center rounded-lg overflow-hidden border  hover:scale-[0.99] duration-300 ease-out hover:ease-in">
						<h3 className="text-2xl -rotate-10 font-semibold">
							Blog (Under Construction)
						</h3>
					</div>
				</section>
				<section className="mt-16 flex">
					<div className="w-1/2">
						<h3 className="inline-flex items-center text-xl font-semibold ">
							<img
								src="/assets/ghost.gif"
								alt="Pixel art ghost gif"
								className="size-10"
							/>{" "}
							Hello World
						</h3>
						<p className="mt-3">
							I'm Thiago Fidêncio, a{" "}
							<span className="font-bold">full-stack</span> developer residing
							in Brazil.
						</p>

						<p className="mt-3">
							Since I was a child, I've always been interested in
							<span className="font-bold"> games</span> and
							<span className="font-bold"> technology</span>. I've always liked
							creating something from scratch and understanding how things work.
						</p>

						<p className="mt-3">
							I believe that creating{" "}
							<span className="font-bold"> logical</span> and
							<span className="font-bold"> creative</span> solutions is one of
							the factors that most attracts me to embark on a journey into the
							world of coding and software development.
						</p>

						<p className=" flexmt-3">
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
							<Link
								className="font-bold text-blue-400 underline"
								href={"/about"}
							>
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
						<Button className="mt-3 hover:-rotate-6">
							<FileDown /> Download Cv
						</Button>
					</div>
					<div className="w-1/2 p-16 pt-0">
						<h3 className="font-bold">Recent Projects</h3>
						<div className="w-full h-3/4 flex flex-col gap-3 overflow-y-auto">
							<div className="w-full flex mt-3 border p-3 rounded-sm">
								<div>
									<h4 className="font-semibold">Timerify</h4>
									<p className="text-sm text-zinc-500">Updated 3 weeks ago</p>
									<p className="mt-3 line-clamp-2 text-sm">
										Timerify é uma aplicação web de pomodoro projetada para
										aumentar sua produtividade durante estudos, trabalho ou
										qualquer outra atividade que exija foco. Com uma interface
										intuitiva e recursos perso…
									</p>
									<p className="inline-flex items-center mt-3 gap-1 text-sm text-zinc-500 hover:text-blue-400">
										<Star className="size-4" /> 10
									</p>
								</div>
								<Link
									className="size-6 p-1 rounded-sm hover:bg-zinc-500/20"
									href={"https://github.com/luizmacedo/timerify"}
								>
									<Github className="size-4" />
								</Link>
							</div>
							<div className="w-full flex mt-3 border p-3 rounded-sm">
								<div>
									<h4 className="font-semibold">Timerify</h4>
									<p className="text-sm text-zinc-500">Updated 3 weeks ago</p>
									<p className="mt-3 line-clamp-2 text-sm">
										Timerify é uma aplicação web de pomodoro projetada para
										aumentar sua produtividade durante estudos, trabalho ou
										qualquer outra atividade que exija foco. Com uma interface
										intuitiva e recursos perso…
									</p>
									<p className="inline-flex items-center mt-3 gap-1 text-sm text-zinc-500 hover:text-blue-400">
										<Star className="size-4" /> 10
									</p>
								</div>
								<Link
									className="size-6 p-1 rounded-sm hover:bg-zinc-500/20"
									href={"https://github.com/luizmacedo/timerify"}
								>
									<Github className="size-4" />
								</Link>
							</div>
							<div className="w-full flex mt-3 border p-3 rounded-sm">
								<div>
									<h4 className="font-semibold">Timerify</h4>
									<p className="text-sm text-zinc-500">Updated 3 weeks ago</p>
									<p className="mt-3 line-clamp-2 text-sm">
										Timerify é uma aplicação web de pomodoro projetada para
										aumentar sua produtividade durante estudos, trabalho ou
										qualquer outra atividade que exija foco. Com uma interface
										intuitiva e recursos perso…
									</p>
									<p className="inline-flex items-center mt-3 gap-1 text-sm text-zinc-500 hover:text-blue-400">
										<Star className="size-4" /> 10
									</p>
								</div>
								<Link
									className="size-6 p-1 rounded-sm hover:bg-zinc-500/20"
									href={"https://github.com/luizmacedo/timerify"}
								>
									<Github className="size-4" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
