import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../images/dark.PNG';

let scroller = Scroll.scroller;

let Element = Scroll.Element;

export default function About() {
	return (
		<Element name='about'>
			<div className='relative mt-48'>
				About
				<div className='flex justify-center  mx-16'>
					<img src={logo} alt='logo' className='shadow-lg h-96'></img>
				</div>
			</div>
		</Element>
	);
}
