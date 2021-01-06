import React from "react";
import {
  UpArrowCircle,
  DownArrowCircle,
  LeftArrowCircle,
  RightArrowCircle,
} from "@styled-icons/boxicons-regular";

import {
  ButtonsWrapper,
  Up,
  Down,
  Left,
  Right,
} from "./styles/StyledControllButtons";

const ControlButtons = ({ width }) => {
  return (
    <ButtonsWrapper>
      <Up>
        <UpArrowCircle />
        up
      </Up>
      <Down>
        <DownArrowCircle />
        down
      </Down>
      <Left>
        <LeftArrowCircle />
        left
      </Left>
      <Right>
        <RightArrowCircle />
        right
      </Right>
    </ButtonsWrapper>
  );
};

export default ControlButtons;
