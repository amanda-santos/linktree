import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Avatar, Anchor } from "../components";
import {
  Container,
  FooterInformation,
  LinksContainer,
  SocialLinksContainer,
} from "../styles/pages/home";

export default function Home() {
  const { white } = useTheme();

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

      <SocialLinksContainer>
        <a href="#">
          <FaGithub size={32} color={white} />
        </a>
        <a href="#">
          <FaInstagram size={32} color={white} />
        </a>
        <a href="#">
          <FaYoutube size={32} color={white} />
        </a>
        <a href="#">
          <FaLinkedin size={32} color={white} />
        </a>
      </SocialLinksContainer>

      <FooterInformation>
        Made with 💜 by{" "}
        <a href="https://github.com/amanda-santos">Amanda Santos</a>
      </FooterInformation>
    </Container>
  );
}
