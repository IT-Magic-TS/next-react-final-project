import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const DUMMY_POSTS = [
  {
    slug: "metal-gates",
    title: "Metal gates",
    image: "metal-gates.webp",
    excerpt:
      "Metal gates frame is from 40mm square box sections. Long bars are CHS 21.3 and dog bars are from 12mm round steel",
    date: "2022-02-24"
  },
  {
    slug: "stair",
    title: "Stair",
    image: "stair.webp",
    excerpt:
      "Metal gates frame is from 40mm square box sections. Long bars are CHS 21.3 and dog bars are from 12mm round steel",
    date: "2022-05-24"
  },
  {
    slug: "helical-stair",
    title: "Helical Stair",
    image: "helical-stair.webp",
    excerpt:
      "Metal gates frame is from 40mm square box sections. Long bars are CHS 21.3 and dog bars are from 12mm round steel",
    date: "2022-07-24"
  }
];

function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
};

export default AllPostsPage;
