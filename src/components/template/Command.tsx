"use client";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import {
	Calculator,
	Calendar,
	Codepen,
	Construction,
	Github,
	House,
	Linkedin,
	Smile,
	User,
} from "lucide-react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCommand } from "@/contexts/command-context";

const Command = () => {
	const { open, setIsOpen } = useCommand();
	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen((open) => !open);
			}

			if (e.key === "1" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen((open) => !open);
				router.push("/");
			}

			if (e.key === "2" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen((open) => !open);
				router.push("/about");
			}
			if (e.key === "3" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen((open) => !open);
				router.push("/about");
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<CommandDialog open={open} onOpenChange={setIsOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{/* TODO: Make blog post suggestions */}
					{/* <CommandGroup heading="Suggestions">
						<CommandItem>
							<Calendar />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<Smile />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<Calculator />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup> */}
					<CommandSeparator />
					<CommandGroup heading="Pages">
						<CommandItem
							onSelect={() => {
								router.push("/");
								setIsOpen(false);
							}}
						>
							<House />
							<span>Home</span>
							<CommandShortcut>⌘1</CommandShortcut>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								router.push("/about");
								setIsOpen(false);
							}}
						>
							<User />
							<span>About</span>
							<CommandShortcut>⌘2</CommandShortcut>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								router.push("/projects");
								setIsOpen(false);
							}}
						>
							<Construction />
							<span>Projects</span>
							<CommandShortcut>⌘3</CommandShortcut>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Social">
						<CommandItem
							onSelect={() => {
								router.push("https://www.linkedin.com/in/ythiago03/");
								setIsOpen(false);
							}}
						>
							<Linkedin />
							<span>Linkedin</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								router.push("https://github.com/ythiago03");
								setIsOpen(false);
							}}
						>
							<Github />
							<span>Github</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								router.push("https://codepen.io/Ythiago03");
								setIsOpen(false);
							}}
						>
							<Codepen />
							<span>Codepen</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};

export default Command;
