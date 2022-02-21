import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import 'cross-fetch/polyfill';
import { GlobalStyle } from '../layout/global-style';
import { useHistory } from 'react-router-dom'
import { ProjectsSectionContainer, Header, CardDiv } from './index';
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivrnet/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

export default function ProjectsSection() {
  const [todoItems, setTodoItems] = useState([]);
 
  return (
    <>
      <ProjectsSectionContainer>
        <GlobalStyle />
        <Header>To Do List Info</Header>
        <ToDoInput />
      </ProjectsSectionContainer>
    </>
  );
}
