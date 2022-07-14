import React from 'react';
import * as Scroll from 'react-scroll';
// import { Link } from 'react-router-dom';
import logo from '../images/dark.PNG';
import Spline from '@splinetool/react-spline';
import {
	MdPhoneIphone,
	MdTablet,
	MdLaptopChromebook,
	MdBuildCircle,
} from 'react-icons/md';

let scroller = Scroll.scroller;

let Element = Scroll.Element;

export default function About() {
	return (
		<Element name='about'>
			<div className='relative h-full mt-28 mb-12 text-grey'>
				{/*----------------------------------3D MODEL---------------------------------------------*/}
				<div className='mt-24 md:mt-18 h-screen cursor-grab'>
					<Spline scene='https://prod.spline.design/uWliGq2xJzALdGJP/scene.splinecode' />
				</div>
				{/*---------------------------------------------------------------------------------------*/}
				<div className='flex justify-center mt-20 md:mx-16'>
					<img src={logo} alt='logo' className=' rounded-lg md:h-96'></img>
				</div>
				<section className='mt-16 '>
					<article className='md:flex flex-col w-full '>
						<div className='flex justify-center'>
							<header className='flex flex-col justify-center text-center md:w-3/5 rounded-xl p-8 m-4 md:m-12 shadow-xl border-2 border-lightGrey'>
								<h1 className='text-grey text-4xl font-bold'>
									Brand Name Products
								</h1>
								<div className='flex flex-col text-center justify-center pt-8 md:pt-4'>
									<div className='flex justify-center'>
										<p className='w-full md:w-3/5 lg:w-96'>
											<span className='font-bold'>KVL</span>{' '}
											<span className='text-primary font-bold'>
												Communications
											</span>{' '}
											offers a selection of new equipment that includes
											everything you need to keep your mobile business running
											smoothly.
										</p>
									</div>
									<div className='flex justify-center text-center mt-8'>
										<button className='flex justify-center h-max w-max text-sm p-4 bg-primary text-white rounded-lg hover:bg-bluetext hover:shadow-lg hover:scale-110 outline-grey transition ease-in-out delay-10'>
											Work with us
										</button>
									</div>
								</div>
							</header>
						</div>

						{/*----------------------------------PRODUCTS OFFERED----------------------------------*/}
						<div className='flex flex-col mt-4 md:mt-12 md:mt-0 md:shadow-xl rounded-md p-4 w-full justify-center md:bg-grey md:flex-row gap-8  text-white'>
							<div className='-m-2px hover:border-2 border-primary flex flex-col justify-start rounded-xl p-4 md:w-1/4 shadow-2xl bg-grey3  	'>
								<div className=' flex justify-center text-center mb-4  rounded-full '>
									<MdPhoneIphone size={70}></MdPhoneIphone>
								</div>
								<h2 className='text-2xl font-bold text-bluetext'>PHONES</h2>
								<p className='pt-4 text-start'>
									Choose from a selection of top brand Smartphones to help you
									and your staff stay connected wherever you go. Expand the
									capabilities of your phones with access to secure and
									business-friendly apps, conferencing tools, cloud sharing and
									more.
								</p>
							</div>
							<div className='-m-2px hover:border-2 border-primary rounded-xl p-4 md:w-1/4 shadow-2xl bg-grey3 '>
								<div className=' flex justify-center text-center mb-4  rounded-full '>
									<MdTablet size={70}></MdTablet>
								</div>
								<h2 className='text-2xl font-bold text-bluetext'>TABLETS</h2>
								<p className='pt-4 text-start'>
									Choose from a range of quality tablets which provide
									consistent internet connectivity and secure access to all of
									your business data and applications, while on the go. We
									provide the tools you need to be efficient and productive no
									matter where you are; give a sales presentation, write/edit
									business content, and/or review and update customer data – all
									from the palm of your hand.
								</p>
							</div>
							<div className='-m-2px hover:border-2 border-primary rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3'>
								<div className=' flex justify-center text-center mb-4  rounded-full '>
									<MdLaptopChromebook size={70}></MdLaptopChromebook>
								</div>
								<h2 className='text-2xl font-bold text-bluetext'>LAPTOPS</h2>
								<p className='pt-4 text-start'>
									Choose from a range of quality tablets which provide
									consistent internet connectivity and secure access to all of
									your business data and applications, while on the go. We
									provide the tools you need to be efficient and productive no
									matter where you are; give a sales presentation, write/edit
									business content, and/or review and update customer data – all
									from the palm of your hand.
								</p>
							</div>
							<div className='-m-2px hover:border-2 border-primary rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3'>
								<div className=' flex justify-center text-center mb-4  rounded-full '>
									<MdBuildCircle size={70}></MdBuildCircle>
								</div>
								<h2 className='text-2xl font-bold text-bluetext'>
									ACCESSORIES
								</h2>
								<p className='pt-4 text-start'>
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
				</section>
			</div>
		</Element>
	);
}
