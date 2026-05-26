import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                {/* Brand Column */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logo} alt="Monarch Asset Management" className="logo-image-footer" />
                    </div>
                    <p className="footer-desc">
                        Premium property preservation, maintenance, and renovation services for asset management professionals.
                    </p>
                </div>

                {/* Links Column */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Get a Quote</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <Mail size={18} className="info-icon" />
                            <a href="mailto:info@monarchassetsmgmt.com">info@monarchassetsmgmt.com</a>
                        </li>
                        <li>
                            <Phone size={18} className="info-icon" />
                            <a href="tel:9165189580">(916) 518-9580</a>
                        </li>
                        <li>
                            <MapPin size={18} className="info-icon" />
                            <span>3400 Cottage Way, Suite G2, Sacramento, CA 95825</span>
                        </li>
                        {/* <li className="mailing-address">
                            <span>Mailing: 352 E 8th St, Apt 4F, Brooklyn, NY 11218</span>
                        </li> */}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} MONARCH ASSET MANAGEMENT LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
