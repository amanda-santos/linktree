import { Avatar, Anchor } from "../components";
import { Container, LinksContainer } from "../styles/pages/home";

export default function Home() {
  return (
    <Container>
      <Avatar
        src="https://github.com/amanda-santos.png"
        alt="Amanda Santos"
        width={112}
        height={112}
      />

      <span>@amanda-santos</span>

      <LinksContainer>
        <Anchor href="https://github.com/amanda-santos" target="_blank">
          Access my portfolio
        </Anchor>

        <Anchor href="https://github.com/amanda-santos" target="_blank">
          Download my ebook
        </Anchor>

        <Anchor href="https://github.com/amanda-santos" target="_blank">
          Watch my latest video
        </Anchor>

        <Anchor href="https://github.com/amanda-santos" target="_blank">
          See my setup
        </Anchor>
      </LinksContainer>
    </Container>
  );
}
