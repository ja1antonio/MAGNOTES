import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/ja1antonio.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>João Antonio</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
