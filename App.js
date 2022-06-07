import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen  from './component/Home'
import Menu from './component/Menu'
import Instructions  from './component/Instructions'
import Select from './component/Select'
import Dressup from './component/Dressup'
import Spy from './component/Spy'
import Jujutsu from './component/jujutsu'
import JJKChapter1 from './component/JJKChapter1'
import DressupChapter1 from './component/DressupChapter1'
import SpyxFamilyChapter1 from './component/SpyxFamilyChapter1'
import DressupChapter2 from './component/DressupChapter2'
import DressupChapter3 from './component/DressupChapter3'
import DressupChapter4 from './component/DressupChapter4'
import DressupChapter5 from './component/DressupChapter5'
import SpyxFamilyChapter2 from './component/SpyxFamilyChapter2'
import SpyxFamilyChapter3 from './component/SpyxFamilyChapter3'
import SpyxFamilyChapter4 from './component/SpyxFamilyChapter4'
import SpyxFamilyChapter5 from './component/SpyxFamilyChapter5'
import JKChapter2 from './component/JKChapter2'
import JKChapter3 from './component/JKChapter3'
import JKChapter4 from'./component/JKChapter4'
import JKChapter5 from './component/JKChapter5'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
        name="Menu" 
        component={Menu} 
        />
         <Stack.Screen 
        name="Instructions" 
        component={Instructions} 
        npn
        />
      <Stack.Screen 
        name="Select" 
        component={Select} 
     
        />
        <Stack.Screen 
        name="Dressup" 
        component={Dressup} 
        />
        <Stack.Screen 
        name="Spy" 
        component={Spy}   
        />
        <Stack.Screen 
        name="Jujutsu" 
        component={Jujutsu}  
        />

         <Stack.Screen 
        name="JJKChapter1 " 
        component={ JJKChapter1}   
        />
          <Stack.Screen 
        name="DressupChapter1" 
        component={DressupChapter1}   
        />
          <Stack.Screen 
        name="SpyxFamilyChapter1" 
        component={SpyxFamilyChapter1}   
        />
        <Stack.Screen 
        name="DressupChapter2" 
        component={DressupChapter2}   
        />
          <Stack.Screen 
        name="DressupChapter3" 
        component={DressupChapter3}   
        />
         <Stack.Screen 
        name="DressupChapter4" 
        component={DressupChapter4}   
        />
         <Stack.Screen 
        name="DressupChapter5" 
        component={DressupChapter5}   
        />
           <Stack.Screen 
        name="SpyxFamilyChapter2" 
        component={SpyxFamilyChapter2}   
        />
           <Stack.Screen 
        name="SpyxFamilyChapter3" 
        component={SpyxFamilyChapter3}   
        />
           <Stack.Screen 
        name="SpyxFamilyChapter4" 
        component={SpyxFamilyChapter4}   
        />
           <Stack.Screen 
        name="SpyxFamilyChapter5" 
        component={SpyxFamilyChapter5}   
        />
          <Stack.Screen 
        name="JKChapter2" 
        component={JKChapter2}   
        />
          <Stack.Screen 
        name="JKChapter3" 
        component={JKChapter3}   
        />
          <Stack.Screen 
        name="JKChapter4" 
        component={JKChapter4}   
        />
          <Stack.Screen 
        name="JKChapter5" 
        component={JKChapter5}   
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
  };

  export default MyStack
 