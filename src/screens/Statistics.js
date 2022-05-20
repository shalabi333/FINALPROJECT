import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { Pressable, Text, View, SafeAreaView, Button } from "react-native";

import tw from "twrnc";

export class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selctedView: "",
    };
  }
  render() {
    const { selctedView } = this.state;
    return (
      <View style={tw`bg-white`}>
        <Text style={tw`text-2xl font-bold pl-5 pt-3 `}>Statistics</Text>
        <View style={tw`flex justify-center items-center mt-8 `}>
          <View
            style={tw`flex flex-row bg-black opacity-90 rounded-full w-[80%] `}
          >
            <Pressable
              style={tw.style(
                `text-2xl items-center font-bold p-3  w-1/3 rounded-full`,
                selctedView == "Day" && " bg-blue-900"
              )}
              onPress={() => this.setState({ selctedView: "Day" })}
            >
              <Text style={tw`text-white font-bold  `}>Day</Text>
            </Pressable>
            <Pressable
              style={tw.style(
                `text-2xl items-center font-bold p-3  w-1/3 rounded-full`,
                selctedView == "Week" && " bg-blue-900"
              )}
              onPress={() => this.setState({ selctedView: "Week" })}
            >
              <Text style={tw`text-white font-bold  `}>Week</Text>
            </Pressable>
            <Pressable
              style={tw.style(
                `text-2xl items-center font-bold p-3  w-1/3 rounded-full`,
                selctedView == "Month" && " bg-blue-900"
              )}
              onPress={() => this.setState({ selctedView: "Month" })}
            >
              <Text style={tw`text-white font-bold  `}>Month</Text>
            </Pressable>
            {selctedView == "Month" ? <Text>Hey</Text> : <Text></Text>}
          </View>
        </View>

        <Text style={tw`text-xl font-bold pl-5 pt-3 mt-2 `}>
          Sleep duration
        </Text>
        {/* <StatusBar style="light" /> */}
      </View>
    );
  }
}
export default Statistics;
