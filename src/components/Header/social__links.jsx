import React from 'react';

const SocialLinks = () => {
    return (
        <div className="container">
            <div className="social__links">
                <a href="https://www.youtube.com/channel/UCEKQbNGLuQfg2N36sIqOfvw" target="_blank" rel="noopener noreferrer"><div className="links__item links__item-y"></div></a>
                {/* <a href=""><div className="links__item links__item-w"></div></a> */}
                <a href="https://www.facebook.com/profvektor.ru/" target="_blank" rel="noopener noreferrer"><div className="links__item links__item-f"></div></a>
                {/* <a href=""><div className="links__item links__item-t"></div></a> */}
                <a href="https://vk.com/prof_vektor" target="_blank" rel="noopener noreferrer"><div className="links__item links__item-v"></div></a>
                <a href="https://www.instagram.com/artem_profvektor/" target="_blank" rel="noopener noreferrer"><div className="links__item links__item-i"></div></a>
            </div>
        </div>
    );
}

export default SocialLinks;
