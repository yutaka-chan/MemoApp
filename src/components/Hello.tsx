import { View, Text, StyleSheet, type TextStyle } from "react-native" 
    //React NativeからTextStype型を読み込む

interface Props { //propsに入る型がいろいろ想定できるからProps型を作る
    children: string //propsの中身を定義。
    bang?: boolean //値を渡さなくてもエラーにならないように?を付ける
    style?: TextStyle
}

const Hello = (props: Props): JSX.Element => { 
    //const children = props.children
    //上記の定義が複数になると連なって見づらいので
    //Destructuring Assignment(分割代入)↓
    //const {children, foo, bar} = props
    const {children, bang, style } = props
    return (
        <View>
            <Text style={[styles.text, style]}> 
                {/*スタイルに複数の引数を指定するときは配列として*/}
                {/*後ろの引数が優先されるので、スタイルを上書きするときは後続につける*/}
                Hello {children}{bang === true ? '!' : ''}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff', 
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})
export default Hello
