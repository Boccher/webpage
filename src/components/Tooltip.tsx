import React from "react";

interface TooltipProps {
	children: React.ReactNode;
	message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
	return (
		<div className="group relative inline-block">
			{children}
			<div className="pt-4">
				<span className="absolute left-1/2 top-8 -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-gradient-to-br from-pink-950 to-pink-500 bg-[length:400px_200px] p-2 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
					{message}
				</span>
			</div>
		</div>
	);
};

export default Tooltip;
