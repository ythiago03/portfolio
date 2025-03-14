import Link from "next/link";

import { Github, Star } from "lucide-react";

const GithubCard = () => {
	return (
		<div className="w-full flex mt-3 border p-3 rounded-sm">
			<div>
				<h4 className="font-semibold">Timerify</h4>
				<p className="text-sm text-zinc-500">Updated 3 weeks ago</p>
				<p className="mt-3 line-clamp-2 text-sm">
					Timerify é uma aplicação web de pomodoro projetada para aumentar sua
					produtividade durante estudos, trabalho ou qualquer outra atividade
					que exija foco. Com uma interface intuitiva e recursos perso…
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
	);
};

export default GithubCard;
