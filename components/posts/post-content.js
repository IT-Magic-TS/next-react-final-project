// npm install react-markdown
// import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import styless from "./post-content.module.css";

// const post = {
//   slug: "metal-gates",
//   title: "Metal gates",
//   image: "metal-gates.webp",
//   excerpt:
//     "Metal gates frame is from 40mm square box sections. Long bars are CHS 21.3 and dog bars are from 12mm round steel",
//   date: "2022-02-24"
//   // content: "# This is first post"
// };

function PostContent({ post }) {
  const imgPath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={styless.content}>
      <PostHeader image={imgPath} title={post.title} />
      {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
    </article>
  );
}

export default PostContent;
