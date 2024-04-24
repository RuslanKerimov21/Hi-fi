import './index.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg';
export default function Cases({ data }) {
    gsap.registerPlugin(ScrollTrigger);
    const banner = useRef();
    const [style, setStyle] = useState();
    const onMouseMoved = (e) => {
        let rect = banner.current.getBoundingClientRect();
        setStyle({ left: `${e.clientX - rect.left}px`, top: `${e.clientY - banner.current.offsetTop}px` })
    }
    useEffect(() => {
        if (window.innerWidth > 800) {
            const cases = gsap.utils.toArray('.case');
            const caseCover = gsap.utils.toArray('.case-banner');
            cases.forEach((el, i) => {
                if (i != 0) {
                    gsap.fromTo(el, { clipPath: 'inset(100% 0% 0%)' }, {
                        scrollTrigger: {
                            trigger: el,
                            start: "top top",
                            end: el.clientHight,
                            scrub: 1,
                        },
                        clipPath: 'inset(0% 0% 0%)',
                    });
                    gsap.fromTo(caseCover[i], { clipPath: 'inset(100% 25% 0%)' }, {
                        scrollTrigger: {
                            trigger: el,
                            start: "top top",
                            end: el.clientHight,
                            scrub: 1,
                        },
                        clipPath: 'inset(0% 0% 0%)',
                    })
                }
            })
        }
    }, [data])
    return (
        <div className="cases-list">
            {data.map((el, i) => (
                <div className="case" key={i} style={{ alignItems: el.img ? 'flex-end' : 'center' }}>
                    <div className="container">
                        <div className="case-background" style={{ background: el.bg }}></div>
                        <div className="case-content">
                            <h1 className="case-title">{el.title}</h1>
                            <p className="case-description">{el.descr}</p>
                            {el.img ?
                                <div className="case-banner" ref={banner} onMouseMove={onMouseMoved}>
                                    <span className='hint' style={style}>
                                        <Arrow />
                                        View more
                                    </span>
                                    <img className='case-bg' src={el.case_bg} alt='case-bg' />
                                    <div className="case-img">
                                        <img src={el.img} alt="case-image" />
                                    </div>
                                </div>
                                : null
                            }
                            <Link className='more' to={`/cases/${el.slug}`}>
                                See more
                                <Arrow />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            <div className="case"></div>
        </div>
    )
}