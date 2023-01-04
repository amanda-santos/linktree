import { ImageProps } from "next/image";

import { AvatarImg } from "./styles";

type AvatarProps = ImageProps;

export const Avatar = (props: AvatarProps) => {
  return <AvatarImg {...props} />;
};
