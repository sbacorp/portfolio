"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter({ code }: { code: string }) {
	return (
		<SyntaxHighlighter
			language="javascript"
			customStyle={{maxWidth:'560px'}}
			style={materialDark}
			lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
			wrapLines={true}
		>
			{code}
		</SyntaxHighlighter>
	);
}

export default CodeHighlighter;
