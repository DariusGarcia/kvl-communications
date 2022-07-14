import React from 'react';
// import { Link } from 'react-router-dom';

import { MdHome } from 'react-icons/md';

export default function Navigation() {
	return (
		<>
			<nav className='backdrop-filter backdrop-blur-lg bg-opacity-70 flex fixed items-center top-0 justify-around md:justify-between bg-grey h-28 w-full p-5 text-sm md:text-base text-white z-50'>
				<div className='flex justify-center text-center'>
					<ul className='flex items-end justify-center gap-5 place-content-end cursor-pointer'>
						<li className='hover:text-green hover:border-b-2 border-white'>
							<MdHome size={25}></MdHome>{' '}
						</li>
						<li
							className='hidden md:inline-block hover:text-green hover:border-b-2 border-white'
							// onClick={() =>
							// 	animateScroll.scrollToTop({
							// 		duration: 400,
							// 		delay: 50,
							// 		smooth: true,
							// 	})
							// }
						>
							KVL
						</li>
					</ul>
				</div>
				<div className='flex flex-col align-center justify-center'>
					<ul className='flex flex-row align-center justify-center gap-5 cursor-pointer'>
						<li
							className='hover:text-green hover:border-b-2 border-white ease-in-out'
							// onClick={() =>
							// 	scroller.scrollTo('about', {
							// 		duration: 400,
							// 		delay: 50,
							// 		smooth: true,
							// 		offset: -100,
							// 	})
							// }
						>
							About
							{/* <Link to='/'>About </Link> */}
						</li>
						<li
							className='hover:text-green hover:border-b-2 border-white ease-in-out'
							// onClick={() =>
							// 	scroller.scrollTo('schedule', {
							// 		duration: 400,
							// 		delay: 50,
							// 		smooth: true,
							// 		offset: 0,
							// 	})
							// }
						>
							Services
							{/* <Link to='/services'>Services</Link> */}
						</li>
						{/* <li className="links">Releases</li> */}
						<li
							className='hover:text-green hover:border-b-2 border-white ease-in-out'
							// onClick={() =>
							// 	scroller.scrollTo('newsletter', {
							// 		duration: 400,
							// 		delay: 50,
							// 		smooth: true,
							// 		offset: 0,
							// 	})
							// }
						>
							Payments
							{/* <Link to='/payments'>Payments</Link> */}
						</li>
						<li
							className='hover:text-green hover:border-b-2 border-white ease-in-out'
							// onClick={() =>
							// 	scroller.scrollTo('newsletter', {
							// 		duration: 400,
							// 		delay: 50,
							// 		smooth: true,
							// 		offset: 0,
							// 	})
							// }
						>
							Contact
							{/* <Link to='/contact'>Contact</Link> */}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
