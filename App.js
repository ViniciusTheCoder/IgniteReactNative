import React, { useState } from 'react';
import { StatusBar, Text, View, StyleSheet, Button } from 'react-native';


export default function App() {


  // If we didn't have the hooks power, all these commented lines would it be necessaries to reach the goals of the app, thank god we have useState :)
  // state = {
  //  value: 0,
  //  total_taps: 0
  //  }

  //  incrementTaps = () => {
  //   this.setState({
  //     value: this.state.value + 1,
  //     total_taps: this.state.total_taps + 1
  //  })
  // }

  // decrementTaps = () => {
  //   this.setState({
  //   value: this.state.value - 1,
  //  total_taps: this.state.total_taps - 1
  //  })
  // }

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.digit}>{count}</Text>
      <Text style={styles.counter}>{"Total taps: " + count}</Text>
      <StatusBar barStyle='light-content' />
      <View style={{ flexDirection: 'row', }}>

        <Button
          onPress={() => setCount(count + 1)}
          title="Increase"
          color={'#27DA93'}
        >
        </Button>
        <Text>   </Text>
        <Button
          onPress={() => setCount(count - 1)}
          title="Decrease"
          color={'#DF0000'}
        >
        </Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#9C33FF'
  },

  digit: {
    fontSize: 60,
    marginBottom: -20,
    color: "#FFF"
  },

  counter: {
    marginTop: 20,
    color: "#FFF",
    marginBottom: 20,
    padding: 20
  },


})