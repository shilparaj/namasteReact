import { createContext } from 'react';

const userInfo ={
    name: "shilpa",
    isLoggedin: "false"
}

export const UserContext = createContext(userInfo);
export const ThemeContext = createContext('light');