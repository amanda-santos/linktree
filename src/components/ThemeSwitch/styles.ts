import styled, { css } from "styled-components";

type SwitchProps = {
  $isDarkTheme?: boolean;
};

export const Switch = styled.div<SwitchProps>`
  position: relative;
  width: 64px;

  margin: 4rem auto 6.4rem auto;

  button {
    width: 32px;
    height: 32px;
    background: white url(${({ theme }) => theme.images.switch}) no-repeat
      center;
    border: 0;
    border-radius: 50%;

    position: absolute;
    top: 70%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);

    animation: ${({ $isDarkTheme = false }) =>
      $isDarkTheme ? "slide-back 0.2s" : "slide-in 0.2s forwards"};

    &:hover {
      outline: 8px solid ${({ theme }) => theme.colors.highlight};
      cursor: pointer;
    }
  }

  span {
    display: block;
    width: 64px;
    height: 24px;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.stroke};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 9999px;
  }

  @keyframes slide-in {
    from {
      left: 0;
    }
    to {
      left: 50%;
    }
  }

  @keyframes slide-back {
    from {
      left: 50%;
    }
    to {
      left: 0;
    }
  }
`;
