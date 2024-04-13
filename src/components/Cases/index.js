import gsap from 'gsap';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Cases({ data }) {
    const ref = useRef([]);
    ref.current = [];
    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { autoAlpha: 0 }, {
                autoAlpha: 1, left: 0,
                duration: 0.5, ScrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            })
        })
    }, [])
    const setRef = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }
    const items = [
        {
            slug: 'path',
            title: 'Case One for E-commerce'
        },
        {
            slug: 'path',
            title: 'Case One for E-commerce'
        }
    ]
    return (
        <div className="cases-list">
            {data.map((el) => (
                <div className="case case-one" ref={setRef}>
                    <div className="container">
                        <div className="case-background"></div>
                        <h1 className="case-title">{el.title}</h1>
                        <div className="case-banner">
                            <img src={require("../../case_image_1.png")} alt="case-image" />
                        </div>
                        <Link className="case-link" to={`${el.slug}`}>
                            See more
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8293 18.7109L7.0293 19.9109L19.0293 7.91085L17.8293 6.71085L5.8293 18.7109Z" fill="#ECFB5C" />
                                <path d="M17.3936 6.63606V19.364H19.0906V6.63606H17.3936Z" fill="#ECFB5C" />
                                <path d="M6.36328 6.63958V8.33664H19.0912V6.63958H6.36328Z" fill="#ECFB5C" />
                            </svg>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}