"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter({ code }: { code: string }) {
	return (
		<SyntaxHighlighter language="javascript" style={dracula}>
			{code}
		</SyntaxHighlighter>
	);
}

export default CodeHighlighter;
