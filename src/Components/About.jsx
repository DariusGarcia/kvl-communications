import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../images/dark.PNG';

let scroller = Scroll.scroller;

let Element = Scroll.Element;

export default function About() {
	return (
		<Element name='about'>
			<div className='relative h-screen mt-36 mb-96  text-grey'>
				<div className='flex justify-center  md:mx-16'>
					<img src={logo} alt='logo' className=' rounded-lg md:h-96'></img>
				</div>
				<section className='mt-24 '>
					<article className=''>
						<header className='flex flex-col justify-center text-center rounded-xl p-8 m-4 md:m-12 shadow-xl border-2 border-lightGrey'>
							<h1 className='text-grey text-4xl font-bold'>
								Brand Name Products
							</h1>
							<span className='flex justify-center pt-8 md:pt-4'>
								<p className='w-full md:w-3/5 lg:w-96'>
									<span className='font-bold'>KVL</span>{' '}
									<span className='text-primary font-bold'>Communications</span>{' '}
									offers a selection of new equipment that includes everything
									you need to keep your mobile business running smoothly.
								</p>
							</span>
						</header>

						{/*----------------------------------PRODUCTS OFFERED----------------------------------*/}
						<div className='flex flex-col  shadow-xl rounded-md p-4 w-full justify-center md:flex-row gap-8 bg-grey text-white'>
							<div className=' rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3  	'>
								<h2 className='text-2xl font-bold text-bluetext'>PHONES</h2>
								<p className='pt-4 w-'>
									Choose from a selection of top brand Smartphones to help you
									and your staff stay connected wherever you go. Expand the
									capabilities of your phones with access to secure and
									business-friendly apps, conferencing tools, cloud sharing and
									more.
								</p>
							</div>
							<div className=' rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3 '>
								<h2 className='text-2xl font-bold text-bluetext'>TABLETS</h2>
								<p className='pt-4'>
									Choose from a range of quality tablets which provide
									consistent internet connectivity and secure access to all of
									your business data and applications, while on the go. We
									provide the tools you need to be efficient and productive no
									matter where you are; give a sales presentation, write/edit
									business content, and/or review and update customer data – all
									from the palm of your hand.
								</p>
							</div>
							<div className=' rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3'>
								<h2 className='text-2xl font-bold text-bluetext'>LAPTOPS</h2>
								<p className='pt-4'>
									Choose from a range of quality tablets which provide
									consistent internet connectivity and secure access to all of
									your business data and applications, while on the go. We
									provide the tools you need to be efficient and productive no
									matter where you are; give a sales presentation, write/edit
									business content, and/or review and update customer data – all
									from the palm of your hand.
								</p>
							</div>
							<div className=' rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3'>
								<h2 className='text-2xl font-bold text-bluetext'>
									ACCESSORIES
								</h2>
								<p className='pt-4'>
									Choose from a range of quality tablets which provide
									consistent internet connectivity and secure access to all of
									your business data and applications, while on the go. We
									provide the tools you need to be efficient and productive no
									matter where you are; give a sales presentation, write/edit
									business content, and/or review and update customer data – all
									from the palm of your hand.
								</p>
							</div>
						</div>
					</article>
					'
				</section>
			</div>
		</Element>
	);
}
