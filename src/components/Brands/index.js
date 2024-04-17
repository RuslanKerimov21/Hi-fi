import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Brands({ data }) {
    let hint = useRef();
    let track = useRef();
    useEffect(() => {

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