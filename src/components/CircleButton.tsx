import { View, Text, StyleSheet } from "react-native"

interface Props {
    children: string
}

const CircleButton = (props: Props): JSX.Element => {
    const {children} = props
    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467fd3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        /* iOSにしか適用できないShadow */
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 8},
        /* Androidに適用するshadowの代わり
        Googleが提唱するマテリアルデザイン。
        エレメントの重なり順と高さを表現
        （高い位置にあると解釈されるから影が落ちる）*/
        elevation: 8 
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48
    }
})

export default CircleButton