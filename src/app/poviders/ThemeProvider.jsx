"use client"
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext); // Use useContext with the ThemeContext

  return (
    <div className={theme}>
      {children} {/* Render the children components */}
    </div>
  );
}

export default ThemeProvider;
