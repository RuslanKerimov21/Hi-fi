import './index.css';
import gsap from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/all';
export default function Cases({ data }) {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
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
                                <div className="case-img">
                                    <img src={el.img} alt="case-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}