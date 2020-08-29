/** @format */

interface Works {
  id: string;
  link: string;
  role: string;
  stack: string;
  title: string;
  linkTarget: string;
  size: 'Small' | 'Large';
  colors: 'Green' | 'Purple' | 'Yellow';
}

export const works: Works[] = [
  {
    id: 'Work_1',
    size: 'Large',
    colors: 'Purple',
    title: 'MusicMatch',
    role: 'Personal Project',
    linkTarget: '/musicmatch',
    link: 'Read the Case Study',
    stack: 'React, Next, TypeScript, MongoDB',
  },
  {
    id: 'Work_2',
    title: 'Ampe',
    size: 'Small',
    colors: 'Green',
    linkTarget: '/ampe',
    role: 'Fullstack Mobile Developer',
    link: 'Coming soon to the App Store',
    stack: 'React Native, TypeScript, GraphQL, Prisma',
  },
  {
    id: 'Work_3',
    size: 'Small',
    colors: 'Yellow',
    title: 'Liv2BGirl',
    link: 'Learn More',
    linkTarget: '/liv2bgirl',
    stack: 'React, Next, MongoDB',
    role: 'Senior Frontend Developer',
  },
];
