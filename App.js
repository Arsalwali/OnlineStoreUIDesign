import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';
import Img1 from './assets/3.jpg';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image source={Img1}
          style={{ width: '100%', height: '100%' }}>
        </Image>
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
          <View style={{ width: '75%' }}><Text style={{ fontSize: 25, alignSelf: 'flex-start' }}>Men's Wear Blue Coat</Text></View>
          <View style={{ width: '25%' }}><Text style={{ fontSize: 25, alignSelf: 'center' }}>$29.99</Text></View>
        </View>
        <Text style={{ marginBottom: 25, fontSize: 15, color: 'grey' }}>Men's wear blue elegant coat for parties. New design, causal wear, straight, cool and much more.</Text>
        <View style={{ flexDirection: 'row', marginBottom: 25 }}>
          <View style={{ width: '25%', alignItems: 'center' }}><Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start' }}>Size</Text></View>
          <View style={{ width: '75%', alignItems: 'center', fontSize: 15, justifyContent: 'space-around', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>M</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>L</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>XL</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            icon={
              <Icon
                type='font-awesome'
                name='heart-o'
                size={20}
                color="black"
              />
            }
            buttonStyle={{ flex: 1, borderRadius: 50, backgroundColor: 'grey' }}
            containerStyle={{ width: 100, paddingRight: 25 }}
          />
          <Button
            title="Add to cart"
            buttonStyle={{ borderRadius: 50, backgroundColor: 'black' }}
            containerStyle={{ flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
