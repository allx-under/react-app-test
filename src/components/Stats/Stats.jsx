import styled from "styled-components";

const Stats = ({ amount }) => {
  return (
    <StyledTitle>
      The total amount of this family's expenses is {amount} USD
    </StyledTitle>
  );
};

export default Stats;

const StyledTitle = styled.h3`
  position: fixed !important;
  bottom: 20px;
  left: 20px;
  border: 1px solid white;
  padding: 10px;
  color: white;
  background-color: grey;
`;
