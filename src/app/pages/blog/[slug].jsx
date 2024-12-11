import { useRouter } from "next/router"; // To access the slug
import Head from "next/head"; // For adding dynamic metadata
import React from "react";

// Example: Fetch data for your blog posts
const blogData = {
  "my-first-post": {
    title: "My First Blog Post",
    content: "This is the content of my first blog post.",
    author: "John Doe",
    date: "December 11, 2024",
  },
  "second-post": {
    title: "Another Blog Post",
    content: "This is another interesting blog post.",
    author: "Jane Smith",
    date: "December 12, 2024",
  },
};

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query; // Access the dynamic slug from the route

  // Get blog post data based on the slug
  const post = blogData[slug];

  // Handle case where the slug doesn't match any blog post
  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Read more about ${post.title}`} />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Date:</strong> {post.date}</p>
        <div>{post.content}</div>
      </article>
    </>
  );
};

export default BlogPost;
