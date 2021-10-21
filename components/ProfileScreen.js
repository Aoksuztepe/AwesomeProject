import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const ProfileScreen =()=> {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.firstpageBtn} onPress={() => navigation.navigate('Home')}>

             <Text style={styles.textLoginBtn}>LOGOUT</Text>

        </TouchableOpacity>
      </View>
    );
  };
export default ProfileScreen;