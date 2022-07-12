import {Button, Text} from "@rneui/base"
import React from "react"
import {Easing, View} from "react-native"
import Logo from "./components/Logo"
import MainMenu from "./components/MainMenu"


const App = () => {
  return (
    <View>
      <Logo/>
      <MainMenu/>
    </View>
  )
}

export default App
