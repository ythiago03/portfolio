import React from "react";
import Image from "next/image";
import Link from "next/link";

import { posts } from "#site/content";
import Post from "@/components/template/Post";
import { sortPosts, sortPostsByDateDesc } from "@/lib/utils";

const Blog = () => {
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const displayPosts = sortPostsByDateDesc(sortedPosts);
	return (
		<main className="mt-30 xl:mt-40 mb-20">
			<h1 className="flex items-center gap-3 my-10 text-2xl font-semibold">
				Latest Posts
			</h1>
			{displayPosts?.length > 0 ? (
				<ul className="flex flex-col">
					{displayPosts.map((post) => (
						<li key={post.slug}>
							<Post
								slug={post.slug}
								title={post.title}
								description={post.description}
								date={post.date}
							/>
						</li>
					))}
				</ul>
			) : (
				<p>No posts</p>
			)}
		</main>
	);
};

export default Blog;
