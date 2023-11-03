/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//アイコン
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
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
        <Footer />
      </ScrollView>
      <FloatingArea />

    </View >

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
      >List of Songs - EP</Text>
      <Text style={{
        fontSize: 20,
        color: colors.primary,
        paddingBottom: 4,
      }}>Toyoda Shingo</Text>
      <Text style={{
        fontSize: 12,
        color: colors.gray,
        fontWeight: '600',
      }}>Electronic・2023年・ロスレス</Text>
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
      <AppButton onPress={() => { }} title="再生" iconName='play' />
      <View style={{ width: 16 }} />
      <AppButton onPress={() => { }} title="シャッフル" iconName='shuffle' />
    </View>
  )
}

const SongsArea = () => {
  var songs: String[] = [
    "Good Day", "Bouquet", "Aloha", "Sunrise Serenade", "Moonlit Melody",
    "Ocean Breeze", "Eternal Echoes", "Whispering Wind", "Mystic Mirage",
    "Golden Horizon", "Enchanted Evening", "Starlight Serenade",
    "Lullaby of the Stars", "Celestial Harmony", "Serenity's Embrace",
    "Dancing Fireflies", "Melody of the Mountains", "Hidden Oasis",
    "Radiant Reverie", "Midnight Mirage", "Journey to Infinity",
    "Crystal Cascade", "Soothing Symphony", "Echoes of Eternity",
    "Harmony Haven", "Serendipity Sonata", "Velvet Twilight",
    "Tranquil Tides", "Whimsical Waltz", "Chasing Dreams"
  ]
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
      <EntypoIcon name="dots-three-horizontal" size={16} style={{ marginLeft: 'auto', marginRight: 0 }} />
    </TouchableOpacity><Divider style={{ marginLeft: 24 }} /></>
  )
}

const AppButton = ({ onPress, title, iconName }: { onPress: () => void; title: string; iconName: string }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons name={iconName} size={24} style={{ marginRight: 6, color: colors.primary }} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const FloatingArea = () => {
  return (
    <View style={styles.floatView}>
      <TouchableOpacity style={styles.floatButton}>
        <Image
          source={require('./img/ordinary_songs.jpg')} // 画像のパスを指定
          style={styles.floatimage} />
        <Text style={styles.floatTitle}>Good Day</Text>
        <Ionicons name="play" size={24} style={{ marginRight: 24, marginLeft: "auto" }} />
        <Ionicons name="play-forward" size={26} style={{ marginRight: 8, color: "#b3b3b3" }} />
      </TouchableOpacity>
    </View>
  );
}

const Footer = () => {
  return (
    <View style={{ margin: 20, marginBottom: 200 }}>
      <Text style={{ color: colors.gray }}>
        2023年11月3日{"\n"}30曲、300分
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  floatTitle: {
    fontSize: 16,
    paddingLeft: 8,
  },
  floatimage: {
    height: 42,
    width: 42,
    borderRadius: 8, // containerと同じ値を設定
  },
  floatView: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 60, // ボタンの高さを調整するために必要に応じて調整
    alignSelf: 'center',
    elevation: 5, // ボタンを浮かせる効果
  },
  floatButton: {
    flex: 1,
    flexDirection: 'row',
    height: 56,
    borderRadius: 12,
    backgroundColor: "#fbfbfb",
    alignItems: 'center',
    shadowColor: '#999',
    paddingHorizontal: 8,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
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
