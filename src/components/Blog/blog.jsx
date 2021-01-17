import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use(Navigation);

function Blog() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
          }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="blog">
        <div className="block__title">
          <div className="line"></div>
          <div className="title">Блог</div>
          <div className="line"></div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
        >
          {allPostsData &&
            allPostsData.map((post, index) => (
              <SwiperSlide width="33%">
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="blog__img"
                    />
                  </span>
                  <span>
                    <h2 className="blog__title">{post.title}</h2>
                  </span>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}

export default Blog;
