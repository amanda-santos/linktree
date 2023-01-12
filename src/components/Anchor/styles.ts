import styled from "styled-components";

export const Anchor = styled.a`
  height: 5.6rem;
  width: 100%;

  padding: 1.6rem 2.4rem;

  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  text-align: center;
  text-decoration: none;
  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors["surface-hover"]};
    border: 1.5px solid ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 700px) {
    width: 48rem;
  }
`;
