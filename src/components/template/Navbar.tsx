"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { useCommand } from "@/contexts/command-context";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { ToggleTheme } from "@/components/template/ToggleTheme";
import { Menu } from "lucide-react";

const Navbar = () => {
	const { theme } = useTheme();
	const pathname = usePathname();
	const { setIsOpen } = useCommand();

	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	return (
		<nav className="fixed top-3 z-20 bg-background/80 backdrop-blur-sm  w-10/12 p-3 flex items-center justify-between rounded-lg sm:w-2/3">
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
			<div className="flex items-center gap-3">
				<ul className="hidden md:flex items-center gap-3">
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
				</ul>
				<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
					<DrawerTrigger className="block md:hidden cursor-pointer">
						<Menu />
					</DrawerTrigger>
					<DrawerContent>
						<DrawerTitle className="hidden">Navgation menu</DrawerTitle>
						<DrawerHeader>
							<ul className="flex flex-col my-auto w-full  items-center gap-3 p-3">
								<li className="w-full text-center">
									<Link
										href={"/"}
										className={`${pathname === "/" ? "text-foreground" : "text-muted-foreground"}  w-full text-xl hover:text-foreground`}
									>
										<DrawerClose className="w-full">Home</DrawerClose>
									</Link>
								</li>
								<li className="w-full text-center">
									<Link
										href={"/about"}
										className={`${pathname === "/about" ? "text-foreground" : "text-muted-foreground"}  w-full text-xl hover:text-foreground`}
									>
										<DrawerClose className="w-full">About</DrawerClose>
									</Link>
								</li>
								<li className="w-full text-center">
									<Link
										href={"/projects"}
										className={`${pathname === "/projects" ? "text-foreground" : "text-muted-foreground"}  w-full text-xl hover:text-foreground`}
									>
										<DrawerClose className="w-full">Projects</DrawerClose>
									</Link>
								</li>
								<li className="w-full text-center">
									<Link
										href={"/blog"}
										className={`${pathname === "/blog" ? "text-foreground" : "text-muted-foreground"}  w-full text-xl hover:text-foreground`}
									>
										<DrawerClose className="w-full">Blog</DrawerClose>
									</Link>
								</li>
								<li className="w-full text-center">
									<DrawerClose asChild>
										<button
											type="button"
											className="flex md:hidden mx-auto cursor-pointer text-sm p-1.5 text-muted-foreground bg-muted rounded border font-mono"
											onClick={() => {
												setIsDrawerOpen(false);
												setIsOpen(true);
											}}
										>
											Click to explore
										</button>
									</DrawerClose>
								</li>
							</ul>
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
				<ToggleTheme />
			</div>
		</nav>
	);
};

export default Navbar;
