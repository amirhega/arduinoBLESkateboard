import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import {useState} from "react";
import ble from "./ble";


const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {

  const [sliderValue, setSliderValue] = useState(15);
  const [isUnlocked, setIsUnlocked] = useState(true);
  state = {
    unlocked: true,
   
  }

  bleHandler = () => {
    //Calling a function of other class (without arguments)
    new ble().componentWillMount();
  };
  onButtonPress = () => {
    // for(let i = {sliderValue}; i >=0; i--) {
    //           (sliderValue) => setSliderValue(i)
    //         }
    // let val = {sliderValue};
    // this.
    // sliderValue => setSliderValue(2)
    // for(let i = {sliderValue}; i >=0; i--) {
    //   (sliderValue) => setSliderValue(5)
    //   setTimeout(function () {
    //     if (newState == -1) {
    //         alert('VIDEO HAS STOPPED');
    //     }
    // }, 500);
    // }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Text to show slider value*/}
        <Text style={{color: 'black'}}>
           Value of slider is : {sliderValue} ({isUnlocked ? "Unlocked" : "Locked"})
        </Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider
          disabled = {!isUnlocked}
          maximumValue={50}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </View>


  
    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        titleStyle={{
          color: "white",
          fontSize: 30,
        }}
        disabled = {!isUnlocked}
        title="FASTER"
        onPress={() => setSliderValue(sliderValue+5)}
      />
    </View>
    
    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        disabled = {!isUnlocked}
        title="SLOWER"
        onPress={() => setSliderValue(sliderValue-5)}
      />
    </View>
    <Separator />
        
    <View>
      <Text style={styles.title}>
        Amirs Skateboard.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title={isUnlocked ? "Lock" : "Unlock"}
          onPress={() => {
            setIsUnlocked(!isUnlocked);
          }}
        />
        <Button
          disabled = {!isUnlocked}
          title="Turn OFF"
          onPress={
            (sliderValue) => setSliderValue(0)
          }
        />
        <Button
          disabled = {!isUnlocked}
          title="Connected"
          onPress={
            this.bleHandler
          }

        />
      </View>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;