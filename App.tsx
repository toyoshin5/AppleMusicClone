/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//アイコン
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  Divider, SocialIcon,
} from 'react-native-elements';
//色の定義
const colors = {
  primary: '#E63D44',
  gray: '#999',
  buttonBackground: '#EEEDEF',
};

const Stack = createStackNavigator();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      }}>
        <Stack.Screen name="React Native" component={MusicScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


const MusicScreen = () => {
  return (
    <View style={{
      backgroundColor: 'white',
      flex: 1
    }}>
      <ScrollView>
        <TitleArea />
        <ButtonArea />
        <Divider style={{ marginLeft: 20, marginTop: 4 }} />
        <SongsArea />
      </ScrollView>
    </View>
  )
}

const TitleArea = () => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <View style={styles.albumContainer}>
        <Image
          source={require('./img/ordinary_songs.jpg')} // 画像のパスを指定
          style={styles.image} />
      </View>
      <Text style={{
        fontSize: 20,
        fontWeight: '500',
        paddingBottom: 2,
      }}
      >Ordinary Songs 3 - EP</Text>
      <Text style={{
        fontSize: 20,
        color: colors.primary,
        paddingBottom: 4,
      }}>Snail's House</Text>
      <Text style={{
        fontSize: 12,
        color: colors.gray,
        fontWeight: '600',
      }}>Electronic・2017年・ロスレス</Text>
    </View>
  )
}


const ButtonArea = () => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',

      }}>
      <AppButton onPress={() => { }} title="再生" />
      <View style={{ width: 16 }} />
      <AppButton onPress={() => { }} title="シャッフル" />
    </View>
  )
}

const SongsArea = () => {
  var songs: String[] = ["Good Day", "Bouquet", "Aloha", "あめあがりのうた", "Good Day", "Bouquet", "Aloha", "あめあがりのうた", "Good Day", "Bouquet", "Aloha", "あめあがりのうた", "Good Day", "Bouquet", "Aloha", "あめあがりのうた"]
  return (
    <View style={{
      paddingHorizontal: 20,
    }}>
      {songs.map((song, index) => {
        return (
          <SongItem number={String(index + 1)} name={song} onPress={() => { }} key={index + 1} />
        )
      })}

    </View>
  )
}

const SongItem = ({ number, name, onPress }: { number: String; name: String; onPress: () => void }) => {
  return (
    <><TouchableOpacity onPress={() => { }} style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      height: 48,
    }}>
      <Text style={styles.songNumText}>{number}</Text>
      <Text style={styles.songItemText}>{name}</Text>
      <Icon name="home" size={10} />
    </TouchableOpacity><Divider style={{ marginLeft: 24 }} /></>
  )
}

const AppButton = ({ onPress, title }: { onPress: () => void; title: string; }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  songNumText: {
    color: colors.gray,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  songItemText: {
    fontSize: 16,
    paddingLeft: 8,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.buttonBackground,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  albumContainer: {
    borderRadius: 10, // 角丸の程度を設定
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5, // Android用の影の設定
    paddingTop: 10,
    paddingBottom: 16,
  },
  image: {
    width: 250, // 画像の幅を適宜調整
    height: 250, // 画像の高さを適宜調整
    borderRadius: 10, // containerと同じ値を設定
  },
});


export default App;
