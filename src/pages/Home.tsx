import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import AITerminal from '../components/AITerminal';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

interface HomeProps {
    isReady?: boolean;
}

const Home: React.FC<HomeProps> = ({ isReady }) => {
    return (
        <>
            <Helmet>
                <title>Kany Dev | Designer de Solutions AI & SEO</title>
                <meta name="description" content="Portfolio de Kany Dev - Expert en développement Web, SEO et intégration IA." />
            </Helmet>
            <Hero isReady={isReady} />
            <Specialties />
            <AITerminal />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
