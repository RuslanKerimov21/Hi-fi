import './index.css';
import gsap from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/all';
export default function Cases({ data }) {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const cases = gsap.utils.toArray('.case:not(:first-child)');
        const caseCover = gsap.utils.toArray('.case-banner:not(:first-child)');
        cases.forEach((el) => {
            gsap.fromTo(el, { clipPath: 'inset(100% 0% 0%)' }, {
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    end: el.clientHight,
                    scrub: 1,
                },
                clipPath: 'inset(0% 0% 0%)',
            })
        })
        caseCover.forEach((el) => {
            gsap.fromTo(el, { transform: 'translate3d(0px, 0px, 0px)' }, {
                scrollTrigger: {
                    trigger: el,
                    scrub: 1,
                },
                transform: 'translate3d(0px, 0px, 0px) scale(1)'
            })
        })
    }, [data])
    return (
        <div className="cases-list">
            {data.map((el, i) => (
                <div className="case" key={i}>
                    <div className="container">
                        <div className="case-background" style={{ background: el.bg }}></div>
                        <div className="case-content">
                            <h1 className="case-title">{el.title}</h1>
                            <p className="case-description">{el.descr}</p>
                            <div className="case-banner">
                                <img src={el.img} alt="case-image" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}