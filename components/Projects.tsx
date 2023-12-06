'use client';
import React from 'react';
import Project from './Project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id='projects' className='mb-28 scroll-mt-28'>
      <h2 className='title'>My projects</h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
