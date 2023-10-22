"use client";

import React,{ createContext, useEffect, useState, window } from "react";

export const ThemeContext = createContext();


export const GetlocalTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const value = localStorage.getItem("theme");
        return value || "light";
    } else {
        // Handle the case where localStorage is not available, e.g., use a default theme.
        return "light"; // You can change this to your desired default theme.
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return GetlocalTheme();
    });

    // Rest of your component code here
    const toggle = ()=>{
        setTheme(theme==='light' ? 'dark' : 'light');
    };

    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
