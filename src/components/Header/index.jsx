import { RiShutDownLine } from 'react-icons/ri';
import { api } from '../../services/api';
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Container, Profile, Logout } from './styles';

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation('/');
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
