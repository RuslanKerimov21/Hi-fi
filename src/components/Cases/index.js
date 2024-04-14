import gsap from 'gsap';
import { useEffect } from "react";
export default function Cases({ data }) {
    useEffect(() => {
        const cases = gsap.utils.toArray('.case');
        cases.forEach((el, i) => {
            gsap.fromTo(el, { clipPath: 'inset(100% 0% 0%)' }, {
                scrollTrigger: {
                    trigger: el,
                    pin: true,
                    scrub: 2,
                },
                clipPath: 'inset(0% 0% 0%)',
            })
        })
    }, [])
    return (
        <div className="cases-list">
            {data.map((el, i) => (
                <div className={`case ${el.bg}`} key={i}>
                    <div className="container">
                        <div className="case-background"></div>
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