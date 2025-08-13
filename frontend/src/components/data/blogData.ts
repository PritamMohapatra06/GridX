export type Post = {
  title: string;
  date: string;
  image: string; // /public/images/blog/...
  link: string;
};

export const posts: Post[] = [
  {
    title: "Building a Patient Dashboard with React",
    date: "Aug 2025",
    image: "/images/blog/b1.jpg",
    link: "#",
  },
  {
    title: "Tailwind Tips for Pixel-Perfect UI",
    date: "Jul 2025",
    image: "/images/blog/b2.jpg",
    link: "#",
  },
  {
    title: "Framer Motion: Subtle, Smooth, Performant",
    date: "Jun 2025",
    image: "/images/blog/b3.jpg",
    link: "#",
  },
];
