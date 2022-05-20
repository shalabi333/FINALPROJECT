import tw from "twrnc";

import { Text, View } from "react-native";
import React, { Component } from "react";
import RNPickerSelect from "react-native-picker-select";

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      gendr: "",
      alarmStop: "",
    };
  }

  render() {
    const placeholder = {
      label: "Slect ",
      value: null,
      color: "#9EA0A4",
    };
    return (
      <View>
        <Text>Age</Text>
        <View style={tw` p-3 bg-red-200 h-[20%]  `}>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(age) => this.setState({ age: age })}
            items={[
              { label: "Newborn", value: "football" },
              { label: "Preschool-aged children", value: "baseball" },
              { label: "School-aged children", value: "hockey" },
              { label: "Teens", value: "hockey" },
              { label: "Adults", value: "hockey" },
            ]}
          />
        </View>
        <Text>Gender</Text>
        <View style={tw` p-3 bg-red-200 h-[20%]  `}>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(gendr) => this.setState({ gendr: gendr })}
            items={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </View>
        <Text>Active equations?</Text>
        <View style={tw` p-3  h-[20%]  border rounded-md`}>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(alarmStop) =>
              this.setState({ alarmStop: alarmStop })
            }
            items={[
              { label: "True", value: true },
              { label: "False", value: false },
            ]}
          />
        </View>
      </View>
    );
  }
}

export default Settings;
