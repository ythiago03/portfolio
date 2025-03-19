"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowBigUp } from "lucide-react";

const ScrollToTop = () => {
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Button onClick={handleScrollToTop} className="size-8 cursor-pointer">
			<ArrowBigUp className="size-6" />
		</Button>
	);
};

export default ScrollToTop;
