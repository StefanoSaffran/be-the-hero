import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { FiPower } from 'react-icons/fi';

import Button from '~/components/Button';
import IncidentCard from '~/components/IncidentCard';
import logo from '~/assets/logo.svg';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Header, IncidentsList } from './styles';

export default function Profile() {
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  const { profile } = useSelector(state => state.ong);
  const dispatch = useDispatch();

  const loadIncidents = async () => {
    try {
      const { data } = await api.get('profile');
      console.log(data);
      setIncidents(data);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Erro de comunicação com o servidor'
      );
    }
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  const handleDelete = async id => {
    try {
      await api.delete(`incidents/${id}`);
      toast.success('Caso removido com sucesso');
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Erro de comunicação com o servidor'
      );
    }
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="Heroes" />
        <span>Bem vinda, {profile.name}</span>
        <Button
          id="newIncident"
          type="button"
          onClick={() => history.push('/incidents/new')}
        >
          Cadastrar novo caso
        </Button>
        <button id="logout" type="button" onClick={() => dispatch(signOut())}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>
      <h1 id="incidentsListTitle">Casos cadastrados</h1>
      <IncidentsList>
        {incidents.map(incident => (
          <IncidentCard
            key={incident.id}
            incident={incident}
            handleDelete={handleDelete}
          />
        ))}
      </IncidentsList>
    </Container>
  );
}
