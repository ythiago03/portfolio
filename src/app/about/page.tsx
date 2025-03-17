import {
	Brain,
	Clapperboard,
	FileDown,
	Gamepad2,
	GitGraph,
	Star,
	Trophy,
	UserPlus,
} from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Stack {
	id: string;
	imgPath: string;
}

function page() {
	const usedAtWorkStaks: Stack[] = [
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
			id: "html",
			imgPath: "/assets/html.png",
		},
		{
			id: "ionic",
			imgPath: "/assets/ionic.png",
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
			id: "tailwind",
			imgPath: "/assets/tailwind.png",
		},
		{
			id: "typescript",
			imgPath: "/assets/typescript.png",
		},
	];
	const haveKnownledgeStaks: Stack[] = [
		{
			id: "angular",
			imgPath: "/assets/angular.png",
		},

		{
			id: "java",
			imgPath: "/assets/java.png",
		},

		{
			id: "scss",
			imgPath: "/assets/scss.png",
		},
		{
			id: "spring",
			imgPath: "/assets/spring.png",
		},
	];
	const learningStaks: Stack[] = [
		{
			id: "azure",
			imgPath: "/assets/azure.png",
		},

		{
			id: "firebase",
			imgPath: "/assets/firebase.png",
		},
	];
	const otherStaks: Stack[] = [
		{
			id: "azure",
			imgPath: "/assets/azure.png",
		},

		{
			id: "firebase",
			imgPath: "/assets/firebase.png",
		},
	];

	const stacks: Stack[] = [];
	return (
		<main className="mt-40">
			<section className="flex mt-20 gap-3">
				<div
					className="group relative w-1/4 h-96 shadow-sm rounded-lg transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105"
					style={{ perspective: "1000px" }}
				>
					<div className="h-full w-full bg-[url('/assets/user-photo.jpg')] bg-cover bg-center rounded-lg shadow-sm transform transition-transform duration-300 group-hover:rotate-x-6 group-hover:rotate-y-6" />
				</div>
				<div className="space-y-3 w-3/4">
					<h1 className="text-center text-6xl md:text-7xl font-extrabold">
						About me
					</h1>
					<div className="flex flex-col gap-3 p-3 bg-muted/20 rounded-lg shadow-sm">
						<h3 className="inline-flex items-center text-xl font-semibold ">
							<img
								src="/assets/ghost.gif"
								alt="Pixel art ghost gif"
								className="size-8"
							/>{" "}
							Hello World
						</h3>
						<p>
							I'm Thiago, a 22-year-old{" "}
							<span className="font-bold">full-stack</span> developer from Belo
							Horizonte, Brazil. Passionate about technology, I love building
							and optimizing applications, always exploring new frameworks and
							best practices.
						</p>
						<p>
							Beyond coding, I'm deeply into anime, gaming, and music. I also
							enjoy drawing and collecting manga,
							<span className="font-bold"> blending creativity</span> with my
							<span className="font-bold"> tech-driven</span> mindset. These
							hobbies fuel my inspiration and keep me constantly learning.
						</p>
						<p>
							Whether it's crafting software, discussing the latest anime, or
							diving into a new game, I'm always eager to connect with
							like-minded people.{" "}
							<span className="font-bold">
								Let's create, play, and innovate together! ;)
							</span>
						</p>
						<Link
							href={"/assets/ThiagoFidencioCV.pdf"}
							download={"Thiago-Fidencio-CV.pdf"}
							className="flex w-fit px-3 py-2 gap-2 rounded-md mt-auto hover:-rotate-6 hover:bg-primary/90 bg-foreground text-background text-sm"
						>
							<FileDown className="size-4" /> Download Cv
						</Link>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 gap-3 mt-20 sm:grid-cols-2 lg:grid-cols-3">
				<div className="w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm">
					<div className="flex items-center gap-3 text-lg font-semibold">
						<UserPlus /> Followers
					</div>
					<div className="text-muted-foreground flex gap-3">
						<div className="flex translate-x-2">
							<Avatar className="size-7">
								<AvatarImage src="https://i.scdn.co/image/ab6761610000e5eb8a1271f7f32e5202924ebff2" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="size-7 -translate-x-2">
								<AvatarImage src="https://i.scdn.co/image/ab6761610000e5eb8a1271f7f32e5202924ebff2" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="size-7 -translate-x-4">
								<AvatarImage src="https://i.scdn.co/image/ab6761610000e5eb8a1271f7f32e5202924ebff2" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="size-7 -translate-x-6">
								<AvatarImage src="https://i.scdn.co/image/ab6761610000e5eb8a1271f7f32e5202924ebff2" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="size-7 -translate-x-8">
								<AvatarImage src="https://i.scdn.co/image/ab6761610000e5eb8a1271f7f32e5202924ebff2" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<span className="-translate-x-6">+ 112</span>
					</div>
				</div>
				<div className="w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm">
					<div className="flex items-center gap-3 text-lg font-semibold">
						<Star /> Starts
					</div>
					<div className="text-muted-foreground">5</div>
				</div>
				<div className="w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm">
					<div className="flex items-center gap-3 text-lg font-semibold">
						<GitGraph /> Commits
					</div>
					<div className="text-muted-foreground">1,954</div>
				</div>
				<div className="w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm">
					<div className="flex items-center gap-3 text-lg font-semibold">
						<Clapperboard /> Top Anime
					</div>
					<Link
						href={
							"https://www.youtube.com/watch?v=OhNwckCLzis&ab_channel=CowboyBebopHD"
						}
						target="_blank"
						className="text-center text-muted-foreground underline hover:text-blue-400"
					>
						Cowboy Bebop
					</Link>
				</div>
				<div className="w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm">
					<div className="flex items-center gap-3 text-lg font-semibold">
						<Gamepad2 /> Top Game
					</div>
					<Link
						href={"https://youtu.be/uHGShqcAHlQ?si=1BG3ZVfKi0YF36pd"}
						target="_blank"
						className="text-center text-muted-foreground underline hover:text-blue-400"
					>
						The Legend of Zelda: Tears of the Kingdom
					</Link>
				</div>
				<div className="w-full h-32 flex flex-col gap-3 p-1 justify-center items-center rounded-lg bg-muted/20 shadow-sm">
					<div className="flex items-center gap-3 text-lg font-semibold">
						<Trophy /> Top Artist
					</div>
					<Link
						href={
							"https://music.youtube.com/channel/UCKGYsaY8I62fXzHhywZAG6w?si=4ygOHltfRVjAUeHN"
						}
						target="_blank"
						className="flex gap-3 items-center text-muted-foreground underline hover:text-blue-400"
					>
						<Avatar className="size-7">
							<AvatarImage src="https://i.scdn.co/image/ab6761610000e5eb8a1271f7f32e5202924ebff2" />
							<AvatarFallback>St</AvatarFallback>
						</Avatar>
						Sewersvlt
					</Link>
				</div>
			</section>
			<section className="mt-20">
				<h2 className="flex items-center gap-3 text-2xl font-semibold">
					<Brain /> Skills
				</h2>
				<Accordion type="single" collapsible className="w-full mt-10">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-2xl">
							I use it at work
						</AccordionTrigger>
						<AccordionContent className="flex gap-3 flex-wrap">
							{usedAtWorkStaks.map((stack: Stack) => (
								<div
									key={stack.id}
									className="h-15 min-w-30 w-fit flex gap-3 p-2 justify-center items-center rounded-lg tex-lg bg-muted/20 shadow-sm"
								>
									<img
										className="w-6"
										src={stack.imgPath}
										alt={`${stack.id} logo`}
									/>
									{stack.id}
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-2xl">
							I have knowledge
						</AccordionTrigger>
						<AccordionContent className="flex gap-3 flex-wrap">
							{haveKnownledgeStaks.map((stack: Stack) => (
								<div
									key={stack.id}
									className="h-15 min-w-30 w-fit flex gap-3 p-2 justify-center items-center rounded-lg tex-lg bg-muted/20 shadow-sm"
								>
									<img
										className="w-6"
										src={stack.imgPath}
										alt={`${stack.id} logo`}
									/>
									{stack.id}
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="text-2xl">
							I am studying
						</AccordionTrigger>
						<AccordionContent className="flex gap-3 flex-wrap">
							{learningStaks.map((stack: Stack) => (
								<div
									key={stack.id}
									className="h-15 min-w-30 w-fit flex gap-3 p-2 justify-center items-center rounded-lg tex-lg bg-muted/20 shadow-sm"
								>
									<img
										className="w-6"
										src={stack.imgPath}
										alt={`${stack.id} logo`}
									/>
									{stack.id}
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className="text-2xl">
							I know a little
						</AccordionTrigger>
						<AccordionContent className="flex gap-3 flex-wrap">
							{otherStaks.map((stack: Stack) => (
								<div
									key={stack.id}
									className="h-15 min-w-30 w-fit flex gap-3 p-2 justify-center items-center rounded-lg tex-lg bg-muted/20 shadow-sm"
								>
									<img
										className="w-6"
										src={stack.imgPath}
										alt={`${stack.id} logo`}
									/>
									{stack.id}
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
}

export default page;
