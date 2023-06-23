import {
	MdArrowLeft,
	MdArrowDropUp,
	MdArrowDropDown,
	MdArrowRight,
} from "react-icons/md";

function KeysArrows() {
	return (
		<>
			{"// use keyboard"} <br /> {"// arrows to play"}
			<div className="flex items-center justify-center border  border-line rounded-lg h-7 w-12 bg-primary1">
				<MdArrowDropUp size={28} />
			</div>
			<div className="flex gap-2">
				<div className="flex items-center justify-center border  border-line rounded-lg  bg-primary1  h-7 w-12">
					<MdArrowLeft size={28} />
				</div>
				<div className="flex items-center justify-center border  border-line rounded-lg  bg-primary1  h-7 w-12">
					<MdArrowDropDown size={28} />
				</div>
				<div className="flex items-center justify-center border  border-line rounded-lg  bg-primary1  h-7 w-12">
					<MdArrowRight size={28} />
				</div>
			</div>
		</>
	);
}

export default KeysArrows;
