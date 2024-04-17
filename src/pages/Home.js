import gsap from 'gsap';
import { useEffect } from 'react';
import { Brands, Cases } from '../components';
import { RenderText } from '../utils/text.compose';
import imgFo from '../assets/image/case_image_4.png';
import imgTo from '../assets/image/case_image_2.png';
import imgOne from '../assets/image/case_image_1.png';
import imgFive from '../assets/image/case_image_5.png';
import imgSixs from '../assets/image/case_image_6.png';
import imgThree from '../assets/image/case_image_3.png';
import { ReactComponent as Arrow } from '../assets/icons/Arrow.svg';
import { ReactComponent as Kenwood } from '../assets/icons/Kenwood.svg';
import { ReactComponent as Pampers } from '../assets/icons/Pampers.svg';
import { ReactComponent as Gillette } from '../assets/icons/Gillette.svg';
import { ReactComponent as Nutribullet } from '../assets/icons/Nutribullet.svg';
export default function HomePage() {
    let string = 'I blend creative design with strategic approach to create compelling, user-focused digital experiences';
    const items = [
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

    const brands = [
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
    useEffect(() => {
        const letter = gsap.utils.toArray('.text-first .letter');
        letter.forEach((el) => {
            gsap.fromTo(el, { scale: 1.35, opacity: 0.1 }, {
                scrollTrigger: {
                    trigger: '.intro',
                    start: 'top top',
                    end: window.innerHeight,
                    scrub: 1,
                },
                scale: 0,
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)',
            })
        })
    }, [])
    return (
        <main className="main">
            <section className="offer">
                <div className="container">

                </div>
            </section>
            <section className="intro">
                <div className="container">
                    <div className="intro-inner">
                        <div className="intro-tag">[Intro]</div>
                        <div className="intro-info">
                            <p className="text-first">{RenderText(string)}</p>
                            <p className='text-child'>{RenderText(string)}</p>
                        </div>
                        <button className='intro-button'>
                            Learn more
                            <div className="button-intro_arrow">
                                <Arrow />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            <section className="cases">
                <div className="cases-container">
                    <Cases data={items} />
                </div>
            </section>
            <section className='brands'>
                <div className='container'>
                    <h2 className='brands-title'>Brands<br />I Worked With</h2>
                    <Brands data={brands} />
                </div>
            </section>
        </main>
    )
}