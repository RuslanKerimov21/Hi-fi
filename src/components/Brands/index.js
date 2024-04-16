import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Brands({ data, logo }) {
    let hint = useRef();
    let track = useRef();
    useEffect(() => {
        let transform = track.current.offsetWidth - hint.current.offsetWidth;
        gsap.to('.brands-inner', {
            scrollTrigger: {
                trigger: '.brands',
                start: 'top top',
                markers: true,
                end: () => '+=' + track.current.offsetWidth,
                scrub: 1,
            },
            x: '-=' + transform + 'px'
        })
    }, [])

    return (
        <div className="brands-inner" ref={hint}>
            <ul className="brands-list" ref={track}>
                {data.map((el, i) => (
                    <li className="brand-item" key={i}>
                        <div className="brand-year">{el.year}</div>
                        <div className="brand-logo">
                            {el.brand}
                        </div>
                        <div className="brand-top">
                            <div className="brand-title">{el.title}</div>
                            <div className="brand-description">{el.descr}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}