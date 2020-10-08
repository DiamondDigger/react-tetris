import React from "react";

import {StyledStartButton} from "./styles/StyledStartButton";

function StartButton({callback, value}) {
    return (
        <StyledStartButton onClick={callback} value={value}>{value}</StyledStartButton>
    )
}

export default StartButton