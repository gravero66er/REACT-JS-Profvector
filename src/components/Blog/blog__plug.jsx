import React from 'react';
import Spinner from "../Blog/Spinner/spinner";

const BlogPlug = () => {
    return (
        <div id="blog" className="container">
            <div className='block__title'>
                <div className='line'></div>
                <div className='title'>Блог</div>
                <div className='line'></div>
            </div>
            <div className="blog__plug">
                <Spinner />
                <div className="blog__title">Loading...</div>
                <div className="blog__content">Совсем скоро здесь появится информативный блог, в котором мы подробно будем рассказывать про нашу работу.</div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default BlogPlug;
