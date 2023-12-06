import React from 'react';

import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import cinemaniaImg from '@/public/projects/cinemania.png';
import homeAccountingImg from '@/public/projects/homeAccounting.png';
import gooseTrackImg from '@/public/projects/gooseTrack.png';
import carsharingImg from '@/public/projects/carsharing.png';
import tattooArtImg from '@/public/projects/tattooArt.png';

export const links = [
  {
    hash: '#home',
    name: 'Home',
  },
  {
    hash: '#about',
    name: 'About',
  },
  {
    hash: '#projects',
    name: 'Projects',
  },
  {
    hash: '#skills',
    name: 'Skills',
  },
  {
    hash: '#education',
    name: 'Education',
  },
  {
    hash: '#contact',
    name: 'Contact',
  },
] as const;

export const educationData = [
  {
    title: 'IT School GoIT',
    date: '2022 - 2023',
    description:
      'Fullstack Developer.',
    icon: React.createElement(LuGraduationCap),
    location: 'Dnipro, Ukraine',
  },
  {
    title: 'Alfred Nobel University',
    date: '2016 - 2017',
    description:
      'Law, specialist degree in law.',
    icon: React.createElement(LuGraduationCap),
    location: 'Dnipro, Ukraine',
  },
  {
    title: 'National Metallurgical Academy of Ukraine',
    date: '2004 - 2006',
    description:
      'Business economy, specialist degree in economics and business.',
    icon: React.createElement(LuGraduationCap),
    location: 'Dnipro, Ukraine',
  },
  {
    title: 'Kharkiv National University of Radioelectronics',
    date: '1998 - 2003',
    description:
      'Information communication networks, specialist in the organization of telecommunication production processes.',
    icon: React.createElement(LuGraduationCap),
    location: 'Kharkiv, Ukraine',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    date: '2019',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    location: 'Miami, FL',
  },
  {
    title: 'Front-End Developer',
    date: '2019 - 2021',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    location: 'Orlando, FL',
  },
  {
    title: 'Full-Stack Developer',
    date: '2021 - present',
    description:
      'I\'m now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I\'m open to full-time opportunities.',
    icon: React.createElement(FaReact),
    location: 'Houston, TX',
  },
] as const;

export const projectsData = [
  {
    title: 'Katerina TattooArt',
    description:
      'Tattoo salon website. On the website you can view our work, sign up for a session, leave\n' +
      'your review, get advice. Status: in development.',
    tags: ['React', 'Next.js', 'Tailwind', 'Supabase', 'Jet Admin'],
    imageUrl: tattooArtImg,
  },
  {
    title: 'Carsharing',
    description:
      'Test application for a company that provides car rental services. Individual project.',
    tags: ['React', 'TypeScript', 'Redux', 'Mantine UI', 'Vite', 'MockAPI'],
    imageUrl: carsharingImg,
  },
  {
    title: 'GooseTrack',
    description:
      'A simple application that provides you with easy to use task management system, to organize your life and work, all in one place! Role: developer.',
    tags: ['React', 'Redux', 'Mantine UI', 'i18next', 'Vite', 'Node.js', 'Express', 'MongoDB', 'GoogleAuth', 'Cloudinary'],
    imageUrl: gooseTrackImg,
  },
  {
    title: 'Home Accounting',
    description:
      'Fullstack Home Accounting App. You can manage your income and expenses. Individual project.',
    tags: ['React', 'TypeScript', 'Redux', 'Tailwind', 'Vite', 'Nest.js', 'PostgreSQL', 'TypeORM', 'JWT auth'],
    imageUrl: homeAccountingImg,
  },
  {
    title: 'Cinemania',
    description:
      'Application for watching movies. Adding favorite movies to the personal library. Individual project: refactoring of the Cinemania team project.',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Parcel'],
    imageUrl: cinemaniaImg,
  },
  // {
  //   title: 'Hotel MIMINO',
  //   description:
  //     'A website with responsive layout, burger menu, modal windows and attractive design. Role: Scrum-master, developer.',
  //   tags: ['HTML', 'SCSS', 'JavaScript', 'Parcel'],
  //   imageUrl: miminoImg,
  // },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'BEM',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'Rest API',
  'Redux',
  'Git',
  'Tailwind',
  'Nest.js',
  'TypeORM',
  'Sequelize',
  'Prisma',
  'Supabase',
] as const;
