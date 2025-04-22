import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import Navbar from "@/components/template/Navbar";
import Command from "@/components/template/Command";
import Footer from "@/components/template/Footer";
import { CommandProvider } from "@/contexts/command-context";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Thiago Fidêncio",
	description:
		"A digital space where I showcase what I can do! Here, you'll find my projects, the technologies I use, and a bit about my journey as a developer. Built with lots of code, coffee, lofi, and a constant drive to learn more. Feel free to explore! 😃💻",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-pt-[7.5rem]">
			<body
				className={`${openSans.className} !p-0  w-10/12 !mx-auto antialiased  sm:w-2/3`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<CommandProvider>
						<header>
							<Navbar />
						</header>
						{children}
						<Footer />
						<Command />
					</CommandProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
