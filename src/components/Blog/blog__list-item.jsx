import React from 'react';

const BlogListItem = ({ id, title, content, categories, image }) => {
    const category = categories.map((category) => category.title)
    const singleImg  = image[0]
    return (
        <div>
            <div className='blog__img'>
                <img src={`http://localhost:1337${singleImg.formats.small.url}`} alt="pic" />
            </div>
            <div className='blog__title'>
                {title}
            </div>
            <div className='blog__category'>
                {category}
            </div>
            <div className='blog__content'>
                {content}
            </div>
            <div className='blog__arrow'>   
                <a href="">Читать полностью</a>
            </div>

        </div>
    );
}

export default BlogListItem;
