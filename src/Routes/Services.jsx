import React from 'react';
import Navigation from '../Components/Navigation';
import ServicesComp from '../Components/Services';
import Footer from '../Components/Footer';
import { RiStackFill } from 'react-icons/ri';
import { SiTmobile, SiAtandt } from 'react-icons/si';

export default function Services() {
	return (
		<div className='w-full bg-grey3'>
			<Navigation />
			<div classname='flex relative '>
				<section classname='flex justify-center w-full mb-96 shadow-xl'>
					<article className='flex h-full flex-col text-center justify-center '>
						<span className='text-primary flex justify-center mt-36 mb-4'>
							<RiStackFill size={70}></RiStackFill>
						</span>
						<h1 className='text-4xl font-bold mb-10 text-white'>Services</h1>
						<span className='flex justify-center text-lg md:w-full px-4 md:px-0'>
							<p className='md:w-1/3 text-white'>
								We are a mobility solutions partner who can provide products and
								services to help cut company costs and improve productivity.
							</p>
						</span>
					</article>
				</section>
				<section className='flex justify-center mt-12 pb-12 md:pb-0 h-full w-full text-white'>
					<article className='flex h-full flex-col md:flex-row justify-evenly text-center bg-lightGrey w-5/6 md:w-3/5 rounded-xl'>
						<div className='flex text-center justify-center py-10 text-tmobile'>
							<SiTmobile size={70}></SiTmobile>
						</div>
						<div className=' flex text-center justify-center py-10 text-att'>
							<SiAtandt size={70}></SiAtandt>
						</div>
						<div className='flex justify-center text-center pb-10 h-full mt-12 md:py-0 text-spectrum'>
							<h1 className='flex  text-center text-4xl font-bold'>Spectrum</h1>
						</div>
					</article>
				</section>
			</div>
			<ServicesComp />
			<div className='pt-24 relative w-full bottom-0'>
				<Footer />
			</div>
		</div>
	);
}
