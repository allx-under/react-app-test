import PropTypes from "prop-types";

import { Triangle } from "react-loader-spinner";
import styled from "styled-components";
import { Button } from "@mui/material";

const StartInfo = ({ onClick }) => {
  return (
    <Wrapper>
      <StyledText>
        In this application, you can keep track of your spending (specify what
        you purchased) and further analyze your spending. Click on the "Start"
        button to start working with the application.
      </StyledText>
      <Triangle
        visible={true}
        height="500"
        width="500"
        ariaLabel="dna-loading"
      />
      <StyledStartBtn onClick={onClick} variant="contained" color="success">
        Start
      </StyledStartBtn>
    </Wrapper>
  );
};

export default StartInfo;

StartInfo.propTypes = {
  onClick: PropTypes.func,
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledStartBtn = styled(Button)`
  position: absolute !important;
  top: 200px;
  left: 200px;
`;

const StyledText = styled.p`
  position: absolute !important;
  width: 400px;
  color: white;
  top: 50px;
  left: 50px;
  border: 1px solid white;
  padding: 5px;
  border-radius: 5px;
`;
