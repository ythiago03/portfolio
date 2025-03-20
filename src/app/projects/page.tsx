import NextjsIcon from "@/components/common/NextjsIcon";
import { Badge } from "@/components/ui/badge";
import { AppWindow, Construction, Github } from "lucide-react";
import Link from "next/link";
interface Stack {
	id: string;
	imgPath: string;
}
const Projects = () => {
	return (
		<main className="mt-30 xl:mt-40 mb-20">
			<h1 className="flex items-center gap-3 my-10 text-2xl font-semibold">
				<Construction /> Projects
			</h1>
			<section className="grid grid-cols-2 gap-6">
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://timerify.vercel.app/"}
						target="_blank"
						className="rounded-lg overflow-hidden h-76 border shadow-sm"
					>
						<img
							src="/assets/timerify.png"
							className="w-full"
							alt="Timerify project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">Timerify</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://timerify.vercel.app/"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/timerify"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<NextjsIcon className="size-6" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/tailwind.png" alt="" />
					</div>
					<p className="line-clamp-3">
						Timerify é uma aplicação web de pomodoro projetada para aumentar sua
						produtividade durante estudos, trabalho ou qualquer outra atividade
						que exija foco. Com uma interface intuitiva e recursos
						personalizáveis, o Timerify oferece uma experiência única para
						gerenciar seu tempo de forma eficiente.
					</p>
					<div className=" space-x-2 space-y-2">
						<Badge>NextJs</Badge>
						<Badge>Typescript</Badge>
						<Badge>TailwindCss</Badge>
						<Badge>Youtube Iframe API</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
					</div>
				</div>
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://devutils-th.vercel.app/"}
						target="_blank"
						className="rounded-lg overflow-hidden h-76 border shadow-sm"
					>
						<img
							src="/assets/devutils.png"
							className="w-full"
							alt="DevUtils project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">DevUtils</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://devutils-th.vercel.app/"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/devutils"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<img className="size-6" src="/assets/react.png" alt="" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/scss.png" alt="" />
						<img className="size-6" src="/assets/firebase.png" alt="" />
					</div>
					<p className="line-clamp-3">
						O DevUtils é um site de utilidades criado para desenvolvedores,
						focado em fornecer ferramentas que ajudam no desenvolvimento.
					</p>
					<div className="space-x-2 space-y-2">
						<Badge>React</Badge>
						<Badge>Typescript</Badge>
						<Badge>Scss</Badge>
						<Badge>Firebase Firestore</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
					</div>
				</div>
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://physiosearch.vercel.app/"}
						target="_blank"
						className="rounded-lg overflow-hidden h-76 border shadow-sm"
					>
						<img
							src="/assets/physiosearch.png"
							className="w-full"
							alt="PhysioSearch project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">PhysioSearch</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://physiosearch.vercel.app/"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/physiosearch"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<img className="size-6" src="/assets/react.png" alt="" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/scss.png" alt="" />
						<img className="size-6" src="/assets/firebase.png" alt="" />
					</div>
					<p className="line-clamp-3">
						App para estudantes visualizarem partes de membros inferiores do
						corpo, podendo clicar sobre os membros destacados e visualizar
						artigos, videos, textos etc.
					</p>
					<div className="space-x-2 space-y-2">
						<Badge>React</Badge>
						<Badge>Typescript</Badge>
						<Badge>Scss</Badge>
						<Badge>Firebase Firestore</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
						<Badge>React Pinch Zoom</Badge>
					</div>
				</div>
				<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
					<Link
						href={"https://timerify.vercel.app/"}
						target="_blank"
						className="rounded-lg overflow-hidden h-76 border shadow-sm"
					>
						<img
							src="/assets/portfolio.png"
							className="w-full"
							alt="Portfolio project screenshot"
						/>
					</Link>
					<div className="flex items-center gap-3">
						<h2 className="text-xl font-bold">Thiago.F</h2>
						<span className="w-full h-1 bg-foreground" />
						<div className="flex gap-3">
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://timerify.vercel.app/"}
								target="_blank"
							>
								<AppWindow className="size-6" />
							</Link>
							<Link
								className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
								href={"https://github.com/ythiago03/portfolio"}
								target="_blank"
							>
								<Github className="size-6" />
							</Link>
						</div>
					</div>
					<div className="flex gap-3">
						<NextjsIcon className="size-6" />
						<img className="size-6" src="/assets/typescript.png" alt="" />
						<img className="size-6" src="/assets/tailwind.png" alt="" />
					</div>
					<p className="line-clamp-3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
						recusandae aliquid accusamus magnam deleniti laborum temporibus hic
						excepturi. Beatae cumque provident natus architecto eaque
						asperiores! Quos recusandae vero rerum quia.
					</p>
					<div className=" space-x-2 space-y-2">
						<Badge>NextJs</Badge>
						<Badge>Typescript</Badge>
						<Badge>TailwindCss</Badge>
						<Badge>Lucide Icons</Badge>
						<Badge>Shadcn/ui</Badge>
					</div>
				</div>
				<section className="grid grid-cols-3 col-span-2 gap-6">
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="rounded-lg overflow-hidden">
							<img
								src="/assets/timerify.png"
								className="w-full"
								alt="Timerify project screenshot"
							/>
						</div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">Timerify</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
						</div>
						<p className="line-clamp-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel
							earum tempora voluptatibus ullam possimus obcaecati excepturi
							error vitae, laudantium vero odio dolore reiciendis, quaerat qui
							ratione, quia repudiandae velit!
						</p>
					</div>
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="rounded-lg overflow-hidden">
							<img
								src="/assets/timerify.png"
								className="w-full"
								alt="Timerify project screenshot"
							/>
						</div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">Timerify</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
						</div>
						<p className="line-clamp-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel
							earum tempora voluptatibus ullam possimus obcaecati excepturi
							error vitae, laudantium vero odio dolore reiciendis, quaerat qui
							ratione, quia repudiandae velit!
						</p>
					</div>
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="rounded-lg overflow-hidden">
							<img
								src="/assets/timerify.png"
								className="w-full"
								alt="Timerify project screenshot"
							/>
						</div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">Timerify</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
						</div>
						<p className="line-clamp-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel
							earum tempora voluptatibus ullam possimus obcaecati excepturi
							error vitae, laudantium vero odio dolore reiciendis, quaerat qui
							ratione, quia repudiandae velit!
						</p>
					</div>
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="rounded-lg overflow-hidden">
							<img
								src="/assets/timerify.png"
								className="w-full"
								alt="Timerify project screenshot"
							/>
						</div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">Timerify</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
						</div>
						<p className="line-clamp-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel
							earum tempora voluptatibus ullam possimus obcaecati excepturi
							error vitae, laudantium vero odio dolore reiciendis, quaerat qui
							ratione, quia repudiandae velit!
						</p>
					</div>
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="rounded-lg overflow-hidden">
							<img
								src="/assets/timerify.png"
								className="w-full"
								alt="Timerify project screenshot"
							/>
						</div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">Timerify</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
						</div>
						<p className="line-clamp-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel
							earum tempora voluptatibus ullam possimus obcaecati excepturi
							error vitae, laudantium vero odio dolore reiciendis, quaerat qui
							ratione, quia repudiandae velit!
						</p>
					</div>
					<div className="flex flex-col gap-3 p-6 rounded-lg bg-muted/20 shadow-sm">
						<div className="rounded-lg overflow-hidden">
							<img
								src="/assets/timerify.png"
								className="w-full"
								alt="Timerify project screenshot"
							/>
						</div>
						<div className="flex items-center gap-3">
							<h2 className="text-xl font-bold">Timerify</h2>
							<span className="w-full h-1 bg-foreground" />
							<div className="flex gap-3">
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<AppWindow className="size-6" />
								</Link>
								<Link
									className="size-10 flex items-center justify-center  p-1 rounded-sm hover:bg-zinc-500/20"
									href={"/"}
									target="_blank"
								>
									<Github className="size-6" />
								</Link>
							</div>
						</div>
						<div className="flex gap-3">
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
							<AppWindow className="size-6" />
						</div>
						<p className="line-clamp-3">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vel
							earum tempora voluptatibus ullam possimus obcaecati excepturi
							error vitae, laudantium vero odio dolore reiciendis, quaerat qui
							ratione, quia repudiandae velit!
						</p>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Projects;
