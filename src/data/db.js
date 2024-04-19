import imgFo from '../assets/image/case_image_4.png';
import imgTo from '../assets/image/case_image_2.png';
import imgOne from '../assets/image/case_image_1.png';
import imgFive from '../assets/image/case_image_5.png';
import imgSixs from '../assets/image/case_image_6.png';
import imgThree from '../assets/image/case_image_3.png';
import pralaxOne from '../assets/image/paralax_image_1.png';
import pralaxTo from '../assets/image/paralax_image_2.png';
import pralaxThree from '../assets/image/paralax_image_3.png';
import pralaxFo from '../assets/image/paralax_image_4.png';
import pralaxFive from '../assets/image/paralax_image_5.png';
import { ReactComponent as Kenwood } from '../assets/icons/Kenwood.svg';
import { ReactComponent as Pampers } from '../assets/icons/Pampers.svg';
import { ReactComponent as Gillette } from '../assets/icons/Gillette.svg';
import { ReactComponent as Nutribullet } from '../assets/icons/Nutribullet.svg';
export const cases = [
    {
        title: 'Virtual cards',
        descr: 'A fintech startup offering a SaaS virtual card system to streamline small business spending',
        bg: '#3185DB',
        img: imgOne,
    },
    {
        title: 'Online store',
        descr: 'Retailer of premium leather accessories looking to enhance its online presence with an advanced e-commerce platform.',
        bg: '#684026',
        img: imgTo,
    },
    {
        title: 'Saas platform',
        descr: 'Fintech startup dedicated to revolutionizing spending management for small businesses with virtual card system.',
        bg: '#798F7C',
        img: imgThree,
    },
    {
        title: 'Blog platform',
        descr: 'Consulting firm improving digital content accessibility and engagement on its platform.',
        bg: '#1B4242',
        img: imgFo,
    },
    {
        title: 'Medical research',
        descr: 'Medical research organization boosting its online presence to increase community engagement.',
        bg: '#24A174',
        img: imgFive,
    },
    {
        title: 'Investment platform',
        descr: 'Innovative startup providing a platform for easy access to pre-seed investments with educational tools',
        bg: '#005898',
        img: imgSixs,
    },
]
export const brands = [
    {
        title: 'Kenwood',
        descr: 'Сonsumer electronics',
        year: '2021',
        brand: <Kenwood />,
    },
    {
        title: 'Gillette',
        descr: 'Shaving Products',
        year: '2020',
        brand: <Gillette />,
    },
    {
        title: 'Nutribullet',
        descr: 'Kitchen Appliances',
        year: '2021',
        brand: <Nutribullet />,
    },
    {
        title: 'Rowenta',
        descr: 'Household Appliances',
        year: '2021',
        brand: <Kenwood />,
    },
    {
        title: 'Delonghi',
        descr: 'Kitchen Appliances',
        year: '2020',
        brand: <Kenwood />,
    },
    {
        title: 'Pampers',
        descr: 'Baby Care products',
        year: '2022',
        brand: <Pampers />,
    },
    {
        title: 'Protiviti',
        descr: 'Consulting company',
        year: '2023',
        brand: <Kenwood />,
    },
    {
        title: 'Nautilus',
        descr: 'Biotechnology company',
        year: '2023',
        brand: <Kenwood />,
    },
    {
        title: 'WOWMAX',
        descr: 'DEX aggregator',
        year: '2024',
        brand: <Kenwood />,
    },
]
export const paralax = [
    {
        id: 1,
        img: pralaxOne,
    },
    {
        id: 2,
        img: pralaxTo,
    },
    {
        img: pralaxThree,
    },
    {
        img: pralaxFo,
    },
    {
        img: pralaxFive,
    }
]