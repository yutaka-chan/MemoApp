import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const App = (): JSX.Element => { //JSX.ElementはReactのエレメントであることを指す
  return (
    <View style={styles.container}>
      <Text>MemoApp</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App

  /* TypeScriptについて
  let test: number = 1
  test = 2
  test = 'test'

  const testFunc = ():string => {  //型の値をしている場合はこのように書く
    return 'test'
  }
  */