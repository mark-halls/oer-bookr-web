import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";

import axiosAuth from "../../utils/auth";

const StyledDeleteButton = styled.button`
  background-color: #ff9999;
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
      <ReactModal
        isOpen={showModalConfirm}
        contentLabel="Delete Book"
        onRequestClose={closeModalConfirm}
      >
        <p>Are you sure you want to delete this book?</p>
        <button onClick={closeModalConfirm}>Cancel</button>
        <button onClick={sendDeleteToApi}>Delete</button>
      </ReactModal>

      <ReactModal
        isOpen={showModalDeleted}
        contentLabel="Delete Book"
        onRequestClose={closeModalDeleted}
      >
        <p>Book deleted.</p>
        <button onClick={closeModalDeleted}>Close</button>
      </ReactModal>
    </div>
  );
};

export default DeleteBook;
