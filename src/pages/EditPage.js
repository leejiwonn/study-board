import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { nanoid } from 'nanoid';
import { listStore } from "../store/state";
import Editor from "../components/Editor/Editor";
import "../css/ckContent.css";

const EditPage = () => {
  const [list, setList] = useRecoilState(listStore);
  const [editContent, setEditContent] = useState({
    id: nanoid(),
    user: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    console.log(list);
  }, [list]);

  const getEditValue = (e) => {
    const { name, value } = e.target;
    setEditContent({
      ...editContent,
      [name]: value,
    });
  };

  const submitButtonClick = () => {
    setList((defaultList) => {
      return [...defaultList, editContent];
    });
    alert("등록 완료!");
    window.location.href = "/";
  };

  return (
    <BoardStyled>
      <BoardStyled.Box>
        <Board>
          <Board.Top>
            <Board.Item>
              <Board.Title>제목</Board.Title>
              <Board.Input
                type="text"
                placeholder="제목을 입력해주세요."
                name="title"
                onChange={getEditValue}
              />
            </Board.Item>
            <Board.Item>
              <Board.Title>작성자</Board.Title>
              <Board.Input
                type="text"
                placeholder="이름을 입력해주세요."
                name="user"
                onChange={getEditValue}
              />
            </Board.Item>
          </Board.Top>
          <Editor
            data={editContent.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setEditContent({
                ...editContent,
                content: data,
              });
            }}
          />
          <Board.SubmitButton onClick={submitButtonClick}>
            완료
          </Board.SubmitButton>
        </Board>
      </BoardStyled.Box>
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
  background-color: #f9f9f9;
`;

BoardStyled.Box = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
`;

export const Board = styled.div`
  width: 92%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 40px;
  box-sizing: border-box;

  .ck-toolbar {
    width: 100%;
    border: none;
    border-top: 1px solid #f2f2f2;
    background-color: #fff;
  }
  .ck-editor__editable {
    width: 100%;
    height: 50vh;
    min-height: 200px;
    border: none !important;
    outline: none;
    border-top: 1px solid #f2f2f2 !important;
    border-bottom: 1px solid #f2f2f2 !important;

    :focus {
      box-shadow: none !important;
    }
  }
`;

Board.Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

Board.Item = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

Board.Title = styled.p`
  font-size: 12px;
  color: #252831;
`;

Board.Input = styled.input`
  width: 100%;
  height: 20px;
  padding: 10px 0;
  padding-left: 5px;
  border: none;
  border-bottom: 1px solid #f2f2f2;

  ::placeholder {
    color: #f2f2f2;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #27babb;
  }
`;

Board.SubmitButton = styled.button`
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
  margin-top: 20px;

  :hover {
    background-color: #27babb;
    color: #fff;
  }
`;
