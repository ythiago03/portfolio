import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main>
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
							<span className="absolute bottom-15 -left-11 whitespace-nowrap  overflow-hidden w-2/3  text-xl font-bold -rotate-90">
								A Desire to disappear
							</span>
							<span className="absolute -bottom-10 -right-10 block size-48 animate-spin duration-10000 rounded-full overflow-hidden border bg-[url('/assets/song-cover.jpg')] bg-cover bg-center shadow-[0px_0px_60px_0px_rgba(247,_250,_252,_0.4)]">
								<span className="absolute block top-0 right-0 bottom-0 left-0 m-auto rounded-full size-8 border-2 border-gray bg-black" />
							</span>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
