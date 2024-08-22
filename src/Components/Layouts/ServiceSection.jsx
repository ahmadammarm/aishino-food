import { SectionTitle } from '../Elements/SectionTitle';
import { CardService } from '../Fragments/CardService';
import { FaUtensils, FaShoppingCart, FaComments } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Menu Berkualitas',
    icon: <FaUtensils className="inline-block mr-2" />,
    description: `Semua menu yang kami sajikan merupakan menu yang terjamin fresh dan berkualitas baik untuk anda.`,
  },
  {
    id: 2,
    title: 'Pesan Online',
    icon: <FaShoppingCart className="inline-block mr-2" />,
    description: `Anda bisa memesan menu kami secara online dan biarkan kami yang mengantarkan sesuai tujuan.`,
  },
  {
    id: 3,
    title: 'Konsultasi',
    icon: <FaComments className="inline-block mr-2" />,
    description: `Konsultasikan keluhan anda mengenai menu kami, kami akan selalu membantu dan menyelesaikannya.`,
  },
];

export const ServiceSection = () => {
  return (
    <section id="services" className="px-5 pt-24 lg:px-20">
      <SectionTitle>Layanan</SectionTitle>

      <div className="flex gap-5 flex-col md:flex-row">
        {services.map((service) => (
          <CardService
            key={service.id}
            title={
              <>
                {service.icon}
                {service.title}
              </>
            }
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
