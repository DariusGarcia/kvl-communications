import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// require('dotenv').config();
emailjs.init('{process.env.REACT_APP_PUBLIC_KEY}');

export default function Contact() {
	const form = useRef();
	const serviceId = process.env.REACT_APP_SERVICE_ID;
	const templateId = process.env.REACT_APP_TEMPLATE_ID;
	const publicKey = process.env.REACT_APP_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		e.target.reset();
	};

	return (
		<>
			<Navigation />
			<div className='flex justify-center  mt-32 mb-12 md:my-64'>
				<div className='md:flex md:flex-row justify-center '>
					<article className='flex md:justify-end justify-center md:w-1/2  '>
						<div className='flex items-end justify-center md:justify-end w-screen md:w-full'>
							<form
								ref={form}
								onSubmit={sendEmail}
								className='flex flex-col text-black  rounded-xl md:rounded-l-lg p-4 md:p-8 border-2 w-full m-2 md:m-0 border-primary shadow-xl '>
								<div className=' pb-4 text-start'>
									<h1 className='text-2xl flex items-start justify-start text-start'>
										Get in touch
									</h1>
								</div>
								<div className='flex flex-col'>
									<span className='flex flex-col md:flex-row gap-2'>
										<input
											className=' text-black placeholder:text-black mb-2 p-2 w-1/2 outline-black outline-1 border-2 border-lightGrey rounded-md '
											placeholder='Name'
											type='text'
											name='name'
										/>
										<input
											className=' text-black placeholder:text-black mb-2 p-2 w-1/2 outline-black outline-1 border-2 border-lightGrey rounded-md '
											placeholder='Email'
											type='email'
											name='email'
										/>
									</span>
									<textarea
										className=' text-black placeholder:text-black my-2 mb-2 p-2 outline-black outline-1 border-2 border-lightGrey rounded-md '
										placeholder='Subject'
										name='subject'
									/>
									<textarea
										className=' text-black placeholder:text-black  my-2 mb-2 p-2 outline-black outline-1 border-2 border-lightGrey rounded-md '
										placeholder='Message'
										name='message'
									/>
									<input
										type='submit'
										value='Send Message'
										className='w-max md:w-1/3 bg-primary text-white rounded-md flex justify-center p-4 my-4 hover:scale-95 hover:outline-4 hover:outline-black ease-in-out delay-50'
									/>
								</div>
							</form>
						</div>
					</article>
					<article className='h-72 md:h-full bg-primary mt-4 mx-2 md:mx-0 rounded-xl md:mt-0 md:m-0 md:w-96 flex md:rounded-r-lg items-center justify-center md:justify-start md:pb-0 '>
						<div className='flex md:w-full flex-col p-2  text-white shadow-xl rounded-lg justify-center items-start h-full bg-blue'>
							<h1 className='py-2 text-2xl'>Contact Us</h1>

							<p className='py-2'>Phone: (626) 922 - 0791</p>
							<p className='py-2'>Email: info@kvlcommunications.com</p>
						</div>
					</article>
				</div>
			</div>

			<Footer />
		</>
	);
}
