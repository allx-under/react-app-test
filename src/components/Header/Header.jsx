import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <StyledHeadText>Name</StyledHeadText>
      <StyledHeadText>Product</StyledHeadText>
      <StyledHeadText>Quantity(pcs)</StyledHeadText>
      <StyledHeadText>Price($)</StyledHeadText>
      <StyledHeadText>Market</StyledHeadText>
    </Wrapper>
  );
};

const StyledHeadText = styled.p`
  width: 20%;
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  color: black;
`;

const Wrapper = styled.header`
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Header;
