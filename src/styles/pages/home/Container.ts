import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  background-image: url("/assets/background-mobile-dark.png");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 0.8rem;
  }
`;
