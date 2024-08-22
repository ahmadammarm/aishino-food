/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa6'

export const CardMenu = ({ children }) => {
	return (
		<div className='border shadow-md rounded-2xl p-5 snap-start snap-always group transition-all duration-300 lg:hover:bg-gray-100'>
			{children}
		</div>
	)
}
export const Header = ({ image, stars }) => {
	return (
		<div className='rounded-t-lg overflow-hidden relative w-[300px] lg:w-[inherit]'>
			<img
				className='w-full group-hover:scale-105 transition-all duration-300 rounded-lg'
				src={image}
				alt='Menu Kami'
			/>
			<div className='absolute top-3 left-3'>
				<div className='px-4 py-2 flex items-center gap-2 bg-red-600 rounded-3xl'>
					<FaStar className='fill-yellow-300' />
					<p className='text-white text-sm font-semibold'>{stars}</p>
				</div>
			</div>
		</div>
	)
}
export const Body = ({ name, children }) => {
	return (
		<>
			<h5 className='font-semibold pt-5'>{name}</h5>
			<p className='py-3 whitespace-normal'>{children}</p>
		</>
	)
}
export const Footer = ({ price }) => {
	return (
		<div className='flex items-center justify-between pt-3'>
			<p className='font-bold'>{price}</p>
			<div className='flex gap-2 items-center'>
				{/* Order Link using a element */}
				<a
					href='#'
					className='bg-red-600 text-white px-6 py-2 rounded-lg text-xl'
				>
					Pesan
				</a>
			</div>
		</div>
	)
}

CardMenu.Header = Header
CardMenu.Body = Body
CardMenu.Footer = Footer
