import React from 'react';
import styled from '@emotion/styled';

// functionality is different
// text is different
// data-testid

const StyledButton = styled('button')`
  background: #393534;
  width: 200px;
  height: 50px;
  color: #e4e4e4;
  border: 0;
  font-weight: condensed;
  font-size: 24px;
`;

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  datatestid?: string;
}

const Button = ({ onClick, text, datatestid }: ButtonProps) => {
  return (
    <>
      <StyledButton onClick={onClick} type='button' data-testid={datatestid}>
        {text}
      </StyledButton>
    </>
  );
};

export default Button;