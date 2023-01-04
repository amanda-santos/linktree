import { Avatar } from "../components";
import { Container } from "../styles/pages/home";

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
    </Container>
  );
}
