import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import axios from "axios";

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
  }, []);

  const sendDeleteToApi = useCallback(() => {
    axios
      .delete(
        `https://samirlilienfeld-oer-bookr.herokuapp.com/data/books/${id}`
      )
      .then(() => {
        closeModalConfirm();
        openModalDeleted();
      })
      .catch(err => console.error(err));
  }, []);

  if (!loggedIn) return <div></div>;

  return (
    <div>
      <button onClick={openModalConfirm}>Delete Book</button>
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
