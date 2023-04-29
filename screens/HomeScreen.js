import * as React from 'react';
import {Text, View, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    const data = { websiteName: "John's Tech" }
    return(
        <View>
            <Text> Home Screen </Text>
            <Button
                title = "Go to About"
                onPress={() => navigation.navigate('AboutScreen', data)}
            />
        </View>
    )
}

export default HomeScreen