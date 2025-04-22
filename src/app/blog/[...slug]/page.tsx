import { posts } from "#site/content";
import { MDXContent } from "@/components/common/mdx-components";
import { notFound } from "next/navigation";
import "../../../../styles/mdx.css";
interface PostPageProps {
	params: { slug: string[] };
}

const getPostFromParams = async (params: PostPageProps["params"]) => {
	const slug = params?.slug?.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);
	return post;
};

export const generateStaticParams = async (): Promise<
	PostPageProps["params"][]
> => {
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
};
const Post = async ({ params }: any) => {
	const post = await getPostFromParams(params);

	if (!posts || !post?.published) {
		notFound();
	}
	return (
		<main className="mt-30 xl:mt-40 mb-20">
			<article className="w-full max-w-none prose dark:prose-invert ">
				<h1 className="mb-2">{post.title}</h1>
				{post.description ? (
					<p className="text-xl mt-0 text-muted-foreground">
						{post.description}
					</p>
				) : null}
				<hr className="my-4" />
				<MDXContent code={post.body} />
			</article>
		</main>
	);
};

export default Post;
