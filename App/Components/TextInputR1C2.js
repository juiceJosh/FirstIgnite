import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native'
import styles from './Styles/TextInputR1C2Style'

export default class TextInputR1C2 extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style = {styles.r1c2}>
            <TextInput 
              placeholder="Type Here"
              style = {styles.inputStyle}
            />
          </View>
    )
  }
}
