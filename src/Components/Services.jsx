import React from 'react';
import {
	MdPhoneIphone,
	MdTablet,
	MdLaptopChromebook,
	MdBuildCircle,
	MdLoyalty,
} from 'react-icons/md';

export default function Services() {
	return (
		<>
			<div className='box-border flex flex-col mt-0 md:mt-10 md:shadow-xl md:rounded-md px-4 py-4 md:py-24 w-full justify-center bg-white md:bg-grey md:flex-row gap-8 text-white'>
				<div className='flex flex-col text-center justify-start border-2 border-grey3 hover:border-2 hover:border-primary rounded-xl p-4 md:w-1/4 shadow-2xl bg-grey3'>
					<div className='flex justify-center text-center mb-4 rounded-full '>
						<MdPhoneIphone size={70}></MdPhoneIphone>
					</div>
					<h2 className='text-2xl font-bold text-bluetext'>PHONES</h2>
					<p className='pt-4 text-start'>
						Choose from a selection of top brand Smartphones to help you and
						your staff stay connected wherever you go. Expand the capabilities
						of your phones with access to secure and business-friendly apps,
						conferencing tools, cloud sharing and more.
					</p>
				</div>
				<div className='border-2 border-grey3 text-center hover:border-2 hover:border-primary rounded-xl p-4 md:w-1/4 shadow-2xl bg-grey3'>
					<div className=' flex justify-center text-center mb-4  rounded-full '>
						<MdTablet size={70}></MdTablet>
					</div>
					<h2 className='text-2xl font-bold text-bluetext'>TABLETS</h2>
					<p className='pt-4 text-start'>
						Choose from a range of quality tablets which provide consistent
						internet connectivity and secure access to all of your business data
						and applications, while on the go. We provide the tools you need to
						be efficient and productive no matter where you are; give a sales
						presentation, write/edit business content, and/or review and update
						customer data – all from the palm of your hand.
					</p>
				</div>
				<div className='border-2 border-grey3 text-center hover:border-2 hover:border-primary rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3'>
					<div className=' flex justify-center text-center mb-4  rounded-full '>
						<MdLaptopChromebook size={70}></MdLaptopChromebook>
					</div>
					<h2 className='text-2xl font-bold text-bluetext'>LAPTOPS</h2>
					<p className='pt-4 text-start'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
				<div className='border-2 border-grey3 text-center hover:border-2 hover:border-primary rounded-xl p-4  md:w-1/4 shadow-2xl bg-grey3'>
					<div className=' flex justify-center text-center mb-4  rounded-full '>
						<MdBuildCircle size={70}></MdBuildCircle>
					</div>
					<h2 className='text-2xl font-bold text-bluetext'>ACCESSORIES</h2>
					<p className='pt-4 text-start'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>
		</>
	);
}
