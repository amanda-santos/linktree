import Image from "next/image";
import styled from "styled-components";

export const AvatarImg = styled(Image)`
  width: 11.2rem;
  height: 11.2rem;

  border-radius: 100%;
  border: 0.1rem solid ${({ theme }) => theme["white"]};
`;
