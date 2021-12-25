import { Fragment } from "react";
import PostContent from "../../components/posts/post-content";
import { getPostData, getpostsFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  console.log(post);
  return (
    <Fragment>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post
    }
  };
}

export function getStaticPaths() {
  const postsFileName = getpostsFiles();

  const slugs = postsFileName.map(fileName => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  };
}

export default PostDetailPage;
