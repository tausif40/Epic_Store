import React, { useState, useEffect } from 'react';
function Header() {


	const [ scrollPosition, setScrollPosition ] = useState(0);

	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	const [ navBar, setNaveBar ] = useState(false);
	const [ navBarHide, setNaveBarHide ] = useState(false);


	const navBackgroundChanger = () => {

		if (window.scrollY > 450) {
			setNaveBar(true)
			setNaveBarHide(false)
		} if (window.scrollY <= scrollPosition) {
			setNaveBarHide(true)
		} else {
			setNaveBar(false)
		}
	}
	window.addEventListener('scroll', navBackgroundChanger);

	return (
		<>
			<nav >

				<div className={`${navBarHide ? "fixed" : ""} scroll-smooth mx-auto px-10 h-20 w-full flex justify-between items-center z-50 duration-500 ${navBar ? "bg-[#726654]" : ""}`}>
					<div className='h-16 flex'>
						<img className='cursor-pointer min-w-[340px]' src="../assets/img/asset-0.png" alt="" />
					</div>
					<div className='flex items-center justify-end text-slate-50'>
						<span className='ml-12 font-medium cursor-pointer hover:underline'>HOME</span>
						<span className='ml-12 font-medium cursor-pointer hover:underline'>PHOTOGRAPHY</span>
						<span className='ml-12 font-medium cursor-pointer hover:underline'>FILMS</span>
						<span className='ml-12 font-medium cursor-pointer hover:underline'>FAQ</span>
						<span className='ml-12 font-medium cursor-pointer hover:underline'>CONTACT</span>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Header;