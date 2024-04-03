import React from 'react'

function HomePage() {
	return (
		<>
			<div className='bg-[#efeeea]'>
				<div className=''>
					<img className='w-full' src="assets/img/asset-1.jpeg" alt="img" />
					<div className='text-5xl text-center text-[#c7a3a3] py-10'>FEATURED EPIC STORIES</div>
				</div>
				{/* cart section */}
				<section className='flex justify-between max-w-[1280px] m-auto'>
					{/* 1st card */}
					<div className='flex flex-col w-[300px] p-4 bg-white'>
						<div>
							<img className='h-[350px] w-full object-cover' src="assets/img/asset-2.jpeg" alt="" />
						</div>
						<div className='text-center pt-4'>
							<p className='text-3xl'>Karishma & Varun</p>
							<p className='py-3'><i>Romance in the city</i></p>
							<p className='leading-8'>We felt it from our hearts when Karishma described Varun as the last piece of Jigsaw puzzle that made her life complete. In three days, we were fortunate to capture….</p>
							<button className='px-4 py-3 mt-4 border-2 border-[#384235] text-sm font-bold text-gray-600 hover:bg-[#384235] hover:text-white'>SEE MORE</button>
						</div>
					</div>

					{/* 2st card */}
					<div className='flex flex-col w-[300px] p-4 bg-white'>
						<div>
							<img className='h-[350px] w-full object-cover' src="assets/img/asset-3.jpeg" alt="" />
						</div>
						<div className='text-center pt-4'>
							<p className='text-3xl'>Huzaifa & Burhan</p>
							<p className='py-3'><i>A fairy tale in the valley</i></p>
							<p className='leading-8'>Kashmir completes everyone who breathes in its pious air. So was the fairy spell of Huzaifa. It captivated everyone. There was so much to feel in such a brief period of time….</p>
							<button className='px-4 py-3 mt-4 border-2 border-[#384235] text-sm font-bold text-gray-600 hover:bg-[#384235] hover:text-white'>SEE MORE</button>
						</div>
					</div>

					{/* 3st card */}
					<div className='flex flex-col w-[300px] p-4 bg-white'>
						<div>
							<img className='h-[350px] w-full object-cover' src="assets/img/asset-4.jpeg" alt="" />
						</div>
						<div className='text-center pt-4'>
							<p className='text-3xl'>Nandini & Sahil</p>
							<p className='py-3'><i>The backyard love affair</i></p>
							<p className='leading-8'>Every wedding that we shoot fills our heart in all the most unique ways. We were at Alibaug, for Nandini and Sahil Intimate signing ceremony in their own backyard in ….</p>
							<button className='px-4 py-3 mt-4 border-2 border-[#384235] text-sm font-bold text-gray-600 hover:bg-[#384235] hover:text-white'>SEE MORE</button>
						</div>
					</div>

					{/* 4st card */}
					<div className='flex flex-col w-[300px] p-4 bg-white'>
						<div>
							<img className='h-[350px] w-full object-cover' src="assets/img/asset-5.jpeg" alt="" />
						</div>
						<div className='text-center pt-4'>
							<p className='text-3xl'>Milly & Yunus</p>
							<p className='py-3'><i>Cosmopolitan bliss in Cappadocia</i></p>
							<p className='leading-8'>Milly & Yunus is a different kind of story. It just happened by chance. We went to Turkey on a private gig but decided to stay back for a few more days in Cappadocia. We had….</p>
							<button className='px-4 py-3 mt-4 border-2 border-[#384235] text-sm font-bold text-gray-600 hover:bg-[#384235] hover:text-white'>SEE MORE</button>
						</div>
					</div>

				</section>

				<div>
					<video className='w-full h-[500px] object-cover mt-20 mb-12' src="assets/video/Wedding-Filmer.mp4" muted autoPlay loop ></video>
					{/* <img className='w-full h-[500px] object-cover mt-20 mb-12' src="assets/video/middle2.JPG" alt="" /> */}
				</div>

				{/* youtube link */}
				<section>
					<div className='flex flex-wrap justify-center gap-8 mt-20 mb-28'>
						<div className='relative flex justify-center items-center'>
							<img width="500" height="270" src="assets/img/asset-7.jpeg" alt="" />
							<img className='absolute cursor-pointer' src="assets/img/asset-34.png" alt="" />
						</div>
						<div className='relative flex justify-center items-center'>
							<img width="500" height="270" src="assets/img/asset-8.jpeg" alt="" />
							<img className='absolute cursor-pointer' src="assets/img/asset-34.png" alt="" />
						</div>
						<div className='relative flex justify-center items-center'>
							<img width="500" height="270" src="assets/img/asset-9.jpeg" alt="" />
							<img className='absolute cursor-pointer' src="assets/img/asset-34.png" alt="" />
						</div>
						<div className='relative flex justify-center items-center'>
							<img width="500" height="270" src="assets/img/asset-10.jpeg" alt="" />
							<img className='absolute cursor-pointer' src="assets/img/asset-34.png" alt="" />
						</div>
					</div>
				</section>

				<section>
					<p className='text-5xl font-serif my-8 text-center'>Follow along on instagram</p>
					<div className='flex flex-wrap justify-center max-w-[1280px] m-auto gap-1'>
						<img className="h-52 w-52 object-cover" src="assets/img/asset-11.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-12.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-13.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-14.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-15.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-16.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-17.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-18.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-19.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-20.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-21.jpeg" alt="img" />
						<img className="h-52 w-52 object-cover" src="assets/img/asset-22.jpeg" alt="img" />
					</div>
				</section>

				<div className='relative flex justify-center items-center'>
					<img className='w-full h-[360px] object-cover my-12' src="assets/img/asset-23.jpeg" alt="img" />
					<button className='absolute cursor-pointer m-auto text-sm font-bold text-white bg-[#fcfcfc] bg-opacity-5 px-6 py-4 border-2 border-white hover:bg-white hover:text-black hover:translate duration-300'>ENQUIRE WITH US</button>
				</div>
			</div>
		</>

	)
}


export default HomePage;