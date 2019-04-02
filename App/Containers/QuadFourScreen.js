import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/QuadFourScreenStyle'
import ButtonR1C1 from '../Components/ButtonR1C1';
import TextInputR1C2 from '../Components/TextInputR1C2';
import ButtonR2C1 from '../Components/ButtonR2C1';
import TextR2C2 from '../Components/TextR2C2';

class QuadFourScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style = {styles.viewContainer}>

          <ButtonR1C1/>

          <TextInputR1C2/>

        </View>

        <View style = {styles.viewContainer}> 

          <ButtonR2C1/>

          <TextR2C2/>

        </View>
       
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuadFourScreen)
