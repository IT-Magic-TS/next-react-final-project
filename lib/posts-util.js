// npm install gray-matter
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export const getPostData = fileName => {
  const postSlug = fileName.replace(/\.md$/, "");
  // `${postSlug}.md` = stairs-spindle-balustrade-bob-rai.md
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  console.log("POST Directory: ", postDirectory);

  // remofes the file extension
  // console.log("File Name: ", fileName);
  // const postSlug = fileName.replace(/\.md$/, "");
  // console.log("SLUG: ", postSlug);

  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  console.log("POST DATA: ", postData);

  return postData;
};

export const getpostsFiles = () => {
  return fs.readdirSync(postDirectory);
};

export const getAllPosts = () => {
  const postFiles = getpostsFiles();

  const allPosts = postFiles.map(pf => {
    return getPostData(pf);
  });

  console.log("ALL POSTS: ", allPosts);

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturePosts = () => {
  const allPosts = getAllPosts();

  const featurePosts = allPosts.filter(post => post.isFeatured);

  return featurePosts;
};
