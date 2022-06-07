import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Image, Alert} from 'react-native';
import  { StackActions } from '@react-navigation/native';
const Menu = ({ navigation }) => {
    return  (
        <View style={{flex: 1,backgroundColor: '#FFC0CB', justifyContent :'center',alignItems : 'center'}}>
         <Text style={styles.bigblack}>About Us</Text>
         <Text style={styles.bluelack}>Manga is an umbrella term for a wide variety of comic books and graphic novels originally produced and published in Japan. Unlike American comic books, which are usually printed in full color, Japanese manga are almost always published in black and white. Full-color prints are often only used for special releases. 

Japanese manga is read right-to-left rather than left-to-right, which is the norm for English language publications. This can take some getting used to if you have only ever read English publications,  but you will hardly notice once you’ve practiced enough. 

In Japan, manga are typically released on a monthly or a weekly chapter-by-chapter basis through manga magazines such as Weekly Shōnen Jump, (which has been in circulation since 1968). If a series is popular enough, its chapters are then collected and published into volumes called tankōbon volumes, which usually feature a few chapters of the overall story.  </Text>
      

<Button
       height="100"
        title='Next Screen'
        color="#ff1493"
        onPress = {()=> navigation.push('Instructions')} />
      
      
        </View>


)
}

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'Center',
        clearImmediate
    },
    text:  {
        frontSize: 1000,
        fontWeight: 'bold',
        margin: 100,
        textalign:"center"
    },
     
    bigblack: {
           
            fontWeight: 'bold',
            fontSize: 45,
            height:110,

        },
     
        bluelack: {
               
               
                
                fontWeight: 'bold',
                fontSize: 12,
                height:250,
                
                
    }
});

export default Menu

import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Image, Alert} from 'react-native';
import  { StackActions } from '@react-navigation/native';
const Menu = ({ navigation }) => {
    return  (
        <View style={{flex: 1,backgroundColor: '#FFC0CB', justifyContent :'center',alignItems : 'center'}}>
         <Text style={styles.bigblack}>About Us</Text>
         <Text style={styles.bluelack}>Manga is an umbrella term for a wide variety of comic books and graphic novels originally produced and published in Japan. Unlike American comic books, which are usually printed in full color, Japanese manga are almost always published in black and white. Full-color prints are often only used for special releases. 

Japanese manga is read right-to-left rather than left-to-right, which is the norm for English language publications. This can take some getting used to if you have only ever read English publications,  but you will hardly notice once you’ve practiced enough. 

In Japan, manga are typically released on a monthly or a weekly chapter-by-chapter basis through manga magazines such as Weekly Shōnen Jump, (which has been in circulation since 1968). If a series is popular enough, its chapters are then collected and published into volumes called tankōbon volumes, which usually feature a few chapters of the overall story.  </Text>
      

<Button
       height="100"
        title='Next Screen'
        color="#ff1493"
        onPress = {()=> navigation.push('Instructions')} />
      
      
        </View>


)
}

const styles = StyleSheet.create({
    body: {
        flex: 1, 
        justifyContent: 'Center',
        clearImmediate
    },
    text:  {
        frontSize: 1000,
        fontWeight: 'bold',
        margin: 100,
        textalign:"center"
    },
     
    bigblack: {
           
            fontWeight: 'bold',
            fontSize: 45,
            height:110,

        },
     
        bluelack: {
               
               
                
                fontWeight: 'bold',
                fontSize: 12,
                height:250,
                
                
    }
});

export default Menu

