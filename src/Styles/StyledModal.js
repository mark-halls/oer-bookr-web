import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
  position: relative;
  overflow: auto;
  outline: none;
  margin: auto;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  width: 80vw;
  background-color: #fcddbc;
  padding: 1em;
`;

const CustomStyles = {
  overlay: {
    display: "flex",
    "align-items": "center"
  }
};

export { StyledModal, CustomStyles };
