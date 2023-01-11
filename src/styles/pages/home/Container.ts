import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  padding: 2.4rem;

  background-image: url(${({ theme }) => theme.images["bg-mobile"]});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 0.8rem;
  }

  /* media queries */
  @media (min-width: 700px) {
    background-image: url(${({ theme }) => theme.images["bg-desktop"]});
  }
`;
