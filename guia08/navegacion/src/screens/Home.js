import {View, Text, Button} from "react-native";

export default function Home({navigation}){
    return (
        <View>
            <Text>Estamos en Home</Text>

            <Button title="Ir a about" onPress={() => navigation.navigate('about')}/>
        </View>
    );
}