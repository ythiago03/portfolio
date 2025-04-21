import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
	const date = new Date(input);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function sortPosts(posts: any[]) {
	return posts.sort((a, b) => {
		if (a.data > b.data) return -1;
		if (a.data < b.data) return 1;
		return 0;
	});
}

export function getMostRecentPost(posts: any[]) {
	return posts.reduce((latest, current) => {
		return new Date(current.date) > new Date(latest.date) ? current : latest;
	});
}

export function sortPostsByDateDesc(posts: any[]) {
	return posts
		.slice()
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
