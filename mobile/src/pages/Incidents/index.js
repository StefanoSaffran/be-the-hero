import React, { useState, useEffect } from 'react';

import { showMessage } from 'react-native-flash-message';

import api from '~/services/api';

import logo from '~/assets/logo.png';
import IncidentCard from '~/components/IncidentCard';

import {
  Container,
  Header,
  Image,
  TotalIncidents,
  Strong,
  Welcome,
  Description,
  IncidentList,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadIncidents = async () => {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === Number(total)) {
      return;
    }

    setLoading(true);
    try {
      const { data, headers } = await api.get('incidents', {
        params: { page },
      });

      console.tron.log(data);

      setIncidents([...incidents, ...data]);
      setTotal(headers['x-total-count']);
      setPage(page + 1);
      setLoading(false);
    } catch (err) {
      showMessage({
        message: 'Falha ao buscar encomendas',
        description: err.response
          ? err.response.data.error
          : 'Erro de conexão com o servidor',
        type: 'info',
      });
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIncidents();
  }, [page]); // eslint-disable-line

  const refreshList = () => {
    setRefreshing(true);
    setIncidents([]);

    setPage(1);
  };

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <TotalIncidents>
          Total de <Strong>{total} casos</Strong>
        </TotalIncidents>
      </Header>

      <Welcome>Bem-vindo</Welcome>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(item) => String(item.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        refreshing={refreshing}
        onRefresh={refreshList}
        renderItem={({ item }) => <IncidentCard incident={item} />}
      />
    </Container>
  );
}
