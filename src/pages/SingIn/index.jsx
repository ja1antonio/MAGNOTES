import { useAuth } from '../../hooks/auth';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SingIn() {
  const data = useAuth();
  console.log('Meu contexto =>', data);

  return (
    <Container>
      <Form action="">
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus Links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title={'Entrar'}></Button>

        <Link to="/register"> Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
