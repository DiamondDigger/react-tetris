import React, { useState } from "react";
import InputUserNameForm from "./InputUserNameForm";
import ShowUserInfo from "./ShowUserInfo";
import {
  StyledLeaderBoard,
  StyledTable,
  StyledCaption,
} from "./styles/StyledLeaderBoard";

const initialState = [
  { name: "John", score: 100 },
  { name: "Jack", score: 200 },
  { name: "Fill", score: 240 },
  { name: "Kelly", score: 40 },
  { name: "Bill", score: 1300 },
];

const LeaderBoard = ({ showLeaderBoard, score }) => {
  const [listOfUsers, setListOfUsers] = useState(initialState);

  const addNewUserRecord = (name) => {
    const user = { name, score };
    console.log(user);
    const existingUser = listOfUsers.filter((record) => record.name === name);
    if (existingUser.length) {
      setListOfUsers((prev) =>
        prev.map((record) =>
          record.name === name && record.score < score
            ? { ...record, score }
            : record
        )
      );
    } else {
      setListOfUsers((prev) => [...prev, { ...user }]);
    }
  };

  if (!showLeaderBoard) {
    return null;
  }

  return (
    <StyledLeaderBoard>
      <InputUserNameForm saveUsername={addNewUserRecord} />
      <StyledTable>
        <StyledCaption> Hall of Fame</StyledCaption>
        <thead>
          <tr>
            <th>Username</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          <ShowUserInfo listOfUsers={listOfUsers} />
        </tbody>
      </StyledTable>
    </StyledLeaderBoard>
  );
};

export default LeaderBoard;
