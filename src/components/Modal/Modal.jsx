import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import ModalForm from "components/ModalForm/ModalForm";

const Modal = ({ onSubmitToRefresh, onClickCloseModal }) => {
  return (
    <Overlay onClick={onClickCloseModal}>
      <ModalStyled>
        <StyledCloseBtn onClick={onClickCloseModal}>
          <CloseIcon />
        </StyledCloseBtn>

        <StyledTitle>
          Here you can specify your purchase that you would like to add to the
          general information.
        </StyledTitle>
        <ModalForm onSubmitToRefresh={onSubmitToRefresh} />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  onClickCloseModal: PropTypes.func,
  onSubmitToRefresh: PropTypes.func,
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background: url(https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78790/shopping-cart-clipart-xl.png)
      no-repeat right,
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(224, 215, 215, 1) 50%,
      rgba(139, 144, 161, 1) 100%
    );
  background-size: 50%;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 20px;
  position: relative;
`;

const StyledTitle = styled.h3`
  margin-top: 45px;
`;

const StyledCloseBtn = styled(Button)`
  position: absolute !important;
  top: 15px;
  right: 15px;
`;

export default Modal;
