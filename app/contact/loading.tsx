import ContentLoader from "react-content-loader";

export default function Loading() {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<ContentLoader
				speed={2}
				width={370}
				height={390}
				viewBox="0 0 370 390"
				backgroundColor="#9e9e9e"
				foregroundColor="#707070"
			>
				<rect x="65" y="82" rx="0" ry="0" width="0" height="1" />
				<rect x="9" y="62" rx="8" ry="8" width="299" height="43" />
				<rect x="7" y="119" rx="8" ry="8" width="299" height="43" />
				<rect x="10" y="176" rx="8" ry="8" width="299" height="128" />
				<rect x="8" y="324" rx="8" ry="8" width="299" height="43" />
			</ContentLoader>
		</div>
	);
}
