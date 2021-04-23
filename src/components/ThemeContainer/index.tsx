import React from 'react'

import { ChakraProvider, ColorModeProvider, theme, Theme } from "@chakra-ui/react"
import { ThemeProvider } from '@emotion/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import '@fontsource/roboto'

const breakpoints = createBreakpoints({
   sm: "320px",
   md: "768px",
   lg: "960px",
   xl: "1200px",
   "2xl": "1440px"
 })

const customTheme: Theme = {
   ...theme,
   fonts: {
      body: 'Roboto, system-ui, sans-serif',
      heading: 'Roboto, system-ui, sans-serif',
      mono: 'Menlo, monospace',
   },
   fontWeights: {
      ...theme.fontWeights,
      normal: 400,
      medium: 600,
      bold: 700,
   },
   radii: {
      ...theme.radii,
      sm: '5px',
      md: '8px',
   },
   colors: {
      ...theme.colors,
      purple: {
         ...theme.colors.purple,
         500: '#8257e5'
      },
      gray: {
         ...theme.colors.gray,
         300: '#e1e1e6',
         600: '#29292e',
         700: '#202024',
         800: '#121214'
      }
   },
   breakpoints
}

const ThemeContainer: React.FC = ({ children }) => (
   <ChakraProvider theme={customTheme}>
      <ColorModeProvider options={{ initialColorMode: 'dark' }} value="dark">
         <ThemeProvider theme={customTheme}>
            {children}
         </ThemeProvider>
      </ColorModeProvider>
   </ChakraProvider>
)

export default ThemeContainer