"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter({ code }: { code: string }) {
	return (
		<SyntaxHighlighter
			language="javascript"
			customStyle={{
				maxWidth: "500px",
				minWidth: "300px",
				borderRadius: "15px",
				fontSize:'14px',
				overflow:"hidden"
			}}
			style={coldarkDark}
			lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
			wrapLines={true}
		>
			{code}
		</SyntaxHighlighter>
	);
}

export default CodeHighlighter;
