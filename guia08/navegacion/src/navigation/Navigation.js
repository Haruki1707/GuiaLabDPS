import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ContactStack from "./ContactStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} option={{title: 'Home'}}/>
            <Tab.Screen name="about" component={AboutStack} option={{title: 'About'}}/>
            <Tab.Screen name="contact" component={ContactStack} option={{title: 'Contact'}}/>
        </Tab.Navigator>
    );
}