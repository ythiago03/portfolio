import {
	AudioLines,
	Clapperboard,
	FileDown,
	Gamepad2,
	GitGraph,
	Star,
	Trophy,
	UserPlus,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function page() {
	return (
		<main className="mt-40">
			<section className="flex gap-3">
				<div className="w-1/4 h-96 bg-[url('/assets/user-photo.jpg')] bg-cover bg-center rounded-lg shadow-sm" />
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
			<div className="grid grid-cols-1 gap-3 mt-10 sm:grid-cols-2 lg:grid-cols-3">
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
			</div>
		</main>
	);
}

export default page;
