import React from 'react';
import IconsSvg from './icons.svg';

interface IIconProps {
	name: EIcons;
	width?: string;
	height?: string;
}

export enum EIcons {
	comment = 'comment',/*15 15   0 0 15 15*/
	share = 'share',/*12 14   0 0 12 14*/
	hide = 'hide',/*14 14   0 0 14 14*/
	save = 'save',/*14 14   0 0 14 14*/
	complaint = 'complaint',/*14 14   0 0 14 14*/
	menu = 'menu',/*20 5   0 0 20 5*/	
}

export function IconTest({name, width, height}: IIconProps) {
	return (
		<svg className={`icon-${name}`} width={width} height={height}>
		   <use xlinkHref={`${IconsSvg}#icon-${name}`} />
		</svg>
	)
}