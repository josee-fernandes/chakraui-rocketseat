import React from 'react'

import { ChakraProvider, ColorModeProvider, theme, Theme } from "@chakra-ui/react"
import { ThemeProvider } from '@emotion/react'

import '@fontsource/roboto'

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
   }
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