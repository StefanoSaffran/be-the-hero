import React from 'react';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather as Icon } from '@expo/vector-icons';

import logo from '~/assets/logo.png';

import {
  Container,
  Header,
  Image,
  BackButton,
  DetailsContainer,
  Contact,
  Title,
  Label,
  Value,
  Description,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const message = `Olá ${
    incident?.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident?.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident?.value)}`;

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident?.title}`,
      recipients: [incident?.email],
      body: message,
    });
  };

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=17671240345&text=${message}`);
  };

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </BackButton>
      </Header>
      <DetailsContainer>
        <Label style={{ marginTop: 0 }}>ONG:</Label>
        <Value>
          {incident?.name} de {incident?.city}/{incident?.uf}
        </Value>
        <Label>CASO:</Label>
        <Value>{incident?.title}</Value>
        <Label>Value:</Label>
        <Value>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident?.value)}
        </Value>
      </DetailsContainer>
      <Contact>
        <Title>Salve o dia!</Title>
        <Title>Seja o herói desse caso.</Title>

        <Description>Entre em contato:</Description>
        <ButtonContainer>
          <Button>
            <ButtonText onPress={sendWhatsapp}>WhatsApp</ButtonText>
          </Button>
          <Button>
            <ButtonText onPress={sendMail}>Email</ButtonText>
          </Button>
        </ButtonContainer>
      </Contact>
    </Container>
  );
}
