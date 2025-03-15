"use client";

import { useCommand } from "@/contexts/command-context";

const ToggleCommand = () => {
	const { setIsOpen } = useCommand();
	return (
		<div className="mt-16 w-fit mx-auto">
			<p className="hidden md:block">
				Press{" "}
				<span className="pointer-events-none text-sm p-1.5 text-muted-foreground bg-muted rounded border font-mono">
					Ctrl + K
				</span>{" "}
				to explore
			</p>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="flex md:hidden cursor-pointer text-sm p-1.5 text-muted-foreground bg-muted rounded border font-mono"
			>
				Click to explore
			</button>
		</div>
	);
};

export default ToggleCommand;
