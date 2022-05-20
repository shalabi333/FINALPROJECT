import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import { Input } from "@rneui/base";
import tw from "twrnc";
import { Audio } from "expo-av";
import { Button } from "@rneui/themed";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export class CreateAlarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      typeOfSound: "",
      label: "",
      date: new Date(),
      sound: "",
      VisibilTime: false,
      timePicked: "",
      daysPicked: [{ name: "M", active: true }],
    };
  }
  formatDate = (date) => {
    const options = {
      // day: "2-digit",
      // year: "numeric",
      // month: "2-digit",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Asia/Kuwait",
    };
    return new Intl.DateTimeFormat("en-EN", options).format(date);
  };
  handleInputChange = (inputName, inputValue) => {
    this.setState((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  // componentDidMount() {}

  render() {
    const { navigation } = this.props;
    const showDatePicker = () => {
      this.setState({ VisibilTime: true });
    };

    const hideDatePicker = () => {
      this.setState({ VisibilTime: false });
    };

    const handleConfirm = (time) => {
      this.setState({ timePicked: time });
      hideDatePicker();
    };

    async function playSound() {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync({
        uri: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/nuclear-alarm-14008.mp3",
      });

      () => this.setState({ sound: sound });
      // this.setState({ sound: sound });

      console.log("Playing Sound");
      await sound.playAsync();
    }
    async function stopSound() {
      console.log("stop Sound");
      const { sound } = this.state;
      d;
      sound.unloadAsync();

      () => this.setState({ sound: "" });
      // this.setState({ sound: sound });

      console.log("Playing Sound");
      await sound.stopAsync();
    }

    const handleCheck = (data) => {
      var updatedList = [...daysPicked];

      if (daysPicked.indexOf(data) == -1) {
        updatedList = [...daysPicked, data];
      } else {
        updatedList.splice(daysPicked.indexOf(data), 1);
      }
      this.setState({ daysPicked: updatedList });
    };
    const daysArray = [
      { name: "SU", active: true },
      { name: "M", active: true },
      { name: "T", active: true },
      { name: "W", active: true },
      { name: "TH", active: false },
      { name: "F", active: false },
      { name: "S", active: true },
    ];
    const { typeOfSound, label, date, VisibilTime, timePicked, daysPicked } =
      this.state;
    // console.log(daysPicked);
    return (
      <View style={tw`flex items-center  bg-gray-100 h-full w-full `}>
        {/* <Text>Picked time is : {this.formatDate(timePicked)}</Text> */}
        <Button
          title="Pick time"
          buttonStyle={tw`flex items-center bg-blue-400  justify-center rounded-md w-[90%] text-center mt-4`}
          style={tw`text-center`}
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={VisibilTime}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {timePicked ? (
          <View style={tw`flex mt-8 bg-blue-400 rounded-md p-2 w-[40%] `}>
            <Text style={tw`text-lg text-white`}>
              Picked time is : {this.formatDate(timePicked)}
            </Text>
          </View>
        ) : null}

        {/* <Text style={tw`font-bold p-3`}>Day Active</Text> */}
        <View style={tw`flex   h-[50%] w-full`}>
          <View style={tw`flex flex-row  justify-center items-center `}>
            {daysArray.map((itemList, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    {
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: itemList.active
                        ? "#DDDDDD"
                        : "rgba(93,196,222, 1)",
                    },
                  ]}
                  // onPress={() => (itemList.active = false)}
                >
                  <Text>{itemList.name}</Text>
                </TouchableOpacity>

                // <Pressable
                //   style={tw.style(
                //     `flex justify-center items-center bg-gray-300 p-2 rounded-full mt-4 w-10 mx-1`,
                //     daysPicked.includes(itemList)
                //       ? " bg-gray-700 text-white"
                //       : ""
                //   )}
                //   onPress={() => handleCheck(itemList)}
                // >
                //   <Text style={tw`text-center`}>{itemList.name}</Text>
                // </Pressable>
              );
            })}
          </View>
          <View style={tw`flex justify-center items-center mt-8`}>
            <View
              style={tw`flex flex-row bg-black opacity-90 rounded-full w-[80%] `}
            >
              <Pressable
                style={tw.style(
                  `text-2xl items-center font-bold p-3  w-1/2 rounded-full`,
                  typeOfSound == "Normal Sound" && " bg-blue-500"
                )}
                onPress={() => this.setState({ typeOfSound: "Normal Sound" })}
              >
                <Text style={tw`text-white font-bold  `}>Normal Sound</Text>
              </Pressable>
              <Pressable
                style={tw.style(
                  `text-2xl items-center font-bold p-3  w-1/2 rounded-full`,
                  typeOfSound == "News BBC" && " bg-blue-500"
                )}
                onPress={() => this.setState({ typeOfSound: "News BBC" })}
              >
                <Text style={tw`text-white font-bold  `}>News BBC</Text>
              </Pressable>

              {typeOfSound == "News BBC" ? <Text>Hey</Text> : <Text></Text>}
            </View>
          </View>

          <View style={tw`flex items-center p-4 w-full `}>
            <Input
              placeholder="Label"
              // leftIcon={<Icon name="envelope" size={24} color="gray" />}
              // autoFocus
              autoCapitalize={"none"}
              // leftIconContainerStyle={tw`flex mx-1 justify-center items-center text-center w-8 border`}
              inputContainerStyle={tw`border rounded-md`}
              autoCorrect={false}
              type="text"
              style={tw`w-full pl-3`}
              onChangeText={(label) => this.handleInputChange("label", label)}
              value={label}
            />
          </View>
        </View>
        <View
          style={tw`absolute bottom-0 right-0 left-0 h-20  w-full items-center p-3  bg-blue-400  `}
        >
          <View style={tw`flex justify-center w-full items-center `}>
            <Button
              title="Create Alram"
              // containerStyle={tw`flex bg-blue-200    text-center border`}
              buttonStyle={tw`bg-blue-400    justify-center w-full text-center `}
              style={tw`text-center `}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default CreateAlarm;

{
  /* <View style={tw`p-4`}>
          <Input
            placeholder="Label"
            // leftIcon={<Icon name="envelope" size={24} color="gray" />}
            // autoFocus
            autoCapitalize={"none"}
            // leftIconContainerStyle={tw`flex mx-1 justify-center items-center text-center w-8 border`}
            inputContainerStyle={tw`border rounded-md`}
            autoCorrect={false}
            type="text"
            style={tw`w-full pl-3`}
            onChangeText={(label) => this.handleInputChange("label", label)}
            value={label}
          />
        </View> */
}
