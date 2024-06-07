import * as Contacts from 'expo-contacts';
import {Button, View} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => {
            Contacts.requestPermissionsAsync().then(({status}) => {
                console.log(status);
            }).catch((e) => {
                console.log(e);
            })
        }} title="Contacts permissions"/>
        </View>
    );
}

