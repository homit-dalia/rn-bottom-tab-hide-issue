import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("Posts")} title='Posts' />
      <Text>Home Screen</Text>
    </View>
  )
}

const PostsScreen = ({ navigation }) => {

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
  }, [])

  return (
    <View style={styles.container}>
      <Text>Posts Screen</Text>
    </View>
  )
}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, tabBarInactiveBackgroundColor: 'black' }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})