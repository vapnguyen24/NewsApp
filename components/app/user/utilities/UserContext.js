import React, {useContext, createContext, useState} from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const {children} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState({})

    const login = async (email, password) => {
        try {
            const response = await AxiosInstance().post('/auth/login',
            {
                email: email,
                password: password
            });
            const token = response.data.token;
            const userInf = response.data.user;
            await AsyncStorage.setItem('token', token); // luu lai token
            setUser(userInf)
            setIsLoggedIn(true); // chuyen trang thai login
            return true;
        } catch (error) {
          
            console.log('login error: ', error)
            
        }
        return false;
    }

    const register = async (email, password) => {
        try {
            const response = await AxiosInstance().post('/users/register',
            {
                email: email,
                password: password
            });
            return true;
        } catch (error) {
            console.log('register error: ', error)
        }
        return false;
    }

    const update = async (user) => {
        try {
            const response = await AxiosInstance().post('/users/update-profile',
            {
                name: user.name,
                address: user.address,
                phone: user.phone,
                avatar: user.avatar,
                dob: user.dob
            });
            const userInf = response?.data;
            setUser(userInf)
            console.log(response)
            return true;
        } catch (error) {
            console.log('update error: ', error)
            
        }
        return false;
    }

    const logout = async () => {
        try {
            const response = await AxiosInstance().get('/auth/logout');
            setIsLoggedIn(false)
            return true;
        } catch (error) {
            console.log('logout error: ', error)
            
        }
        return false;
    }

    

    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, login, register, update, logout}}>
            {children}
        </UserContext.Provider>
    )

}
