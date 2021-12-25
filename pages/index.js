import { Fragment } from "react";
import FeauturedPosts from "../components/home-page/feautured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturePosts } from "../lib/posts-util";

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

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeauturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featurePosts = getFeaturePosts();

  return {
    props: {
      posts: featurePosts
    }
  };
}

export default HomePage;
