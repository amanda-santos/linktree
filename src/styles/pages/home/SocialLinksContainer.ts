import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  width: 100%;
  margin: 6.4rem 0 4rem 0;

  a {
    transition: background 0.2s;
    border-radius: 50%;
    padding: 1.2rem;

    display: flex;
    align-items: center;

    &:hover {
      background: ${({ theme }) => theme.colors.highlight};
    }
  }
`;
