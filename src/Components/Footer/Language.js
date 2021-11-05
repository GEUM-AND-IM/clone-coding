import React from 'react';
import styled from 'styled-components';

const Listyle = styled.li`
  list-style: none;
  margin: 8px;
  &:hover{
    text-decoration: underline;
  }
`;

const Language = ({language}) => {
    return (
            <Listyle>{language}</Listyle>
    );
};

export default Language;