import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { Button } from "@rneui/themed";
import tw from "twrnc";

export default function WelcomeAlarm({ navigation }) {
  return (
    //justify-center items-centers
    <View style={tw`flex-1     pt-14  bg-white`}>
      <View>
        <Text style={tw`pl-17 py-1 text-4xl font-bold  `}>set alarm and</Text>

        <Text style={tw`pl-17 py-1 text-4xl font-bold `}>wake up esily</Text>
      </View>

      <View style={tw` pl-12 m-8`}>
        <Image
          source={require("../../assets/clockk.png")}
          style={{
            resizeMode: "contain",
            height: 350,
            width: 220,
          }}
        />
      </View>

      {/* add alarm page */}

      <Button
        style={tw`  p-8`}
        title="next"
        buttonStyle={{
          backgroundColor: "rgba(93,196,222, 1)",
          borderRadius: 19,
        }}
        // containerStyle={{
        //   width: 200,
        //   marginHorizontal: 50,
        //   marginVertical: 10,
        // }}
        onPress={() => navigation.navigate("CreateAlarm")}
      />
      <StatusBar style="dark" />
    </View>
  );
}
