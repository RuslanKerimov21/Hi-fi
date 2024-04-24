import './index.css';
export default function Brands({ data }) {
    return (
        <div className="brands-inner">
            <ul className="brands-list">
                {data.map((el, i) => (
                    <li className="brand-item" key={i}>
                        <div className="brand-year">{el.year}</div>
                        <div className="brand-logo">
                            {el.brand}
                        </div>
                        <div className="brand-top">
                            <div className="brand-item_title">{el.title}</div>
                            <div className="brand-description">{el.descr}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}