import { Generated, ColumnType } from "kysely";
type Database = {
	info: InfoTable;
};

type InfoTable = {
	id: Generated<number>;
	slug: string;
	title: string;
	description: string;
};
type Experience = {
	slug: string;
	title: string;
	description: string;
};
type Experience = {
	slug: string;
	title: string;
	description: string;
};
interface IProject {
	i?: number;
	title: string;
	desc: string;
	image: ReactNode;
	demoUrl: string;
}
interface TypingEffectProps {
	toRotate: string[];
	period?: number;
}
interface IPosition {
	x: number;
	y: number;
}
export interface IInputs {
	name: string;
	email: string;
	message: string;
}
export interface IProject {
	i?: number;
	title: string;
	desc: string;
	image: ReactNode;
	demoUrl: string;
}
