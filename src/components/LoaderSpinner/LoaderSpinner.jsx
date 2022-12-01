import styled from "styled-components";
import { Bars } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <SpinnerWrapper>
      <Bars
        height="80"
        width="80"
        color="blue"
        ariaLabel="bars-loading"
        visible={true}
      />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://img.freepik.com/premium-photo/empty-wood-table-top-with-blur-clothing-boutique-display-interior-shopping-mall-background_293060-20462.jpg?w=2000);
  background-size: cover;
  background-repeat: no-repeat;
`;
export default LoaderSpinner;
