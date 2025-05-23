import React, { useEffect, useState } from 'react';
import HomeTwoMain from './HomeTwoMain';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import HeaderStyleTwo from '../../components/Layout/Header/HeaderStyleTwo';
import BackToTop from '../../components/elements/BackToTop';

const HomeTwo = () => {
	const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

	return (
		<div className="body-bg-color-2">
		<React.Fragment>
            <HeaderStyleTwo />
            <HomeTwoMain/>
            <BackToTop scroll={isVisible} />
            <FooterTwo />
		</React.Fragment>
		</div>
	);
}

export default HomeTwo;
