"use client";

import React from "react";
import { ToggleTheme } from "@/components/template/ToggleTheme";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
	const { theme } = useTheme();

	return (
		<nav className="w-full p-3 my-3 flex items-center justify-between rounded-lg border ">
			<Link href={"/"}>
				{theme === "dark" ? (
					<Image
						src={"/assets/Logo.svg"}
						width={0}
						height={0}
						className="w-24"
						alt="Logo escrito Thiago"
					/>
				) : (
					<Image
						src={"/assets/Logo-black.svg"}
						width={0}
						height={0}
						className="w-24"
						alt="Logo escrito Thiago"
					/>
				)}
			</Link>
			<ul className="flex items-center gap-3">
				<li className="cursor-pointer hover:font-semibold">Home</li>
				<li className="cursor-pointer hover:font-semibold">About</li>
				<li className="cursor-pointer hover:font-semibold">Projects</li>
				<li className="cursor-pointer hover:font-semibold">Blog</li>
				<li>
					<p className="text-sm text-muted-foreground">
						Press{" "}
						<div className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
							<span className="text-xs">⌘</span>K
						</div>
					</p>
				</li>
				<li>
					<ToggleTheme />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
