import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/button';

import { Container, Form, Background } from './styles';

export function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form action="">
        <h1>MAGNotes</h1>
        <p>Aplicação para salvar e gerenciar seus Links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={'Entrar'} onClick={handleSignIn}></Button>

        <Link to="/register"> Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
