import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

export const SocialIcons = () => {
	let Icons = [
		{
			id: 1,
			href: 'https://www.instagram.com/aishinofood/',
			nameIcon: <BsInstagram className='fill-black w-5 h-5' />
		},
		{
			id: 2,
			href: 'http://wa.me/6282155290550',
			nameIcon: <BsWhatsapp className='fill-black w-5 h-5' />
		},
	]

	return (
		<div className='flex gap-5 items-center justify-center flex-row'>
			{Icons.map((icon) => (
				<a className='cursor-pointer' href={icon.href} key={icon.id} target="blank">
					<div className='bg-white p-3 rounded-full hover:scale-125 transition-all duration-300'>
						{icon.nameIcon}
					</div>
				</a>
			))}
		</div>
	)
}
