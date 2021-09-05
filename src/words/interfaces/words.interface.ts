import { Document } from "mongoose";
export interface Words extends Document {
	readonly id: number;
	readonly words: [string];
	readonly numbers: number
}