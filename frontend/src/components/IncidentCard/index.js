import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import { Container } from './styles';

export default function IncidentCard({ incident, handleDelete }) {
  const history = useHistory();
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

      <button className="delete" type="button">
        <FiTrash2
          size={20}
          color="#a8a8b3"
          onClick={() => handleDelete(incident.id)}
        />
      </button>
      <button className="edit" type="button">
        <FiEdit2
          size={20}
          color="#a8a8b3"
          onClick={() => history.push(`incidents/edit/${incident.id}`)}
        />
      </button>
    </Container>
  );
}
