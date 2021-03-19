import React from "react";

const ShowUserInfo = ({ listOfUsers }) => {
  const compareFunction = (user1, user2) => {
    return user1.score - user2.score;
  };

  if (listOfUsers) {
    return listOfUsers
      .sort(compareFunction)
      .reverse()
      .map(({ name, score }) => {
        return (
          <tr key={name}>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        );
      });
  }
  return null;
};

export default ShowUserInfo;
