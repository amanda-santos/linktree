import styled from "styled-components";

export const FooterInformation = styled.span`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-underline-offset: 0.5rem;
  }
`;
