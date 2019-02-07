import styled from '@emotion/styled';
import { Container, Button } from '../../components/index';
import { TextField } from '@material-ui/core';
import { ComponentClass } from 'react';

const pxToRem = (px: number) => px / 16;
const cardHeight = pxToRem(84);
const cardWidth = pxToRem(120);

export const BackButton = styled(Button)`
  width: ${pxToRem(156)}rem;
  height: ${pxToRem(48)}rem;
  font-size: ${pxToRem(20)}rem;
  border: 0.25px solid black;
  @media only screen and (max-width: 900px) {
  }
`;

export const PropertyButtons = styled('div')``;

export const WhiteButton = styled(Button)`
  color: var(--colour-button-text-alt);
  background-color: var(--colour-button-background-alt);
  border: solid #707070 1px;
  width: ${pxToRem(161)}rem;
  height: ${pxToRem(36)}rem;
  font-size: ${pxToRem(16)}rem;
`;

export const PropertyContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  padding: 15px;
`;

export const Top = styled(PropertyContainer)`
  margin: 0 ${pxToRem(22)}rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  /* Text */
  text-align: left;
  @media only screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const HouseInfo = styled('div')``;

export const ThumbNail = styled('img')`
  width: ${cardWidth}rem;
  height: ${cardHeight}rem;
  object-fit: cover;
  @media only screen and (max-width: 900px) {
    margin: 0 auto;
    padding: 10px;
  }
`;
export const MainText = styled.div`
  width: 100%;
  font-family: 'Roboto Bold', Arial, sans-serif;
  font-size: ${pxToRem(36)}rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const SecondaryText = styled.div`
  font-family: 'Roboto Bold', Arial, sans-serif;
  font-size: ${pxToRem(24)}rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }
`;

export const Header = styled('div')`
  width: 100%;
  padding: ${pxToRem(16)}rem ${pxToRem(28)}rem;
  height: ${pxToRem(60)}rem;
  background: var(--colour-accent);
  text-align: left;
  color: white;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: ${pxToRem(24)}rem;
`;

export const ListContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ListDiv = styled('div')`
  width: 45%;
  min-width: ${pxToRem(254)}rem;
  border: solid #707070 1px;
  margin: ${pxToRem(36)}rem 0;
`;

export const ItemDiv = styled('div')`
  padding: ${pxToRem(29)}rem ${pxToRem(23)}rem;
  margin: ${pxToRem(24)}rem ${pxToRem(28)}rem;
  display: flex;
  flex-direction: column;
  background-color: var(--colour-button-background-alt);
`;

export const TaskDiv = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    margin: ${pxToRem(8)}rem 0;
    font-size: ${pxToRem(20)}rem;
    font-family: 'Roboto Light', Arial, sans-serif;
  }
`;

// after List

export const AfterListDiv = styled(ListDiv)`
  display: flex;
  flex-flow: row wrap;
  align-items: top;
  width: 100%;
  margin: ${pxToRem(36)}rem 0;
`;

export const AfterListDiv2 = styled(ListDiv)`
  margin: ${pxToRem(36)}rem ${pxToRem(28)}rem;
  width: ${pxToRem(254)}rem;
`;

export const AfterHeader = styled(Header)`
  font-size: ${pxToRem(20)}rem;
  background: var(--colour-main-background);
  color: var(--colour-button-text-alt);
  border: solid #707070 1px;
`;

export const AfterItemDiv = styled(ItemDiv)`
  padding: ${pxToRem(24)}rem ${pxToRem(28)}rem;
  margin: 0;
`;

export const ButtonGroup = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .delete button {
    border-radius: var(--border-radius);
    background-color: var(--color-error);
  }
`;

export const DialogButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
`;

export const DialogStay = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled(Button)`
  background-color: inherit;
  width: auto;
  height: auto;
  margin: 0.5rem;
  .fa-check {
    color: var(--color-text-accent);
  }
  .fa-times {
    color: var(--color-border-strong);
  }
`;

export const StyledTextField = styled(TextField as ComponentClass<any>)`
  margin-left: 1rem;
  font-size: 1.125rem;
  padding: 0.6875rem 0;
`;
