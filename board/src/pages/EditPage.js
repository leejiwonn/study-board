import React from "react";
import styled from "styled-components";

const EditPage = () => {
  console.log("edit page");

  return (
    <BoardStyled>
      <Board>
        <Board.Title type="text" placeholder="제목" />
        <Board.Info placeholder="내용"></Board.Info>
        <Board.SubmitButton>완료</Board.SubmitButton>
      </Board>
    </BoardStyled>
  );
};

export default EditPage;

export const BoardStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

Board.Title = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;

Board.Info = styled.textarea`
  width: 100%;
  height: 80%;
  min-height: 300px;
`;

Board.SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  font-size: 16px;
`;
