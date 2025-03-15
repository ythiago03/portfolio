"use client";

import { createContext, useContext, useState } from "react";

interface CommandProps {
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue = {
	open: false,
	setIsOpen: () => {},
};

const CommandContext = createContext<CommandProps>(defaultValue);

const CommandProvider = ({ children }: { children: React.ReactNode }) => {
	const [open, setIsOpen] = useState<boolean>(false);
	return (
		<CommandContext.Provider value={{ open, setIsOpen }}>
			{children}
		</CommandContext.Provider>
	);
};

const useCommand = () => {
	const context = useContext(CommandContext);

	if (!context) {
		throw new Error("useCommand must be used within a CommandProvider");
	}

	return context;
};

export { CommandProvider, useCommand };
