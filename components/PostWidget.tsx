import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

interface Posts {
  categories?: {}[];
  slug?: string;
}

const PostWidget = ({ categories, slug }: Posts) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories as [string], slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  const headerStyle = {
    color: "#265073",
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3
        className="text-xl mb-8 font-semibold border-b pb-4"
        style={headerStyle}
      >
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map(
        (post: {
          title: "";
          featuredImage: { url: "" };
          createdAt: "";
          slug: "";
        }) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="flex-none w-16">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="h-8 align-middle rounded-full w-full"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 text-xs">
                {moment(post.createdAt).format("MMM DD YYYY")}
              </p>
              <Link href={`/post/${post.slug}`} className="text-sm category-name">
                {post.title}
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PostWidget;
