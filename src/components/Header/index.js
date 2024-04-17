import './index.css';
import { ReactComponent as Sun } from '../../assets/icons/Sun.svg';
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg';
import { ReactComponent as Available } from '../../assets/icons/Available.svg';
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-right">
                        <div className="header-location">
                            <div className="header-location_text">Based in Buenos Aires </div>
                            <Sun />
                            <div className="location-timestamp">1:32 PM</div>
                        </div>
                        <div className="header-buttons">
                            <button className='available'>
                                <Available />
                                Available
                            </button>
                            <button className="lets-talk">
                                Let’s talk
                                <Arrow />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}