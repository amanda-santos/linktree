import styled from "styled-components";

export const Anchor = styled.a`
  height: 5.6rem;
  width: 100%;

  padding: 1.6rem 2.4rem;

  color: ${({ theme }) => theme["white"]};
  background: ${({ theme }) => theme["surface"]};
  border: 1px solid ${({ theme }) => theme["white"]};
  border-radius: 8px;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  text-align: center;
  text-decoration: none;
`;
