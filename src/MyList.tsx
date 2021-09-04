import React from 'react';

export interface IItem {
	value: string;
	id?: string;
	onClick?: any;
}

interface IMyListProps {
	list: IItem[];
}

export function MyList({list}: IMyListProps) {
	return (
		<ul>
		{list.map((item: IItem) => 
			<li key={item.id}
			    onClick={ () => item.onClick(item.id) }>
			    {item.value} </li>
			)}
		</ul>
		)
}


