import { Button } from '../Elements/Button'
import { SectionTitle } from '../Elements/SectionTitle';

export const ContactOrder = () => {
	const phoneNumber = '+6282155290550';
	const message = 'Halo kak saya (nama Anda) ingin order...';
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	return (
		<>
			<div id='contact' className='px-5 pt-20 pb-10 lg:px-20'>
			<SectionTitle>Kontak Kami</SectionTitle>
				<div className='rounded-3xl shadow-md overflow-hidden bg-[url(../images/order-img.webp)] bg-center bg-cover'>
					<div className='text-white text-center py-14 bg-dark/70'>
						<p>HUBUNGI KAMI UNTUK</p>
						<h4 className='font-serif font-semibold tracking-wider pb-1'>
							Online Delivery
						</h4>
						<p className='pb-5'>(+62) 821-5529-0550</p>
						<a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
							<Button variant='bg-transparant border-2 border-white text-white mx-auto active:scale-100 active:text-dark active:bg-white'>
								Pesan Sekarang!
							</Button>
						</a>
					</div>
				</div>
			</div>

			<div className='flex items-center justify-between w-full px-5 pb-1 text-sm lg:px-20 mb-5'>
				<div className='flex gap-2 items-center'>
					<img className='w-4 h-4' src='logo.png' alt='Logo' />
					<p className='font-serif tracking-wider text-base'>© 2024 | Aishino Food.</p>
				</div>
			</div>
		</>
	)
}
