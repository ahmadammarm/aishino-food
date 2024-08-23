import { useState } from 'react';
// import { IoArrowForward } from 'react-icons/io5';
import { SectionTitle } from '../Elements/SectionTitle';
import { CardMenu } from '../Fragments/CardMenu';

let menus = [
	{
		id: 1,
		name: 'Ayam Pop (Chicken Pop)',
		image: 'images/menu/ayam-pop.webp',
		stars: 4.4,
		description: `Pilihan Daging Ayam Yang Juici Bertabur Dengan Bumbu Rempah-Rempah.`,
		price: 'IDR 12.500',
		category: 'makanan',
		link: "https://gofood.link/a/MLggCcN"
	},
	{
		id: 2,
		name: 'Kentang Goreng (French Fries)',
		image: 'images/menu/kentang-goreng.webp',
		stars: 4.5,
		description: `Kentang Goreng Berkualitas Dengan Pilihan Bumbu Rempah-Rempah.`,
		price: 'IDR 9.500',
		category: 'makanan',
		link: "https://gofood.link/a/MLggnCU"
	},
	{
		id: 3,
		name: 'Tahu Krispi (Crispy Tofu)',
		image: 'images/menu/tahu-crispy.webp',
		stars: 4.4,
		description: `Tahu Berkualitas Super Yang Dibalut Tepung Crispy Dan Bumbu Rempah-Rempah.`,
		price: 'IDR 7.000',
		category: 'makanan',
		link: "https://gofood.link/a/MLgfUQq"
	},
	{
		id: 4,
		name: 'Sosis (Sausage)',
		image: 'images/menu/sosis.webp',
		stars: 4.6,
		description: `Sosis Lembut Berkualitas Dengan Taburan Bumbu Rempah-rempah.`,
		price: 'IDR 9.500',
		category: 'makanan',
		link: "https://gofood.link/a/MLgescj"
	},
	{
		id: 5,
		name: 'Bakso (Meat Balls)',
		image: 'images/menu/bakso.webp',
		stars: 4.7,
		description: `Bakso Premium Dari Daging Sapi Pillihan Dengan Taburan Bumbu Rempah Rempah.`,
		price: 'IDR 9.500',
		category: 'makanan',
		link: "https://gofood.link/a/MLge9SQ"
	},
	{
		id: 6,
		name: 'Nuget Ayam (Chicken Nugget)',
		image: 'images/menu/nugget-ayam.webp',
		stars: 4.7,
		description: `Nuget Ayam Premium Yang Ditaburi Bumbu Rempah Rempah.`,
		price: 'IDR 9.500',
		category: 'makanan',
		link: "https://gofood.link/a/MLgdW43"
	},
	{
		id: 7,
		name: 'Mie Kriuk',
		image: 'images/menu/mi-kriuk.webp',
		stars: 4.8,
		description: `Mie Kriuk premium yang ditaburi bumbu rempah Ori/spicy.`,
		price: 'IDR 7.000',
		category: 'makanan',
		link: "https://gofood.link/a/MLgdC2E"
	},
	{
		id: 8,
		name: 'Chicken Stick',
		image: 'images/menu/chicken-stick.webp',
		stars: 4.5,
		description: `Chichen Stick Premium yang Ditaburi Bumbu Rempah - Rempah Ori / Spicy.`,
		price: 'IDR 9.500',
		category: 'makanan',
		link: "https://gofood.link/a/MLgdjm5"
	},
	{
		id: 9,
		name: 'Chocolate Ice',
		image: 'images/menu/chocolate-ice.webp',
		stars: 4.8,
		description: `Minuman Es Coklat Dengan Kesegaran Yang Nyentrik Dan Bikin Heppy.`,
		price: 'IDR 12.500',
		category: 'minuman',
		link: "https://gofood.link/a/MLg9STS"
	},
	{
		id: 10,
		name: 'Green Thai Tea ORI',
		image: 'images/menu/green-thai-tea.webp',
		stars: 4.7,
		description: `Minuman Dingin Dari Teh Hijau Pilihan Buat Kamu Yang Doyan Kesegaran Alami.`,
		price: 'IDR 7.000',
		category: 'minuman',
		link: "https://gofood.link/a/MLgdjm5"
	},
	{
		id: 11,
		name: 'Chin Thai Tea ORI',
		image: 'images/menu/chin-thai-tea.webp',
		stars: 4.4,
		description: `Minuman Dingin Dari Teh Terbaik Pilihan Buat Kamu Yang Doyan Kesegaran Alami.`,
		price: 'IDR 7.000',
		category: 'minuman',
		link: "https://gofood.link/a/MLgaafL"
	},
	{
		id: 12,
		name: 'Chin Thai Tea Milk',
		image: 'images/menu/chin-thai-tea-milk.webp',
		stars: 4.5,
		description: `Minuman Dingin Dari Gabungan Kesegaran Teh Alami Dan Kelembutan Susu Pilihan.`,
		price: 'IDR 10.000',
		category: 'minuman',
		link: "https://gofood.link/a/MLgaPZb"
	},
	{
		id: 13,
		name: 'Green Thai Tea Milk',
		image: 'images/menu/green-thai-tea-milk.webp',
		stars: 4.7,
		description: `Minuman Dingin Dari Gabungan Kesegaran Teh Hijau Dan Kelembutan Susu Pilihan.`,
		price: 'IDR 10.000',
		category: 'minuman',
		link: "https://gofood.link/a/MLgcES9"
	},
];

export let MenuSection = () => {
	const [selectedCategory, setSelectedCategory] = useState('makanan');

	const filteredMenus = menus.filter((menu) => menu.category === selectedCategory);

	return (
		<section id="menu" className="px-5 pt-24 whitespace-nowrap lg:px-20">
			<div className="flex items-center justify-between">
				<SectionTitle>Menu Kami</SectionTitle>
			</div>

			<div className="flex gap-3 mt-5">
				<button
					onClick={() => setSelectedCategory('makanan')}
					className={`px-4 py-2 rounded text-lg font-bold ${selectedCategory === 'makanan' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
				>
					Makanan
				</button>
				<button
					onClick={() => setSelectedCategory('minuman')}
					className={`px-4 py-2 rounded text-lg font-bold ${selectedCategory === 'minuman' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
				>
					Minuman
				</button>
			</div>

			<div className="flex gap-3 overflow-x-scroll snap-x snap-mandatory pb-1 lg:gap-5 lg:px-0.5 lg:grid lg:grid-cols-3 mt-5">
				{filteredMenus.map((menu) => (
					<CardMenu key={menu.id}>
						<CardMenu.Header image={menu.image} stars={menu.stars} />
						<CardMenu.Body name={menu.name}>
							{menu.description}
						</CardMenu.Body>
						<CardMenu.Footer price={menu.price} link={menu.link} />
					</CardMenu>
				))}
			</div>
		</section>
	);
};
