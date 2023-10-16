'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <NextThemesProvider>{children}</NextThemesProvider>;
};

export default ThemeProvider;
