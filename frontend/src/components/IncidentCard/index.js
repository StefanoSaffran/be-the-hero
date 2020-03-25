import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';

export default function IncidentCard({ incident, handleDelete }) {
  return (
    <Container>
      <strong>CASO:</strong>
      <p>{incident?.title}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{incident?.description}</p>

      <strong>VALOR:</strong>
      <p>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident?.value)}
      </p>

      <button type="button">
        <FiTrash2
          size={20}
          color="#a8a8b3"
          onClick={() => handleDelete(incident.id)}
        />
      </button>
    </Container>
  );
}
