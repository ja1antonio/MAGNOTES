import { Container, Links, Content } from './styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/button';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetcNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetcNote();
  }, []);
  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" />
          </Content>
        </main>
      )}
    </Container>
  );
}
