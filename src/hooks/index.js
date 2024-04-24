import { useState } from "react";
const [style, setStyle] = useState(null)
export function onMouseMove(event, banner) {
    let rect = banner.current.getBoundingClientRect();
    setStyle({ left: `${event.clientX - rect.left}px`, top: `${event.clientY - banner.current.offsetTop}px` });
    return style;
}