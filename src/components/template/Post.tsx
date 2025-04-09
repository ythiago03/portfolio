import { Calendar } from "lucide-react";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface PostProps {
	slug: string;
	title: string;
	description?: string;
	date: string;
}

const Post = ({ slug, title, description, date }: PostProps) => {
	return (
		<article className="flex flex-col gap-2 border-border border-b py-3">
			<div>
				<h2 className="text-2xl font-bold">
					<Link href={`${slug}`}>{title}</Link>
				</h2>
			</div>
			<p className="max-w-none text-muted-foreground line-clamp-3">
				{description}
			</p>
			<div className="flex justify-between items-center">
				<dl>
					<dt className="sr-only">Published on</dt>
					<dd className="text-sm sm:text-base font-medium flex items-center gap-1">
						<Calendar className="size-4" />
						<time dateTime={date}>{formatDate(date)}</time>
					</dd>
				</dl>
				<Link
					href={`${slug}`}
					className={cn(buttonVariants({ variant: "link" }), "py-0")}
				>
					Read More
				</Link>
			</div>
		</article>
	);
};

export default Post;
