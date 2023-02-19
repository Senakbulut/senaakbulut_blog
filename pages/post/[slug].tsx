import React from "react";
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from "../../components";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }: { post: any }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author}/>
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map(
                (category: { slug: "" }) => category.slug as string
              )}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

interface Post {
  node: {
    slug: string;
  };
}

export async function getStaticProps({ params }: { params: { slug: "" } }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: Post) => ({ params: { slug } })),
    fallback: false,
  };
}
