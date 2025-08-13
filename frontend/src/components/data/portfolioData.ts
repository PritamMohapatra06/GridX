// portfolioData.ts
export interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Creative Landing Page",
    category: "Web Design",
    image: "/images/portfolio/work-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Photography Portfolio",
    category: "Photography",
    image: "/images/portfolio/work-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    category: "Web Development",
    image: "/images/portfolio/work-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "App UI Design",
    category: "UI/UX",
    image: "/images/portfolio/work-4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Branding",
    image: "/images/portfolio/work-5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/work-6.jpg",
    link: "#",
  },
];

// Optional: quick log to verify import
console.log("Portfolio data loaded:", works);
