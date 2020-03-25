import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import Button from '~/components/Button';

import logo from '~/assets/logo.svg';

import { Container, Content, Form, TextArea } from './styles';

export default function NewIncident() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Heroes" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/" id="back">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <Form>
          <Input id="title" name="title" placeholder="Título do caso" />
          <TextArea
            id="description"
            name="description"
            placeholder="Descrição"
          />
          <Input id="value" name="value" placeholder="Valor em reais" />
          <Button type="submit" onSubmit={handleSubmit}>
            {loading ? <Loading /> : 'Cadastrar'}
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
