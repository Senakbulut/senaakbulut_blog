import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../services";
import FeaturedPosts from "../sections/featuredPosts";

const Home = ({ posts }: { posts: [] }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>My Frontend Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.slice(0).reverse().map(
            (post: {
              title: "";
              node: {
                title: string;
                slug: string;
                createdAt: string;
                excerpt: string;
                author: {
                  name: string;
                  photo: {
                    url: string;
                  };
                };
                featuredImage: {
                  url: string;
                };
                content: {
                  raw: {
                    children: {
                      type(
                        index: number,
                        children: any[],
                        typeObj: { children: {}[] },
                        type: any
                      ): any;
                      children: {}[];
                    }[];
                    type: "";
                  };
                };
              };
            }) => (
              <PostCard post={post.node} key={post.title} />
            )
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
