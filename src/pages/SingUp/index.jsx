import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form action="">
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus Links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input planceholder="Nome" type="text" icon={FiUser} />
        <Input planceholder="E-mail" type="text" icon={FiMail} />
        <Input planceholder="Senha" type="password" icon={FiLock} />

        <Button title={'Cadastrar'}></Button>

        <Link to="/"> Voltar para o login</Link>
      </Form>
    </Container>
  );
}
