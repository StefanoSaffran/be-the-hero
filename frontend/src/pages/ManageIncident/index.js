import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';

import Loading from '~/components/Loading';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';

import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';

import api from '~/services/api';

import { Container, Content, Unform } from './styles';

export default function ManageIncident() {
  const formRef = useRef(null);
  const { title: themeTitle } = useContext(ThemeContext);
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const loadIncident = async () => {
    const { data } = await api.get(`/incidents/${id}`);

    formRef.current.setData(data);
  };

  const handleSubmit = async data => {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('O título é obrigatório.'),
        description: Yup.string().required('A descrição é obrigatória.'),
        value: Yup.number()
          .typeError('Valor inválido')
          .positive('Digite um valor positivo')
          .required('O valor é obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);
      const { title, description, value } = data;

      if (id) {
        await api.put(`/incidents/${id}`, { title, description, value });
        toast.success('Caso atualizado com sucesso');
        history.push('/profile');
        return;
      }

      await api.post('/incidents', { title, description, value });
      toast.success('Caso adicionado com sucesso');
      history.push('/profile');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      if (err.response) {
        toast.error(
          (err.response && err.response.data.error) ||
            'Erro de comunicação com o servidor'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadIncident();
    }
  }, [id]); //eslint-disable-line

  return (
    <Container>
      <Content>
        <section>
          <img src={themeTitle === 'light' ? logo : logoDark} alt="Heroes" />
          <h1>{id ? 'Editar caso' : 'Cadastrar novo caso'}</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/" id="back">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <Unform onSubmit={handleSubmit} ref={formRef}>
          <Input id="title" name="title" placeholder="Título do caso" />
          <TextArea
            id="description"
            name="description"
            placeholder="Descrição"
          />
          <Input id="value" name="value" placeholder="Valor em reais" />
          <Button type="submit">{loading ? <Loading /> : 'Cadastrar'}</Button>
        </Unform>
      </Content>
    </Container>
  );
}
