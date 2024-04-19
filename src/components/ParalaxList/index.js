import './index.css';
import gsap from 'gsap';
import { useEffect } from 'react';
export default function ParalaxList({ data }) {
    useEffect(() => {
        gsap.fromTo('.paralax-list', { top: '100%' }, {
            scrollTrigger: {
                trigger: '.offer',
                start: 'top top',
                end: window.innerHeight,
                scrub: 1,
            },
            position: 'inset',
            top: '-217%',
            stagger: 0.1,
        })
    }, [])
    return (
        <div className="paralax-list">
            {data.map((el, key) => (
                <div className="paralax-item" key={key}>
                    <img src={el.img} alt={el.img.name} />
                </div>
            ))}
        </div>
    )
}