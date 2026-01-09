import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const bgImage = require('../assets/bgImage.png');


export default function ResultScreen({ navigation, route }: any) {
  const data = route?.params?.data;
  const spriteUri = `${data.sprites.front_default}`;
  const allTypes = data.types
    .map((t: { slot: number; type: { name: string; url: string } }) => t.type.name)
    .join(', ');

  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>ID: {data.id}</Text>

        <Image
          source={{ uri: spriteUri }}
          style={[{ width: 300, height: 300 }, styles.image]}
        />

        <View style={styles.infoContainer}>
          <Text>
            <Text style={styles.title}>Name: </Text>
            <Text style={styles.name}>{data.name}</Text>
          </Text>

          <Text style={styles.type}>Type: {allTypes}</Text>
        </View>

        <View style={styles.buttonSpacer}>
          <PrimaryButton
            title="Voltar para o inicio"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    alignSelf: 'stretch', // ocupa a largura disponível
    paddingHorizontal: 24,
  },

  name: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'left',
    marginBottom: 12,
  },

  type: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'left',
  },

  title: {
    fontSize: 18,
    color: 'yellow',
    fontWeight: '600',
  },

  image: {
    marginBottom: 90,
    marginTop: 125,
  },
  buttonSpacer: {
    marginTop: 16,
  },
});
