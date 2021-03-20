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

const ControlButtons = ({
  width,
  movePlayer,
  dropPlayer,
  rotatePlayer,
  stage,
}) => {
  const handlePressRight = () => {
    movePlayer(1);
  };
  const handlePressLeft = () => {
    movePlayer(-1);
  };

  const handlePressDown = () => {
    dropPlayer();
  };
  const handlePressUp = () => {
    rotatePlayer(stage, 1);
  };

  return (
    <ButtonsWrapper>
      <Up>
        <UpArrowCircle onClick={handlePressUp} />
        up
      </Up>
      <Down>
        <DownArrowCircle onClick={handlePressDown} />
        down
      </Down>
      <Left>
        <LeftArrowCircle onClick={handlePressLeft} />
        left
      </Left>
      <Right>
        <RightArrowCircle onClick={handlePressRight} />
        right
      </Right>
    </ButtonsWrapper>
  );
};

export default ControlButtons;
