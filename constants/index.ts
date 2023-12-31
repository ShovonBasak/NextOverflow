import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const topQuestions = [
  {
    id: 1,
    title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    title: "lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: 3,
    title: "lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 4,
    title: "lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export const topTags = [
  {
    id: 1,
    name: "nextjs",
    questionCount: 29
  },
  {
    id: 2,
    name: "test",
    questionCount: 18
  },
  {
    id: 3,
    name: "react",
    questionCount: 17
  },
  {
    id: 4,
    name: "css",
    questionCount: 12
  },
  {
    id: 5,
    name: "next js",
    questionCount: 9
  },
];
