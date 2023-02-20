import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting started with NextJS!",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS ia the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    slug: "getting-started-with-nextjs",
    date: "2023-02-20",
  },
  {
    title: "Getting started with NextJS!",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS ia the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    slug: "getting-started-with-nextjs2",
    date: "2023-02-20",
  },
  {
    title: "Getting started with NextJS!",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS ia the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    slug: "getting-started-with-nextjs3",
    date: "2023-02-20",
  },
  {
    title: "Getting started with NextJS!",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS ia the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    slug: "getting-started-with-nextjs4",
    date: "2023-02-20",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
