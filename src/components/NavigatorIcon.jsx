import React from 'react';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const createNavigatorIcon = (name, focused) => (
  <Icon name={name} color={focused ? 'black' : 'gray'} size={24} />
);

const Icon = styled(Feather)`
  background-color: transparent;
`;
