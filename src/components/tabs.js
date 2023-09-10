import styled from 'styled-components';
import React, { useState } from 'react';
import TabComics from './TabComics.js';
import TabCharacters from './TabCharacters.js';
const Tab = styled.button`
  font-size: 20px;
  color:#E6CB05;
  padding: 10px 60px;
  cursor: pointer;
  width:100%;
  opacity: 0.6;
  background:  #00020F;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #E6CB05;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Characters', 'Comics'];

function Tabs() {
  const [active, setActive] = useState(types[0]);
  let activeComponent ="Test";

 if(active=='Comics') activeComponent = <TabComics />;
 if(active=='Characters') activeComponent = <TabCharacters/>;
  return (
    <div>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      {activeComponent}
    </div>
  );
}
export default Tabs;


