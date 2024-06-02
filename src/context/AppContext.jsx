import {createContext} from "react";

export const Context = createContext(null);

const navigationList = [
    {name: "About", url: "/about", description: ""},
    {name: "Careers", url: "/careers", description: ""},
    {name: "Events", url: "/events", description: ""},
    {name: "Products", url: "/products", description: ""},
    {name: "Support", url: "/support", description: ""}
]

const creationList = [
    {
        title: 'DEEP EARTH',
        desktopImage: '/images/desktop/image-deep-earth.jpg',
        mobileImage: '/images/mobile/image-deep-earth.jpg'
    },
    {
        title: 'NIGHT ARCADE',
        desktopImage: '/images/desktop/image-night-arcade.jpg',
        mobileImage: '/images/mobile/image-night-arcade.jpg'
    },
    {
        title: 'SOCCER TEAM VR',
        desktopImage: '/images/desktop/image-soccer-team.jpg',
        mobileImage: '/images/mobile/image-soccer-team.jpg'
    },
    {
        title: 'THE GRID',
        desktopImage: '/images/desktop/image-grid.jpg',
        mobileImage: '/images/mobile/image-grid.jpg'
    },
    {
        title: 'FROM UP ABOVE VR',
        desktopImage: '/images/mobile/image-from-above.jpg',
        mobileImage: '/images/mobile/image-from-above.jpg'
    },
    {
        title: 'POCKET BOREALIS',
        desktopImage: '/images/mobile/image-pocket-borealis.jpg',
        mobileImage: '/images/mobile/image-pocket-borealis.jpg'
    },
    {
        title: 'THE CURIOSITY',
        desktopImage: '/images/desktop/image-curiosity.jpg',
        mobileImage: '/images/mobile/image-curiosity.jpg'
    },
    {
        title: 'MAKE IT FISHEYE',
        desktopImage: '/images/desktop/image-fisheye.jpg',
        mobileImage: '/images/mobile/image-fisheye.jpg'
    },
]

const socialsList = [
    {
        icon: '/images/icon-facebook.svg',
        link: 'https://www.facebook.com/',
    },
    {
        icon: '/images/icon-twitter.svg',
        link: 'https://x.com/',
    },
    {
        icon: 'images/icon-pinterest.svg',
        link: 'https://www.pinterest.com/',
    },
    {
        icon: '/images/icon-instagram.svg',
        link: 'https://www.instagram.com/',
    }

];

const AppContext = ({children}) => {
    return (
        <Context.Provider value={{navigationList, creationList, socialsList}}>
            {children}
        </Context.Provider>)
}

export default AppContext;