import {Button} from "@rneui/base"
import React from "react"
import {View} from "react-native"

const MainMenu = () => {
  return (
    <View>
      <Button
        title={"Play"}
        buttonStyle={{
          backgroundColor: '#1a1a1a',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
          width: 210
        }}
        containerStyle={{
          width: 250,
          marginTop: 50,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15,
          paddingHorizontal: 60
        }}
      >
      </Button>
      <Button
        title={"Levels"}
        buttonStyle={{
          backgroundColor: '#1a1a1a',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
          width: 210
        }}
        containerStyle={{
          width: 250,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15,
          paddingHorizontal: 60
        }}
      >
      </Button>
      <Button
        title={"Settings"}
        buttonStyle={{
          backgroundColor: '#1a1a1a',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
          width: 210
        }}
        containerStyle={{
          width: 250,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15,
          paddingHorizontal: 60
        }}
      >
      </Button>
      <Button
        title={"Exit"}
        buttonStyle={{
          backgroundColor: '#1a1a1a',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
          width: 210
        }}
        containerStyle={{
          width: 250,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15,
          paddingHorizontal: 60
        }}
      >
      </Button>
    </View>
  )
}

export default MainMenu