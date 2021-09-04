import { assoc } from '../js/assoc';

export const generateRandomString = () => 
    Math.random().toString(36).substring(2, 15);

export const generateId = <O extends object>(obj: O) => {
	const assignId = assoc('id', generateRandomString());
	return assignId(obj);
}
