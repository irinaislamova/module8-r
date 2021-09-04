import React from 'react';
import { getValue } from './utils/react/pickFromSyntheticEvent';
import { preventDefault } from './utils/react/preventDefault';
import { stopPropagation } from './utils/react/stopPropagation';

export function InputExample ({value, onChange}: any) {
	return (
		<input 
		value={value}
		onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
		/>
	)
}

function compose<U> (...fnc: Function[]) {
	return <E,>(initialValue: any): U =>
	    fnc.reduceRight((previousValue, fn) =>
	    fn(previousValue), initialValue);
}


function pipe<U> (...fnc: Function[]) {
	return <E,>(initialValue: any): U =>
	    fnc.reduce((previousValue, fn) =>
	    fn(previousValue), initialValue)
}

function pick<K extends string> (prop: K) {
	return <O extends Record<K, any>> (obj: O) => obj[prop]
}

function isEqual<T> (left: T) {
	return <E extends T> (right: E) => left == right;
}

const some = pick('value')({value: 1})
const comments = [
    {id: 22, text: 'Text One'},
    {id: 44, text: 'Text Two'}
]  

function cond(b: boolean) {
	return !b;
}                                                                                                      
const filteredComments = comments.filter(
	pipe(pick('id'), isEqual(22), cond)
)

const filterWithId = (id: number) => 
pipe(pick('id'), isEqual(id), cond);

const createFilterBy = (prop: string) => 
(id: number) => pipe(pick('id'), isEqual(id), cond);

// const filterWithId = createFilterBy('id');

// const filteredComments = comments.filter(filterWithId(22))

// const filterByValue = createFilterBy('value');
// const filteredComments1 = comments.filter(filterByValue(22));

// const filterWithId22 = createFilterBy('id')(22);

const getValueNumber = pipe<number>(
	pick('currentTarget'),
	pick('value'),
	parseInt
)






