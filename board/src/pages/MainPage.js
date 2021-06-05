import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import { listStore } from "../store/state";

const MainPage = () => {
  const list = useRecoilValue(listStore);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <MainStyled>
      <ListTitle>
        <ListTitle.Text>글 목록</ListTitle.Text>
        <Link to="/edit">글쓰기</Link>
      </ListTitle>
      <ListView>
        {list.length === 0 ? (
          <p>목록이 없습니다.</p>
        ) : (
          list.map((v, i) => (
            <ListItem key={i}>
              <ListItem.Title>{v.title}</ListItem.Title>
              <ListItem.Info>{ReactHtmlParser(v.content)}</ListItem.Info>
            </ListItem>
          ))
        )}
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  margin-bottom: 20px;
  box-sizing: content-box;
  background-color: #fff;

  p {
    color: lightgray;
    font-size: 14px;
  }
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
