/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, View, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';

const bgImage = require('../assets/bgImage.png');

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 24,
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            João Vitor Carlos Brandão
          </Text>

          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 250,
              height: 250,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />

          <PrimaryButton
            title="Scannear QRCODE"
            onPress={() => navigation.navigate('Scanner')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
