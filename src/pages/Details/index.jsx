import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/button';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus
            vitae aut perferendis neque optio rerum non perspiciatis beatae est
            eaque, quod laborum nemo labore nulla, illo consequuntur earum sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repellat voluptates sequi magni enim quibusdam ipsum repudiandae
            accusantium, vero velit fugiat laudantium autem corporis accusamus
            error! Aliquam nostrum voluptate laborum?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.instagram.com/ja1_antonio/</a>
              </li>
              <li>
                <a href="#">https://www.instagram.com/ja1_antonio/</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node.js"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
