import {createStackNavigator} from "@react-navigation/stack";
import About from "../screens/About";

const Stack = createStackNavigator();

export default function AboutStack() {
    return (<>
        <Stack.Navigator>
            <Stack.Screen name="about" component={About} options={{headerShown: false}}/>
        </Stack.Navigator>
    </>);
}