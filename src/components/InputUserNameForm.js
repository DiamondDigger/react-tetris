import React, { useState } from "react";
import {
  StyledInputUserForm,
  LabelWrapper,
  StyledLabel,
} from "./styles/StyledInputUserForm";

const InputUserNameForm = ({ saveUsername }) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    saveUsername(userName);
    setUserName("");
  };

  const handleChange = (e) => {
    console.log(`onChange event: ${e.target.value}`);
    setUserName(e.target.value);
  };

  return (
    <StyledInputUserForm onSubmit={handleSubmit}>
      <LabelWrapper>
        <StyledLabel htmlFor="username">
          Please, type your name, champion!
        </StyledLabel>
      </LabelWrapper>
      <input
        type="text"
        id="username"
        onChange={handleChange}
        value={userName}
      />
      <button type="submit">Save</button>
    </StyledInputUserForm>
  );
};

export default InputUserNameForm;
