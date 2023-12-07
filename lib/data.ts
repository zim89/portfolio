import React from "react";
import {LuGraduationCap} from "react-icons/lu";

import cinemaniaImg from '@/public/projects/cinemania.png';
import homeAccountingImg from '@/public/projects/homeAccounting.png';
import gooseTrackImg from '@/public/projects/gooseTrack.png';
import carsharingImg from '@/public/projects/carsharing.png';
import tattooArtImg from '@/public/projects/tattooArt.png';

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Contact",
        hash: "#contact",
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

export const projectsData = [
    {
        title: "Katerina TattooArt",
        description:
            "Tattoo salon website. On the website you can view our work, sign up for a session, leave your review, get advice. Status: in development.",
        tags: ['React', 'Next.js', 'Tailwind', 'Supabase', 'Jet Admin'],
        imageUrl: tattooArtImg,
    },
    {
        title: "Carsharing",
        description:
            "Test application for a company that provides car rental services. Individual project.",
        tags: ['React', 'TypeScript', 'Redux', 'Mantine UI', 'Vite', 'MockAPI'],
        imageUrl: carsharingImg,
    },
    {
        title: "Home Accounting",
        description:
            "Fullstack Home Accounting App. You can manage your income and expenses. Individual project.",
        tags: ['React', 'TypeScript', 'Redux', 'Tailwind', 'Vite', 'Nest.js', 'PostgreSQL', 'TypeORM', 'JWT auth'],
        imageUrl: homeAccountingImg,
    },
    {
        title: "GooseTrack",
        description:
            "A simple application that provides you with easy to use task management system, to organize your life and work. Role: developer.",
        tags: ['React', 'Redux', 'Mantine UI', 'Vite', 'i18next', 'Node.js', 'Express', 'MongoDB', 'GoogleAuth', 'Cloudinary'],
        imageUrl: gooseTrackImg,
    },
    {
        title: "Cinemania",
        description:
            "Application for watching movies. Adding favorite movies to the personal library. Individual project: refactoring of the Cinemania team project.",
        tags: ['HTML', 'SCSS', 'JavaScript', 'Parcel'],
        imageUrl: cinemaniaImg,
    },
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
    "Framer Motion",
] as const;
