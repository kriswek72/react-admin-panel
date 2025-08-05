import { useContext } from 'react';
import { ThemeContext } from './useTheme';

export const useTheme = () => useContext(ThemeContext);