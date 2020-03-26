import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { FiPower } from 'react-icons/fi';

import Button from '~/components/Button';
import IncidentCard from '~/components/IncidentCard';
import logo from '~/assets/logo.svg';
import logoDark from '~/assets/logo-dark.svg';
import Context from '~/styles/themes/context';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Header, IncidentsList } from './styles';

export default function Profile() {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(Context);
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  const { profile } = useSelector(state => state.ong);
  const dispatch = useDispatch();

  const loadIncidents = async () => {
    try {
      const { data } = await api.get('profile');
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
    confirmAlert({
      title: 'Confirme a exclusão',
      message: `Deseja remover o caso ${id} ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
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
          },
        },
        {
          label: 'No',
          onClick: () => '',
        },
      ],
    });
  };

  return (
    <Container>
      <Header>
        <img src={title === 'light' ? logo : logoDark} alt="Heroes" />
        <span>Bem vinda, {profile.name}</span>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          height={15}
          width={40}
          handleDiameter={20}
          onColor={colors.primary}
          offColor={shade(0.3, colors.primary)}
          onHandleColor="#fff"
          offHandleColor="#333"
        />
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
