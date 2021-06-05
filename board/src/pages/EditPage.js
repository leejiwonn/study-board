import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { listStore } from "../store/state";

const EditPage = () => {
  const [list, setList] = useRecoilState(listStore);
  const [editContent, setEditContent] = useState({
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
    setList((list) => {
      return [...list, editContent];
    });
  };

  return (
    <BoardStyled>
      <Board>
        <Board.Title
          type="text"
          placeholder="제목"
          name="title"
          onChange={getEditValue}
        />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setEditContent({
              ...editContent,
              content: data,
            });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <Board.SubmitButton onClick={submitButtonClick}>
          완료
        </Board.SubmitButton>
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
  width: 95%;
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
  cursor: pointer;
`;
