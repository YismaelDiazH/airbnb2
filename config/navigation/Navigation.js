import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import Login from '../../modules/auth/adapters/screens/Login'
import CreateAccount from '../../modules/users/adapters/screens/CreateAccount'

const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='createAccount'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown:false
                })}>
                <Tab.Screen 
                name='login'
                options={{title: 'Perfil'}}
                component={Login} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />
                <Tab.Screen 
                name='createAccount'
                options={{title: 'Crear cuenta'}}
                component={CreateAccount} //que vista esperamos que se renderice cuando el usuario le de click a una opción
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case 'login':
            iconName = 'account-circle-outline'
            break;
        case 'createAccount':
            iconName = 'information-outline'
            break
        default:
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={22}
        color={color}></Icon>)
}
