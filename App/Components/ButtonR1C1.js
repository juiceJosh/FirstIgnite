import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonR1C1Style'

export default class ButtonR1C1 extends Component {
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
      <View style={styles.r1c1}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.textStyle}>Touchable Opacity</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
