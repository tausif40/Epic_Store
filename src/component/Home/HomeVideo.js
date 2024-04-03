import React from 'react'

function HomeVideo() {
	return (
		<>
			<div className='w-full h-dvh '>
				<video className='w-full h-full object-cover' src="assets/video/homePage.mp4" muted autoPlay loop></video>
				{/* <img className='w-full h-full object-cover' src="assets/video/home2.JPG" alt="" /> */}
			</div>
		</>
	)
}

export default HomeVideo