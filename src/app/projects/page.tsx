import Link from "next/link";
import { cn } from "@/lib/utils";

import { AppWindow, Construction, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const Projects = () => {
	const projects = [
		{
			id: "timerify",
			title: "Timerify",
			status: "online",
			isHidden: false,
			description:
				"Timerify is a web-based Pomodoro application designed to boost your productivity during study sessions, work, or any other focus-intensive activities.",
			projectLink: "https://timerify.thiagof.com",
			githubLink: "https://github.com/ythiago03/timerify",
			coverPath: "/assets/timerify.png",
			stacks: [
				{
					id: "nextjs",
					title: "Next.js",
				},
				{
					id: "typescript",
					title: "TypeScript",
				},
				{
					id: "tailwind",
					title: "Tailwind CSS",
				},
				{
					id: "youtube-iframe",
					title: "Youtube Iframe",
				},
				{
					id: "lucide",
					title: "Lucide Icons",
				},
				{
					id: "shadcn",
					title: "Shadcn UI",
				},
			],
		},
		{
			id: "portfolio",
			title: "ThiagoF",
			status: "online",
			isHidden: false,
			description:
				"A digital space where I showcase what I can do! Here, you'll find my projects, the technologies I use, and a bit about my journey as a developer.",
			projectLink: "https://thiagof.com",
			githubLink: "https://github.com/ythiago03/portfolio",
			coverPath: "/assets/portfolio.png",
			stacks: [
				{
					id: "nextjs",
					title: "Next.js",
				},
				{
					id: "typescript",
					title: "TypeScript",
				},
				{
					id: "tailwind",
					title: "Tailwind CSS",
				},
				{
					id: "lucide",
					title: "Lucide Icons",
				},
				{
					id: "shadcn",
					title: "Shadcn UI",
				},
			],
		},
		{
			id: "devutils",
			title: "DevUtils",
			status: "online",
			isHidden: false,
			description:
				"DevUtils is a utility website created for developers, focused on providing practical tools that simplify test data generation and string manipulation.",
			projectLink: "https://devutils.thiagof.com",
			githubLink: "https://devutils.thiagof.com",
			coverPath: "/assets/devutils.png",
			stacks: [
				{
					id: "react",
					title: "React",
				},
				{
					id: "typescript",
					title: "TypeScript",
				},
				{
					id: "scss",
					title: "Scss",
				},
				{
					id: "firebaseFirestore",
					title: "Firebase Firestore",
				},
				{
					id: "lucide",
					title: "Lucide Icons",
				},
				{
					id: "shadcn",
					title: "Shadcn UI",
				},
			],
		},
		{
			id: "mangastore",
			title: "MangaStore",
			status: "secondary",
			isHidden: true,
			projectLink: "https://manga-store-ythiago03.vercel.app/",
			githubLink: "https://github.com/ythiago03/manga-store",
			description: "A Manga E-Commerce",
			stacks: [
				{
					id: "react",
					title: "React",
				},
				{
					id: "typescript",
					title: "TypeScript",
				},
			],
		},
		{
			id: "physioSearch",
			title: "PhysioSearch",
			status: "secondary",
			isHidden: false,
			projectLink: "https://physiosearch.thiagof.com/",
			githubLink: "https://github.com/ythiago03/physiosearch",
			description:
				"App designed for a group of physiotherapy students to visualize parts of the lower limbs of the body.",
			stacks: [
				{
					id: "react",
					title: "React",
				},
				{
					id: "typescript",
					title: "TypeScript",
				},
				{
					id: "scss",
					title: "Scss",
				},
				{
					id: "firebaseFirestore",
					title: "Firebase Firestore",
				},
				{
					id: "lucide",
					title: "Lucide Icons",
				},
				{
					id: "shadcn",
					title: "Shadcn UI",
				},
			],
		},
	];

	return (
		<main className="mt-30 xl:mt-40 mb-20">
			<h1 className="flex items-center gap-3 my-10 text-2xl font-semibold">
				<Construction /> Projects
			</h1>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{projects
					.filter((project) => project.status === "online" && !project.isHidden)
					.map((project) => (
						<div
							key={project.id}
							className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm"
						>
							<Link
								href={project.projectLink}
								target="_blank"
								className="rounded-lg overflow-hidden  border shadow-sm"
							>
								<img
									src={project.coverPath}
									className="w-full  object-cover aspect-video"
									alt={`${project.title} project cover`}
								/>
							</Link>
							<div className="flex items-center gap-3">
								<h2 className="text-xl font-bold">{project.title}</h2>
								<span className="w-full h-1 bg-foreground" />
								<div className="flex gap-3">
									<Link
										className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
										href={project.projectLink}
										target="_blank"
									>
										<AppWindow className="size-6" />
									</Link>
									<Link
										className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
										href={project.githubLink}
										target="_blank"
									>
										<Github className="size-6" />
									</Link>
								</div>
							</div>
							<p className="line-clamp-3">{project.description}</p>
							<div className=" space-x-2 space-y-2">
								{project.stacks.map((stack) => (
									<Badge key={stack.id}>{stack.title}</Badge>
								))}
							</div>
						</div>
					))}

				<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 col-span-1 lg:col-span-2 gap-6">
					{projects
						.filter(
							(project) => project.status === "secondary" && !project.isHidden,
						)
						.map((project) => (
							<div
								key={project.id}
								className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm"
							>
								<div className="flex items-center gap-3">
									<h2 className="text-xl font-bold">{project.title}</h2>
									<span className="w-full h-1 bg-foreground" />
									<div className="flex gap-3">
										<Link
											className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
											href={project.projectLink}
											target="_blank"
										>
											<AppWindow className="size-6" />
										</Link>
										<Link
											className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
											href={project.githubLink}
											target="_blank"
										>
											<Github className="size-6" />
										</Link>
									</div>
								</div>
								<p className="line-clamp-3">{project.description}</p>
								<div className=" space-x-2 space-y-2">
									{project.stacks.map((stack) => (
										<Badge key={stack.id}>{stack.title}</Badge>
									))}
								</div>
							</div>
						))}
				</section>
				<Link
					href={"https://github.com/ythiago03?tab=repositories"}
					target="_blank"
					className={cn(buttonVariants({ variant: "link" }), "mt-3 w-fit")}
				>
					See all projects
				</Link>
			</section>
		</main>
	);
};

export default Projects;
