import React, { useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { listStore } from "../store/state";

const MainPage = () => {
  const history = useHistory();
  const list = useRecoilValue(listStore);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleListLinkClick = useCallback(
    id => {
      history.push(`/detail/${id}`);
    },
    [history],
  );

  return (
    <MainStyled>
      <MainStyled.Box>
        <ListTitle>
          <ListTitle.Text>
            글 목록
            <span>총 {list.length}건</span>
          </ListTitle.Text>
          <Link to="/edit">글쓰기</Link>
        </ListTitle>
        <ListView>
          {list.length === 0 ? (
            <ListView.None>목록이 없습니다.</ListView.None>
          ) : (
            list.map((v, i) => (
              <ListItem key={i} onClick={() => handleListLinkClick(v.id)}>
                <ListItem.Title>
                  <span>{v.title}</span>
                  <span className="user-name">{v.user}</span>
                </ListItem.Title>
              </ListItem>
            ))
          )}
        </ListView>
      </MainStyled.Box>
    </MainStyled>
  );
};

export default MainPage;

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

MainStyled.Box = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
`;

export const ListView = styled.div`
  width: 92%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  margin-bottom: 20px;
  box-sizing: content-box;
  background-color: #fff;
`;

ListView.None = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  font-size: 14px;
`;

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

ListItem.Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 1px;
  color: #252831;

  .user-name {
    font-size: 14px;
  }
  :hover {
    color: #27babb;
  }
`;

export const ListTitle = styled.div`
  width: 92%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f2f2f2;

  a {
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 14px;
    color: #27babb;
    border: 1px solid #27babb;
    border-radius: 10px;
    transition: .2s;
    cursor: pointer;

    :hover {
      background-color: #27babb;
      color: #fff;
    }
  }
`;

ListTitle.Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #252831;

  span {
    color: #27babb;
    margin-left: 14px;
    font-weight: normal;
    font-size: 14px;
  }
`;
