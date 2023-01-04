import { AnchorHTMLAttributes } from "react";

import { Anchor as StyledAnchor } from "./styles";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = (props: AnchorProps) => {
  return <StyledAnchor {...props} />;
};
