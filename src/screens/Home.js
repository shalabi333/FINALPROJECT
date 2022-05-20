import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { Button } from "@rneui/themed";
import tw from "twrnc";

import { Component } from "react";
import { render } from "react-dom";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      //justify-center items-centers
      <View style={tw`flex-1     pt-14  bg-white `}>
        <View>
          <Text style={tw`pl-6 py-1 text-4xl font-bold underline `}>
            Hello there!
          </Text>

          <Text style={tw`pl-6 py-1 text-4xl font-bold underline`}>
            let's add an alarm
          </Text>
        </View>

        <View style={tw` pl-12 m-8`}>
          <Image
            source={require("../../assets/hello.png")}
            style={{
              resizeMode: "contain",
              height: 400,
              width: 300,
            }}
          />
        </View>
        <Button
          style={tw`  p-8`}
          title="add alarm"
          buttonStyle={{
            backgroundColor: "rgba(93,196,222, 1)",
            borderRadius: 19,
          }}
          // containerStyle={{
          //   width: 200,
          //   marginHorizontal: 50,
          //   marginVertical: 10,
          // }}
          onPress={() => navigation.navigate("SetAlarm")}
        />
        <StatusBar style="dark" />
      </View>
    );
  }
}

export default Home;
