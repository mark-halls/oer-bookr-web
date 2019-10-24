import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import axiosAuth from "../../utils/auth";
import { StyledModal, CustomStyles } from "../../Styles/StyledModal";

const StyledDeleteButton = styled.button`
  background-color: #ff9999;
`;

const StyledCancelButton = styled.button`
  margin-right: 1em;
`;

const DeleteBook = props => {
  const { id } = useParams();
  const loggedIn = localStorage.getItem("token");

  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalDeleted, setShowModalDeleted] = useState(false);

  const openModalConfirm = useCallback(() => setShowModalConfirm(true), []);
  const closeModalConfirm = useCallback(() => setShowModalConfirm(false), []);

  const openModalDeleted = useCallback(() => setShowModalDeleted(true), []);
  const closeModalDeleted = useCallback(() => {
    setShowModalDeleted(false);
    props.history.push("/");
  }, [props.history]);

  const sendDeleteToApi = useCallback(() => {
    axiosAuth()
      .delete(`/data/books/${id}`)
      .then(() => {
        closeModalConfirm();
        openModalDeleted();
      })
      .catch(err => {
        console.error(err);
        props.history.push("/login");
      });
  }, [closeModalConfirm, openModalDeleted, id, props.history]);

  if (!loggedIn) return <div></div>;

  return (
    <div>
      <StyledDeleteButton onClick={openModalConfirm}>
        Delete Book
      </StyledDeleteButton>
      <StyledModal
        isOpen={showModalConfirm}
        contentLabel="Delete Book"
        onRequestClose={closeModalConfirm}
        style={CustomStyles}
      >
        <p>Are you sure you want to delete this book?</p>
        <StyledCancelButton onClick={closeModalConfirm}>
          Cancel
        </StyledCancelButton>
        <StyledDeleteButton onClick={sendDeleteToApi}>
          Delete
        </StyledDeleteButton>
      </StyledModal>

      <StyledModal
        isOpen={showModalDeleted}
        contentLabel="Delete Book"
        onRequestClose={closeModalDeleted}
        style={CustomStyles}
      >
        <p>Book deleted.</p>
        <button onClick={closeModalDeleted}>Close</button>
      </StyledModal>
    </div>
  );
};

export default DeleteBook;
