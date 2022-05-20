import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import State from "../screens/Statistics";
import Settings from "../screens/Settings";
import { AntDesign } from "@expo/vector-icons";
import HomeNavigator from "../navigation/homeNavigator";

// const Stack = createNativeStackNavigator();
// const StackNavigtor = () => (
//   /*initialRouteName="Home"*/

//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={Homex} />
//     <Stack.Screen name="State" component={State} />
//     <Stack.Screen name="Settings" component={Settings} />
//   </Stack.Navigator>
// );

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Main") {
          return (
            <AntDesign
              name={focused ? "home" : "home"}
              size={size}
              color={color}
            />
          );
        } else if (route.name === "State") {
          return <AntDesign name="linechart" size={size} color={color} />;
        } else if (route.name === "Settings") {
          return (
            <AntDesign
              name={focused ? "setting" : "setting"}
              size={size}
              color={color}
            />
          );
        }
      },
      tabBarInactiveTintColor: "gray",
      tabBarActiveTintColor: "black",
    })}
  >
    <Tab.Screen
      name="Main"
      component={HomeNavigator}
      options={{ headerShown: false }}
    />

    <Tab.Screen name="State" component={State} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

/*
function HomeStack({navigation , route}){
  if (route.state && route.state.index > 0){
    navigation.setOptions
  }
  return (
    <StackHome.Navigator>
      <StackHome.Screen name = "Home" component={Home}/>
      <StackHome.Screen name = "Home2" component={Home2}/>
    </StackHome.Navigator>
  )
}



const StackNavigtor = () => {
const navigation = useNavigation();
  return (
     




    // <Stack.Navigator initialRouteName="Home">
    //   <Stack.Screen
    //     name="Home"
    //     component={Home}
    //     // options={{ headerShown: false, animationEnabled: false }}
    //   />
    //   <Stack.Screen
    //     name="State"
    //     component={State}
    //     options={{
    //       title: "تست",
    //       presentation: "modal",
    //     }}
    //   />
    /* <Stack.Screen
          name="product"
          component={Modal}
          options={{
            headerMode: "none",
            // headerStyle: { backgroundColor: 'g' },

            // gestureResponseDistance: { horizontal: 10 }, // default is 25 },

            title: "تفاصيل المنتج",
            presentation: "modal",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="+"
                color="blue"
              />
            ),
          }}
        
          <Stack.Screen
            name="ModalShowCustomres"
            component={ModalShowCustomres}
            options={{
              // headerMode: 'none',
              title: "العملاء",
              // presentation: "modal",
              headerLeft: () => (
                <Button
                  onPress={() => {
                    navigation.navigate("ModalAddCustomres");
                  }}
                  title="اضافة عميل"
                  // color="blue"
                />
              ),
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="الغاء"
                  // color="blue"
                />
              ),
            }}
          />
          <Stack.Screen
            name="ModalAddCustomres"
            component={ModalAddCustomres}
            options={{
              // headerMode: 'none',
              title: "اضافة عميل",
              // presentation: "modal",
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="تم"
                  // color="blue"
                />
              ),
            }}
          /> 
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <AntDesign
                name={focused ? "home" : "home"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "State") {
            return <AntDesign name="linechart" size={size} color={color} />;
          } else if (route.name === "Settings") {
            return (
              <AntDesign
                name={focused ? "setting" : "setting"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Tab.Screen name="State" component={State} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    // </Stack.Navigator>
  );
};
*/
export default TabNavigator;
