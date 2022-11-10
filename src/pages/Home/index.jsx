import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Button } from '../../components/button';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText isActive title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: 'React',
              tags: [
                {
                  id: 1,
                  name: 'react',
                },
                { id: 2, name: 'rocketseat' },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
