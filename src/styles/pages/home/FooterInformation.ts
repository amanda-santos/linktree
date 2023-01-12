import styled from "styled-components";

export const FooterInformation = styled.span`
  font-size: 1.4rem;
  a {
    color: ${({ theme }) => theme.colors.text};
    text-underline-offset: 0.5rem;
  }
`;
