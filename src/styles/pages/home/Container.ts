import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  padding: 2.4rem;

  background: url(${({ theme }) => theme.images["bg-mobile"]}) no-repeat top
    center/cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 1.6rem;
  }

  @media (min-width: 700px) {
    background-image: url(${({ theme }) => theme.images["bg-desktop"]});
  }
`;
