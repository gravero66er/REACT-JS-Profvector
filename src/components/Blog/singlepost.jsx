import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClien from "../../client.js";
import Spinner from "./Spinner/spinner.jsx";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import BlogFooter from "../Footer/blog__footer.jsx";
import Blog from "../Blog/blog";

const builder = imageUrlBuilder(sanityClien);
function urlFor(source) {
  return builder.image(source);
}

// Adding image builder from Sanity.io

function Singlepost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClien
      .fetch(
        `*[slug.current == $slug]{
              title,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  }
              },
              body,
              "name": author->name,
              "authorImage": author->image
          }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  // Fetching data from Sanity.io using GROQ

  if (!postData)
    return (
      <div className="spinner__block">
        <Spinner />
      </div>
    );

  // While data from CMS is on load or not response return Spinner

  return (
    <div>
      <div className="container">
        <div className="single__post">
          <div className="singleblog__title">
            <h2>{postData.title}</h2>
          </div>
          {/* <div className="img__container">
            <img
              className="singleblog__img"
              src={urlFor(postData.mainImage).width(200).url()}
              alt={postData.title}
            />
          </div> */} 
          <div>
            <div className="blog__author">
              <img
                className="author__img"
                src={urlFor(postData.authorImage).width(100).url()}
                alt="Автор новости"
              />
              <h4 className="author__name">{postData.name}</h4>
            </div>
          </div>
          <BlockContent
            blocks={postData.body}
            projectId={sanityClien.clientConfig.projectId}
            dataset={sanityClien.clientConfig.dataset}
            className="blog__body"
          />
        </div>
      </div>
      <Blog />
      <BlogFooter />
    </div>
  );
}

export default Singlepost;
