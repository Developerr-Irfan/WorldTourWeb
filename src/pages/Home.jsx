import { HeroSection } from '../components/UI/HeroSection';
import { About } from './About';

export const Home = () => {
    return (
        <>
            <HeroSection />

            {/* Decorative section divider */}
            <div style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.3) 30%, rgba(139,92,246,0.3) 70%, transparent 100%)',
                margin: '0 auto',
                maxWidth: '80rem',
                position: 'relative',
                zIndex: 1
            }} />

            <About />
        </>
    );
};
