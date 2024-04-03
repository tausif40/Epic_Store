import React from 'react'

function Footer() {
	return (
		<>
			<footer className='bg-[#b4a691] w-full text-white'>
				<div className='flex max-w-[1280px] items-center justify-center gap-20 m-auto'>
					<div className='text-center py-12 w-2/6'>
						<p>GET IN TOUCH</p>
						<p className='my-5'>hello@epicstories.in</p>
						<p className='mb-14'>+91 9630882153 / +91 8779945242</p>
						<address className='w-80 m-auto'>Address : Office no. 21, Pink Apartment B-wing, Aram Nagar I, Versova, Andheri West, Mumbai 400058</address>
					</div>
					<div className='w-2/6'>
						<img className='w-[300px] m-auto' src="assets/img/asset-33.png" alt="" />
					</div>
					<div className='w-2/6 text-center'>
						<p className='pb-10'>All Images and Videos Are Copyrighted.</p>
						<p>Tags: Wedding Photography, Wedding Film, Epic Stories, Cinematic Films, Wedding videos, Wedding Cinematographers in India, Wedding Photography, Destination Wedding Photographer, Best Wedding Photographer</p>
					</div>
				</div>
				<div>
					<p className='flex justify-center py-3 bg-[#6b5f4d] font-light'>All Copyright resolve by EpicStore.</p>
				</div>
			</footer>
		</>
	)
}

export default Footer