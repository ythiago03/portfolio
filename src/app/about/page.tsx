import { FileDown } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
	return (
		<main className="mt-40">
			<section className="flex gap-3">
				<div className="w-1/4 h-96 bg-[url('/assets/user-photo.jpg')] bg-cover bg-center rounded-lg shadow-sm" />
				<div className="space-y-3 w-3/4">
					<h1 className="text-center text-6xl md:text-7xl font-extrabold">
						About me
					</h1>
					<div className="h-76 flex flex-col gap-3 p-3 bg-muted/20 rounded-lg shadow-sm">
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
		</main>
	);
}

export default page;
