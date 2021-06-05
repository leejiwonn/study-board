import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  console.log("main page");

  return (
    <MainStyled>
      <ListTitle>
        <ListTitle.Text>글 목록</ListTitle.Text>
        <Link to="/edit">글쓰기</Link>
      </ListTitle>
      <ListView>
        <ListItem>
          <ListItem.Title>제목</ListItem.Title>
          <ListItem.Info>내용</ListItem.Info>
        </ListItem>
      </ListView>
    </MainStyled>
  );
};

export default MainPage;

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

export const ListView = styled.div`
  width: 80%;
  height: 500px;
  margin-bottom: 20px;
  box-sizing: content-box;
  background-color: #fff;
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 15px 20px;
  box-sizing: border-box;
`;

ListItem.Title = styled.div`
  width: 20%;
  font-size: 20px;
  font-weight: bold;
`;

ListItem.Info = styled.div`
  width: 80%;
  font-size: 14px;
`;

export const ListTitle = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  a {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 16px;
    color: #000;
  }
`;

ListTitle.Text = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
