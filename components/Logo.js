import React, {useEffect, useRef} from 'react'
import {View, StyleSheet, Animated, Easing} from 'react-native'

const TinyLogoView = (props) => {
  let opacity = useRef(new Animated.Value(0)).current

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, 10]
  })

  useEffect(() => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.bounce
      }
    ).start()
  }, [opacity])

  return (
    <Animated.Image
      style={{
        ...props.style,
        opacity,
        transform: [{
          translateY: size
        }]
      }}
      source={require('../assets/brain.png')}
    >
      {props.children}
    </Animated.Image>
  )
}

const LogoView = (props) => {
  let opacity = useRef(new Animated.Value(0)).current

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20]
  })

  useEffect(() => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.in
      }
    ).start()
  }, [opacity])

  return (
    <Animated.Image
      style={{
        ...props.style,
        opacity
      }}
      source={require('../assets/numbre.png')}
    >
      {props.children}
    </Animated.Image>
  )
}
const Logo = () => {
  return (
    <View style={styles.container}>
      <TinyLogoView style={styles.tinyLogo}/>
      <LogoView style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  tinyLogo: {
    width: 73,
    height: 80
  },
  logo: {
    marginTop: 30,
    width: 170,
    height: 30
  }
})

export default Logo