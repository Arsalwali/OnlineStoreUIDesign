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
      <View style={{ height: '25%', padding: 20, backgroundColor: '#e4e4e4' }}>
        <View style={{ padding: 20, left: 20, bottom: 20, right: 20, backgroundColor: 'white', position: 'absolute', borderRadius: 20 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ width: '75%' }}><Text style={{ fontSize: 25, alignSelf: 'flex-start' }}>Men's Coat</Text></View>
            <View style={{ width: '25%' }}>
              <Button
                icon={
                  <Icon
                    type='font-awesome'
                    name='heart-o'
                    size={20}
                    color="black"
                  />
                }
                buttonStyle={{ width: 50, borderRadius: 50, backgroundColor: 'grey' }}
                containerStyle={{ alignItems: 'flex-end' }}
              />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 15, color: 'grey' }}>Men's wear blue elegant coat for parties. New design, causal wear, straight, cool and much more.</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '25%', justifyContent: 'center' }}><Text style={{ fontSize: 25, alignSelf: 'center' }}>$ 29.99</Text></View>
            <View style={{ width: '75%' }}>
              <Button
                title="Add to cart"
                buttonStyle={{ borderRadius: 50, backgroundColor: 'black', minWidth: 150 }}
                containerStyle={{ alignItems: 'flex-end' }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
