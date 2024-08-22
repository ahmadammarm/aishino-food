import { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { SocialIcons } from '../Fragments/SocialIcons'

export const HeroSection = () => {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.src = '../images/hero.jpg'
		img.onload = () => setIsLoaded(true)
	}, [])

	return (
		<section
			className={`h-[100svh] bg-cover bg-center bg-fixed ${
				isLoaded ? 'lazyloaded' : 'lazyload'
			}`}
		>
			<div className='h-full w-full backdrop-brightness-50 bg-dark/50 flex items-center justify-center'>
				<div className='text-center text-white pt-20 px-5 md:px-20'>
					<p className='text-lg tracking-wider'>WELCOME TO</p>
					<h1 className='font-serif tracking-wide py-3 px-3 my-2 border-t border-b'>
						Aishino Food
					</h1>
					<p className='text-lg tracking-wider pb-10'>
						Your Partner in Culinary Journey
					</p>

					<SocialIcons />

					<a
						href='#about'
						className='w-10 mx-auto flex justify-center items-center mt-20'
					>
						<IoIosArrowDown className='w-7 h-7' />
					</a>
				</div>
			</div>
		</section>
	)
}
