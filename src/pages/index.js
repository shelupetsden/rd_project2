import HeroSection from "@/components/sections/hero/HeroSection";
import InteractiveSection from "@/components/sections/Interactive/InteractiveSection";
import CreationsSection from "@/components/sections/creation/CreationsSection";

export default function Home({heroSectionContext, interactiveSectionContext}) {
    return (
        <main>
            <HeroSection context={heroSectionContext}/>
            <InteractiveSection context={interactiveSectionContext}/>
            <CreationsSection/>
        </main>
    )
}


export async function getServerSideProps() {
    const heroSectionContext = {
        title: 'Immersive experiences that deliver',
        desktopImage: '/images/desktop/image-hero.jpg',
        mobileImage: '/images/mobile/image-hero.jpg'
    };

    const interactiveSectionContext = {
        title: 'THE LEADER IN INTERACTIVE VR',
        description: 'Founded in 2011, Loopstudios has been producing world-class\n' +
            'virtual reality projects for some of the best companies around the\n' +
            'globe. Our award-winning creations have transformed\n' +
            'businesses through digital experiences that bind to their brand.',
        desktopImage: '/images/image-interactive.jpg',
        mobileImage: '/images/mobile/image-interactive.jpg'
    };

    return {
        props: {
            heroSectionContext,
            interactiveSectionContext
        }
    }
}