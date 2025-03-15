import Link from "next/link";

import { Github, Star } from "lucide-react";
import type RepoInfo from "@/types/RepoInfo";

const GithubCard = ({ repo }: { repo: RepoInfo }) => {
	return (
		<div className="w-full flex mt-3 border p-3 rounded-sm">
			<div>
				<h4 className="font-semibold">{repo.name}</h4>
				<p className="text-sm text-zinc-500">Updated at {repo.updatedAt}</p>
				<p className="mt-3 line-clamp-2 text-sm">{repo.description}</p>
				<p className="inline-flex items-center mt-3 gap-1 text-sm text-zinc-500 hover:text-blue-400">
					<Star className="size-4" /> {repo.starts}
				</p>
			</div>
			<Link
				className="size-6 ml-auto p-1 rounded-sm hover:bg-zinc-500/20"
				href={repo.link}
				target="_blank"
			>
				<Github className="size-4" />
			</Link>
		</div>
	);
};

export default GithubCard;
