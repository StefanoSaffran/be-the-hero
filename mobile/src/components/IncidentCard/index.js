import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Feather as Icon } from '@expo/vector-icons';
import {
  Container,
  Label,
  Value,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function IncidentCard({ incident }) {
  const navigation = useNavigation();

  const handleNavigate = (incident) => {
    navigation.navigate('Details', { incident });
  };

  return (
    <Container>
      <Label>ONG:</Label>
      <Value>{incident?.name}</Value>
      <Label>CASO:</Label>
      <Value>{incident?.title}</Value>
      <Label>Value:</Label>
      <Value>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident?.value)}
      </Value>
      <DetailsButton
        onPress={() => {
          handleNavigate(incident);
        }}
      >
        <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
        <Icon name="arrow-right" size={17} color="#e02041" />
      </DetailsButton>
    </Container>
  );
}
