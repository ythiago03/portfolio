"use client";

import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
	return (
		<TypeAnimation
			sequence={[
				"I'm a full stack developer.",
				1000,
				"I'm a gamer at heart.",
				1000,
				"Anime and coding are my favorite combo.",
				1000,
				"Technology is my passion.",
				1000,
			]}
			wrapper="span"
			speed={50}
			className="text-2xl h-20 mt-6 inline-block"
			repeat={Number.POSITIVE_INFINITY}
		/>
	);
};

export default Typewriter;
