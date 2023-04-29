import * as React from 'react';
import {Text, View} from 'react-native'

const AboutScreen = ({route}) => {
    let dataObj = route.params 
    return (
        <View>
            <Text>
                This is the About Screen of {dataObj.websiteName}
            </Text>
        </View>
    )
}

export default AboutScreen