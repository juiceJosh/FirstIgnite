import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/ButtonR2C1Style'

export default class ButtonR2C1 extends Component {
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
      <View style = {styles.r2c1}>
         <TouchableHighlight style={styles.button}>
          <Text style={styles.textStyle}>Touchable Highlight</Text>
        </TouchableHighlight>
      </View>

    )
  }
}
