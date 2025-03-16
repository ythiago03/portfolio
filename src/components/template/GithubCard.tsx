import Link from "next/link";

import { AppWindow, CodeXml, GitFork, Github, Scale, Star } from "lucide-react";
import type RepoInfo from "@/types/RepoInfo";

const GithubCard = ({ repo }: { repo: RepoInfo }) => {
	return (
		<div className="w-full flex mt-3 border p-3 rounded-sm">
			<div>
				<h4 className="font-semibold">{repo.name}</h4>
				<p className="text-sm text-zinc-500">Updated at {repo.updatedAt}</p>
				<p className="mt-3 line-clamp-2 text-sm">{repo.description}</p>

				<ul className="mt-3 flex gap-3 flex-wrap">
					{repo.language !== "" && (
						<li className="inline-flex items-center  gap-1 text-sm text-zinc-500 hover:text-blue-400">
							<CodeXml className="size-4" /> {repo.language}
						</li>
					)}
					<li className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-blue-400">
						<Star className="size-4" /> {repo.starts}
					</li>
					<li className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-blue-400">
						<GitFork className="size-4" /> {repo.forks}
					</li>
					{repo.license !== "" && (
						<li className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-blue-400">
							<Scale className="size-4" /> {repo.license}
						</li>
					)}
				</ul>
			</div>
			<div className="ml-auto flex gap-3">
				{repo.projectUrl !== "" && (
					<Link
						className="size-6  p-1 rounded-sm hover:bg-zinc-500/20"
						href={repo.projectUrl}
						target="_blank"
					>
						<AppWindow className="size-4" />
					</Link>
				)}
				<Link
					className="size-6  p-1 rounded-sm hover:bg-zinc-500/20"
					href={repo.link}
					target="_blank"
				>
					<Github className="size-4" />
				</Link>
			</div>
		</div>
	);
};

export default GithubCard;
