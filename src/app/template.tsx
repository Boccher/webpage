"use client";

import { motion } from "framer-motion";

export default function Animate({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.2 }}
		>
			{children}
		</motion.div>
	);
}
