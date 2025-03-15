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
import { Calculator, Calendar, House, Smile, User } from "lucide-react";

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

			if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen((open) => !open);
				router.push("/");
			}

			if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
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
					<CommandGroup heading="Suggestions">
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
					</CommandGroup>
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
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								router.push("/about");
								setIsOpen(false);
							}}
						>
							<User />
							<span>About</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};

export default Command;
