import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { listStore } from "../store/state";

const DetailPage = props => {
    const currentParams = useParams();
    const currentId = currentParams.id;
    const list = useRecoilValue(listStore);

    return (
        <DetailStyled>
					<DetailStyled.Box>
            {list.map((v, i) => (
                v.id === currentId && (
                    <DetailView key={i}>
                        <DetailView.Title>
                          <span>{v.title}</span>
                          <span className="user-name">작성자 : {v.user}</span>
                        </DetailView.Title>
                        <DetailView.Info>{parse(`${v.content}`)}</DetailView.Info>
                    </DetailView>
                )
            ))}
					</DetailStyled.Box>
        </DetailStyled>
    );
};

export default DetailPage;

export const DetailStyled = styled.div`
	width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

DetailStyled.Box = styled.div`
	width: 85%;
	height: 85%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
	border-radius: 20px;
`;

export const DetailView = styled.div`
	width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

DetailView.Title = styled.p`
	width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 0 5px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f2f2f2;
	box-sizing: border-box;
	font-size: 20px;
	font-weight: bold;
  color: #252831;

  .user-name{
    font-size: 12px;
    font-weight: normal;
  }
`;

DetailView.Info = styled.div`
	width: 100%;
	height: calc(100% - 40px);
	margin-top: 30px;
	padding-left: 5px;
`;
