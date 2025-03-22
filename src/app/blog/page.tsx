import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
	return (
		<main className="h-[calc(100vh-220px)] md:h-[calc(100vh-190px)] lg:h-[calc(100vh-115px)]  flex items-center justify-center">
			<section className="relative z-10 w-full mt-20 flex items-center">
				<div className="flex flex-col gap-3 grow">
					<span className="text-2xl font-semibold">Oops!</span>
					<h1 className="text-6xl font-extrabold">Under construction</h1>
					<p className="text-xl">This page is under construction</p>
					<Link
						href={"/"}
						className="flex w-fit px-3 py-2 gap-2 rounded-md mt-3 hover:-rotate-6 hover:bg-primary/90 bg-foreground text-background text-sm"
					>
						Back to homepage
					</Link>
				</div>
				<div className="w-full opacity-40 -z-1 blur-[1px] absolute md:opacity-100 md:w-auto md:blur-none md:z-0 md:relative md:left-0 grow flex justify-end">
					<Image
						unoptimized
						src={"/assets/lain.gif"}
						alt="Serial Experiments Lain gif"
						width={0}
						height={0}
						className="mx-auto size-1/2 md:size-8/12"
						draggable={false}
					/>
				</div>
			</section>
		</main>
	);
};

export default Blog;
