import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  width: 100%;
  margin-top: 6.4rem;

  a:hover {
    filter: brightness(0.8);
  }
`;
