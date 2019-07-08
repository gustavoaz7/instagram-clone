import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components/native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

const DESIRED_RATIO = '16:9';
let navigationFocusListener;
let navigationBlurListener;

export function NewStoryScreen(props) {
  const cameraRef = useRef(null);
  const [hideStatusBar, setHideStatusBar] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  // eslint-disable-next-line
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraRatio, setCameraRatio] = useState(null);

  const getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  useEffect(() => {
    navigationFocusListener = props.navigation.addListener('willFocus', () => {
      setHideStatusBar(true);
      getCameraPermission();
    });
    navigationBlurListener = props.navigation.addListener('willBlur', () => {
      setHideStatusBar(false);
    });

    return () => {
      navigationFocusListener.remove();
      navigationBlurListener.remove();
    };
  }, []);

  const flipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  const prepareRatio = async () => {
    if (Platform.OS === 'android' && cameraRef.current) {
      const ratios = await cameraRef.current.getSupportedRatiosAsync();
      const ratio = ratios.find(r => r === DESIRED_RATIO) || ratios[ratios.length - 1];
      setCameraRatio(ratio);
    }
  };

  return (
    <Container>
      <StatusBar hidden={hideStatusBar} animated showHideTransition="slide" />
      <CameraUI ref={cameraRef} type={cameraType} onCameraReady={prepareRatio} ratio={cameraRatio}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={flipCamera}
        >
          <Text style={{ fontSize: 18, color: 'white' }}>Flip</Text>
        </TouchableOpacity>
      </CameraUI>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;

const CameraUI = styled(Camera)`
  flex: 1;
`;
