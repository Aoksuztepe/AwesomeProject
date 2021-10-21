import * as React from 'react';
import { View, Image, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './style';

const RegisterScreen = ({ navigation }) => {

    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [name, onChangeName] = React.useState(null);
    const [phone, onChangePhone] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.stretch}
                    source={require('./img/registerfoto.png')}
                />
            </View>
            <View style={styles.registerinput} >
                <TextInput
                    style={styles.registerText}
                    placeholder="Full Name"
                    value={name}
                    placeholderTextColor="#bbb"
                    onChangeText={onChangeName} />
            </View>
            <View style={styles.registerinput}>
                <TextInput
                    style={styles.registerText}
                    placeholder="Phone Number"
                    value={phone}
                    placeholderTextColor="#bbb"
                    onChangeText={onChangePhone} />
            </View>
            <View style={styles.registerinput} >
                <TextInput
                    style={styles.registerText}
                    placeholder="Email"
                    value={email}
                    placeholderTextColor="#bbb"
                    onChangeText={onChangeEmail} />
            </View>
            <View style={styles.registerinput}>
                <TextInput
                    style={styles.registerText}
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    placeholderTextColor="#bbb"
                    onChangeText={onChangePassword} />
            </View>
            <TouchableOpacity style={styles.regBtn} onPress={() => navigation.navigate('Login')}>

                <Text style={styles.textLoginBtn}>REGISTER</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.alreadyaccount}>Do you already have an account ?</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};



export default RegisterScreen;
