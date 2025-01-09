import React, { useState } from 'react';
import { projects } from '../../data/constants';
import ProjectCard from '../Cards/ProjectCards';
import {
  CardContainer,
  Container,
  Desc,
  Title,
  Wrapper,
} from './ProjectsStyle';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <CardContainer>
        
          {toggle === 'all' &&
            projects.map((project, key) => (
              <ProjectCard
                key={key}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}

          {projects
            .filter(item => item.category == toggle)
            .map((project, key) => (
              <ProjectCard
                key={key}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
