import type RepoInfo from "@/types/RepoInfo";

interface UserInfo {
	totalStarts: number;
	totalRepos: number;
	totalFollowers: number;
}

class GithubService {
	userName = "";
	repos = [];
	URL = "https://api.github.com/users/";

	constructor(username: string) {
		this.userName = username;
	}

	async getProfileInfo(): Promise<UserInfo> {
		try {
			const reposResponse = await fetch(
				`${this.URL}${this.userName}/repos?per_page=100`,
				{
					cache: "force-cache",
					next: {
						revalidate: 3600,
					},
				},
			);
			if (!reposResponse.ok) throw new Error("Failed to fetch repos");

			const reposData = await reposResponse.json();

			const totalStarts = reposData.reduce(
				(sum: number, repo: any) => sum + repo.stargazers_count,
				0,
			);

			const userResponse = await fetch(`${this.URL}${this.userName}`, {
				cache: "force-cache",
				next: {
					revalidate: 3600,
				},
			});
			if (!userResponse.ok) throw new Error("Failed to fetch user info");
			const userData = await userResponse.json();

			const response: UserInfo = {
				totalStarts: totalStarts,
				totalRepos: userData.public_repos || 0,
				totalFollowers: userData.followers || 0,
			};

			return response;
		} catch (e) {
			console.error(e);
			const defaultUserInfo = {
				totalStarts: 4,
				totalRepos: 46,
				totalFollowers: 113,
			};
			return defaultUserInfo;
		}
	}

	async getLastUpdateds(): Promise<RepoInfo[]> {
		try {
			const reposResponse = await fetch(
				`${this.URL}${this.userName}/repos?sort=updated&per_page=4`,
				{
					cache: "force-cache",
					next: {
						revalidate: 3600,
					},
				},
			);
			if (!reposResponse.ok) throw new Error("Failed to fetch repos");

			const reposData = await reposResponse.json();
			const response: RepoInfo[] = [];

			// biome-ignore lint/complexity/noForEach: <explanation>
			reposData.forEach((repo: any) => {
				const updatedAt = new Date(repo.updated_at).toDateString();

				const repoInfo: RepoInfo = {
					name: repo.name,
					updatedAt,
					starts: repo.stargazers_count,
					forks: repo.forks,
					link: repo.html_url,
					description: repo.description ?? "",
					language: repo.language ?? "",
					license: repo.license?.name ?? "",
					projectUrl: repo.homepage ?? "",
				};

				response.push(repoInfo);
			});
			return response;
		} catch (e) {
			const defaultRepo = {
				name: "Portfolio",
				updatedAt: new Date().toDateString(),
				description: "Portfolio",
				starts: 0,
				forks: 0,
				link: "https://github.com/ythiago03/portfolio",
				language: "TypeScript",
				license: "MIT",
				projectUrl: "",
			};
			console.error(e);
			return [defaultRepo];
		}
	}
}

export default GithubService;
