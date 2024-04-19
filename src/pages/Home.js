import { brands, cases, paralax } from '../data/db';
import { Brands, Cases, ParalaxList } from '../components';
import { ReactComponent as Sun } from '../assets/icons/Sun.svg';
import { ReactComponent as Arrow } from '../assets/icons/Arrow.svg';
import { ReactComponent as Available } from '../assets/icons/Available.svg';
import { ReactComponent as ScrollArrow } from '../assets/icons/ScrollArrow.svg';
export default function HomePage() {
    return (
        <main className="main">
            <section className="offer">
                <div className="container">
                    <div className="offer-inner">
                        <div className="offer-top">
                            <div className="offer-location">
                                <div className="offer-location_text">Based in Buenos Aires </div>
                                <div className="location-timestamp">1:32 PM</div>
                                <Sun />
                            </div>
                            <div className="offer-buttons">
                                <button className='available'>
                                    <Available />
                                    Available
                                </button>
                                <button className='lets-talk'>
                                    Let’s talk
                                    <Arrow />
                                </button>
                            </div>
                        </div>
                        <div className="offer-content">
                            <h1 className="offer-title">Product & Visual Designer</h1>
                            <div className="offer-intro">
                                <div className="offer-intro_top">[About me]</div>
                                <div className="offer-intro_bottom">Passionate Product Designer crafting interfaces to simplify complex processes and enhance user experience</div>
                            </div>
                        </div>
                        <ParalaxList data={paralax} />
                    </div>
                </div>
                <button className='offer-scroll'>
                    Scroll down to explore
                    <ScrollArrow />
                </button>
                <div className="sticky-spacer"></div>
            </section>
            <section className="cases">
                <div className="cases-container">
                    <Cases data={cases} />
                </div>
            </section>
            <section className='brands'>
                <div className='container'>
                    <h2 className='brands-title'>Brands<br />I Worked With</h2>
                    <Brands data={brands} />
                </div>
            </section>
        </main>
    )
}