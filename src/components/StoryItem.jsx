import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

export const StoryItem = () => (
  <Container>
    <ImageContainer>
      <ImageUI
        source={{
          uri:
            'https://scontent.cdninstagram.com/vp/07ecf7f23602d72dba3a2e8904ddeaba/5DBA5D72/t51.2885-19/s150x150/44277877_497702887399667_532771997076160512_n.jpg?_nc_ht=scontent.cdninstagram.com',
        }}
      />
    </ImageContainer>
    <Username numberOfLines={1}>mariass.medeiros</Username>
  </Container>
);

const Container = styled(View)`
  flex: 1;
  margin: 0 5px;
  align-items: center;
  height: 110px;
  width: 75px;
`;

const ImageContainer = styled(View)`
  position: relative;
  border-radius: 32px;
  border-width: 2px;
  border-color: purple;
`;

const ImageUI = styled(Image)`
  width: 56px;
  height: 56px;
  margin: 2px;
  border-radius: 28px;
`;

const Username = styled(Text)`
  font-size: 12px;
  margin-top: 3px;
`;
