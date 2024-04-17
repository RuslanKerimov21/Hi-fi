import './index.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Sun } from '../../assets/icons/Sun.svg';
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg';
import { ReactComponent as Figure } from '../../assets/icons/Figure.svg';
import { ReactComponent as Folder } from '../../assets/icons/Folder.svg';
import { ReactComponent as Available } from '../../assets/icons/Available.svg';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-content footer-group">
                        <h2 className="footer-title">Say hello</h2>
                        <p className="footer-description">Transforming Ideas into Impactful Products. <br /> Let's Collaborate on Your Next Innovation!</p>
                        <Link className='button-project' to={'/project'}>
                            Discuss Project
                            <div className="button-project_arrow">
                                <Arrow />
                            </div>
                        </Link>
                    </div>
                    <div className="footer-menu footer-group">
                        <h3>Menu</h3>
                        <div className="footer-group_content">
                            <ul className="footer-menu_list">
                                <li className="footer-menu_item">
                                    <Link to={`about`}>About me</Link>
                                </li>
                                <li className="footer-menu_item">
                                    <Link to={`works`}>Works</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact footer-group">
                        <h3>Contacts</h3>
                        <div className="footer-group_content">
                            <ul className="footer-menu_list">
                                <li className="footer-menu_item">
                                    <Link to={`mailto:`}>Email</Link>
                                </li>
                                <li className="footer-menu_item">
                                    <Link to={`linkedin`}>Linkedin</Link>
                                </li>
                            </ul>
                            <Link className='button-read_cv' to={`/`}>
                                <div className="read-cv_left">
                                    <Folder />
                                </div>
                                <div className="read-cv_right">
                                    Read CV
                                    <Arrow />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom_left">
                        Product and Visual designer
                    </div>
                    <div className="footer-bottom_rigtht">
                        <div className="footer-location">
                            <Figure />
                            <div className="footer-location_text">Based in Buenos Aires </div>
                            <Sun />
                            <div className="location-timestamp">1:32 PM</div>
                        </div>
                        <div className="footer-button">
                            <button>
                                <Available />
                                Available
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}