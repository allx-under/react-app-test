import PropTypes from "prop-types";

import styled from "styled-components";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CreateItemBtn = ({ onClick }) => {
  return (
    <StyledBtn variant="contained" onClick={onClick}>
      <AddShoppingCartIcon />
      Create new cart
    </StyledBtn>
  );
};

export default CreateItemBtn;

CreateItemBtn.propTypes = {
  onClick: PropTypes.func,
};
const StyledBtn = styled(Button)`
  position: fixed !important;
  bottom: 30px;
  right: 30px;
`;
