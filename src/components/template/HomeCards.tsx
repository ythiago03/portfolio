import React from "react";
import Link from "next/link";

import CardHome from "../common/CardHome";
import NextjsIcon from "../common/NextjsIcon";

import { Codepen, Construction, Github, Linkedin } from "lucide-react";
import GithubService from "@/services/githubService";

interface Stack {
	id: string;
	imgPath: string;
}

const HomeCards = async () => {
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
	const githubService = new GithubService("ythiago03");
	const userInfo = await githubService.getProfileInfo();

	return (
		<section className="mt-16 grid grid-cols-5 gap-3">
			<CardHome className="col-span-5 border-none bg-[url('/assets/penguin.gif')] sm:col-span-2 xl:col-span-2">
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
			</CardHome>
			<CardHome className="col-span-5 bg-[url('/assets/github-commits.png')] sm:col-span-3 xl:col-span-2">
				<Link
					href={"https://github.com/ythiago03?tab=repositories"}
					target="_blank"
					className="w-full h-full p-4 flex items-end bg-black/50 hover:bg-black/80  duration-300 ease-out hover:ease-in"
				>
					<div className="w-full flex justify-between text-white">
						<p>
							<span className="font-semibold">Stars:</span>{" "}
							{userInfo.totalStarts}
						</p>
						<p>
							<span className="font-semibold">Followers:</span>{" "}
							{userInfo.totalFollowers}
						</p>
						<p>
							<span className="font-semibold">Repos:</span>{" "}
							{userInfo.totalRepos}
						</p>
					</div>
				</Link>
			</CardHome>
			<CardHome className="relative col-span-2 lg:col-span-1">
				<Link
					href={
						"https://music.youtube.com/watch?v=UggO16V62PY&si=VCMGMuZ4k6NBKe60"
					}
					target="_blank"
					className="w-full h-full p-4 flex flex-col justify-between duration-300 ease-out hover:ease-in"
				>
					<div className="flex justify-between items-center">
						<img
							src="/assets/youtube.png"
							alt="Youtube Music Logo"
							width={0}
							height={0}
							className="size-6"
						/>
						<div className="overflow-hidden w-2/3">
							<div className="marquee space-x-8">
								<span className="whitespace-nowrap text-xl font-bold">
									A Desire to disappear
								</span>
							</div>
						</div>
					</div>
					<span className="absolute mx-auto left-0 right-0 -bottom-15  block size-48 animate-[spin_30s_linear_infinite]  rounded-full overflow-hidden border bg-[url('/assets/song-cover.jpg')] bg-cover bg-center shadow-[0px_0px_40px_0px_rgba(0,_0,_0,_0.4)] dark:shadow-[0px_0px_40px_0px_rgba(247,_250,_252,_0.4)]" />
				</Link>
			</CardHome>
			<CardHome className="col-span-3 lg:col-span-2 xl:col-span-3 border-0 hover:scale-none">
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
			</CardHome>
			<CardHome className="col-span-5 lg:col-span-2 xl:col-span-2">
				<Link
					href={"/blog"}
					className="w-full h-full flex flex-col items-center justify-center"
				>
					<span className="text-2xl font-semibold">Blog</span>
					<span className="inline-flex items-center font-semibold text-muted-foreground">
						(<Construction className="text-yellow-400 size-4 mr-1" /> Under
						construction)
					</span>
				</Link>
			</CardHome>
		</section>
	);
};

export default HomeCards;
