import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="relative z-10 w-full mt-20 flex items-center">
				<div className="grow">
					<h1 className="text-7xl font-extrabold">Thiago Fidêncio,</h1>
					<p className="text-3xl mt-4">Frontend Developer</p>
				</div>
				<div className="grow flex justify-end">
					<Image
						src={"/assets/lain.gif"}
						alt="Serial Experiments Lain gif"
						width={0}
						height={0}
						className="size-7/12"
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
		</main>
	);
}
