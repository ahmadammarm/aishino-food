import { useEffect, useState } from 'react'
import { FaPhone } from 'react-icons/fa6'
import { SectionTitle } from '../Elements/SectionTitle'

export const AboutSection = () => {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.src = '../images/about.jpg'
		img.onload = () => setIsLoaded(true)
	}, [])

	return (
		<section id='about' className='px-5 pt-24 lg:px-20'>
			<div className='flex flex-col gap-5 md:gap-10 md:flex-row'>
				<div
					className={`rounded-2xl overflow-hidden w-full shadow-md h-[400px] flex bg-center bg-cover bg-gradient-to-r from-dark ${
						isLoaded ? 'lazyloaded-about' : 'lazyload-about'
					}`}
				>
					<div className='flex h-full bg-dark/40'>
						<div className='self-center text-white px-10 lg:px-20'>
							<h5 className='font-serif pb-3'>Aishino Food </h5>
							<p>
								Setiap camilan yang kami sajikan adalah cerminan dari
								keindahan, kelembutan, dan kelezatan. Kami mengundang
								Anda untuk menjelajahi dunia rasa yang tak terbatas
								bersama kami, dan merayakan setiap momen dengan cita
								rasa istimewa dari camilan berkualitas yang kami
								tawarkan. Semuanya dibuat dengan perhatian dan cinta
								untuk memberikan pengalaman kuliner yang tak
								terlupakan.
							</p>
						</div>
					</div>
				</div>

				<div className='md:w-3/4'>
					<SectionTitle>Tentang Kami</SectionTitle>

					<p className='pb-5'>
						<span className='font-bold'>Aishino Food</span> didirikan pada
						tahun ???. Kami memprioritaskan keunggulan layanan dan
						kebutuhan pelanggan kami dengan membangun tim dan layanan
						pelanggan yang paling efektif untuk mencapai tujuan kami
						dalam menjadi toko camilan dengan{' '}
						<span className='font-bold'>one-click-away-service</span> yang
						dapat diandalkan.
					</p>

					<div className='pb-10 flex items-center gap-3'>
						<div className='p-3 bg-light rounded-full'>
							<FaPhone className='fill-red-600 w-5 h-5' />
						</div>
						<div>
							<p className='font-bold'>(+62) 821-5529-0550</p>
							<p>Hubungi Kami</p>
						</div>
					</div>
					<a
						href='#menu'
						className='p-3 bg-red-600 text-white rounded-lg text-lg font-bold'
					>
						Menu Kami
					</a>
				</div>
			</div>
		</section>
	)
}
