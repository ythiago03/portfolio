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
				<li>
					<Link href={"/"} className="hover:text-muted-foreground">
						Home
					</Link>
				</li>
				<li>
					<Link href={"/"} className="hover:text-muted-foreground">
						About
					</Link>
				</li>
				<li>
					<Link href={"/"} className="hover:text-muted-foreground">
						Projects
					</Link>
				</li>
				<li>
					<Link href={"/"} className="hover:text-muted-foreground">
						Blog
					</Link>
				</li>
				<li>
					<p className="pointer-events-none text-sm p-1.5 text-muted-foreground bg-muted rounded border font-mono">
						Press{" "}
						<div className=" inline-flex select-none items-center gap-1 text-[10px] font-medium opacity-100">
							<span className="text-xs">⌘</span>K
						</div>
					</p>
				</li>

				<ToggleTheme />
			</ul>
		</nav>
	);
};

export default Navbar;
