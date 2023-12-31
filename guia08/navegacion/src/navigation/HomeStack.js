import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (<>
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    </>);
}