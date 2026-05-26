import React from 'react';
import { Home, PenTool, RefreshCw, CheckCircle, Key } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';
import './Services.css';

import imgPreservation from '../assets/images/svc-preservation-detail.png';
import imgMaintenance from '../assets/images/svc-maintenance-detail.png';
import imgRenovation from '../assets/images/svc-renovation-detail.png';
import imgInspections from '../assets/images/service-4-inspections.png'; // Reused
import imgTurn from '../assets/images/hero-bg.png'; // Reused

const detailedServices = [
    {
        icon: <Home size={40} />,
        image: imgPreservation,
        title: 'Property Preservation',
        description: 'Protecting your vacant assets from deterioration and vandalism.',
        items: ['Securing & Re-keying', 'Debris Removal', 'Winterization', 'Lawn Maintenance', 'Board-ups']
    },
    {
        icon: <PenTool size={40} />,
        image: imgMaintenance,
        title: 'General Handyman & Repairs',
        description: 'Ongoing upkeep to ensure tenant satisfaction and asset longevity.',
        items: [
  "Drywall & painting",
  "Carpentry repairs",
  "Flooring repair & installation",
  "Window & door repairs",
  "Fence & gate repair",
  "Gutter cleaning & minor repairs",
  "Appliance installation & repair",
  "Electrical & plumbing repairs",
  "Garage door repair",
  "Exterior maintenance",
  "Lock changes & property securing",
  "Damage restoration & mold remediation"
]
    },
    {
        icon: <RefreshCw size={40} />,
        image: imgRenovation,
        title: 'Cleaning & Turnover Services',
        description: 'Transforming distressed properties into market-ready assets.',
        items: [
  "Full turnover & trash-out cleaning",
  "Common area & carpet cleaning",
  "Pressure washing",
  "Air duct cleaning"
]
    },
    {
        icon: <CheckCircle size={40} />,
        image: imgInspections,
        title: 'Outdoor & Lawn Services',
        description: 'Ensuring your properties meet all local codes and safety standards.',
        items: [
  "Lawn care & yard cleanup",
  "Snow removal",
  "Landscaping & gardening",
  "Tree & shrubs Trimming"
]
    },
    {
        icon: <Key size={40} />,
        image: imgTurn,
        title: 'Specialty Contractors & Other Services',
        description: 'Rapid turnover services to minimize vacancy periods.',
        items: [
  "Minor Electrician",
  "Minor plumbing",
  "Painter",
  "Pool & hot tub services",
  "Minor Roofing & tile work",
  "Glass & mirrors",
  "HVAC services",
  "Hauling & Trash removal"
]
    }
];

const Services = () => {
    return (
        <div className="page-services">
            <Section
                className="services-header text-center"
                variant="dark" /* Changed to dark for contrast with image */
                style={{
                    backgroundImage: `url(${imgTurn})`, /* reusing hero-bg */
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(11, 15, 25, 0.85)'
                }}
            >
                <SectionHeader
                    title="Our Services"
                    subtitle="Comprehensive asset management solutions tailored to your needs."
                    light
                />
            </Section>

            <Section>
                <div className="services-list">
                    {detailedServices.map((service, index) => (
                        <Reveal key={index} width="100%">
                            <div className="service-row">
                                <div className="service-content-col">
                                    <div className="service-info">
                                        <div className="service-icon-wrapper">{service.icon}</div>
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="service-details-list">
                                        <h3>What We Include</h3>
                                        <ul>
                                            {service.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="service-image-col">
                                    <img src={service.image} alt={service.title} className="service-main-image" />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
