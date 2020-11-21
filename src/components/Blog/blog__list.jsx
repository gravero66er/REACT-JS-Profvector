import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import Slider from "react-slick";
import BlogListItem from "./blog__list-item";

export default class BlogList extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:1337/blogs")
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad Response From Server");
        }
        return res.json();
      })
      .then(blogs => {
        this.setState({ blogs: blogs.reverse() });
      });
  }
  render() {
    const settings = {
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinit: true,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true
    };
    return (
      <div className="container">
        <div className="block__title">
          <div className="line"></div>
          <div className="title">Блог</div>
          <div className="line"></div>
        </div>
        <div className="blog__row">
          <Slider {...settings}>
            {this.state.blogs.map(
              ({ id, title, content, image, categories }) => (
                <div className="blog__item">
                  <BlogListItem
                    key={id}
                    title={title}
                    content={content}
                    categories={categories}
                    image={image}
                  />
                </div>
              )
            )}
          </Slider>
        </div>
        <div className="line"></div>
      </div>
    );
  }
}
