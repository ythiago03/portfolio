"use client";

import React from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ToggleTheme } from "@/components/template/ToggleTheme";

const Navbar = () => {
	const { theme } = useTheme();
	const pathname = usePathname();

	return (
		<nav className="fixed top-3 z-20 bg-background w-2/3 p-3 flex items-center justify-between rounded-lg">
			<Link href={"/"}>
				{theme === "light" ? (
					<Image
						src={"/assets/logo-dark.svg"}
						width={0}
						height={0}
						className="w-24"
						alt="Logo escrito Thiago"
						draggable={false}
					/>
				) : (
					<Image
						src={"/assets/logo-light.svg"}
						width={0}
						height={0}
						className="w-24"
						alt="Logo escrito Thiago"
						draggable={false}
					/>
				)}
			</Link>
			<ul className="flex items-center gap-3">
				<li>
					<Link
						href={"/"}
						className={`${pathname === "/" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href={"/about"}
						className={`${pathname === "/about" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href={"/projects"}
						className={`${pathname === "/projects" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href={"/blog"}
						className={`${pathname === "/blog" ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
					>
						Blog
					</Link>
				</li>
				<li className="pointer-events-none text-sm p-1.5 text-muted-foreground bg-muted rounded border font-mono">
					Press{" "}
					<div className=" inline-flex select-none items-center gap-1 text-[10px] font-medium opacity-100">
						<span className="text-xs">Ctrl +</span>K
					</div>
				</li>

				<ToggleTheme />
			</ul>
		</nav>
	);
};

export default Navbar;
