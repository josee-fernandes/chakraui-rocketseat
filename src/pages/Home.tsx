import React from 'react'
import { Button, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react'
import Separator from '../components/Separator'

import { HiMail, HiLockClosed,  } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

/**
 * LG - Logo
 * FM - Form
 */

const Home: React.FC = () => {
   return(
      <Grid
         as="main"
         minHeight="100vh"
         padding={{
            base: '5',
            sm: '10',
            md: '16',
            lg: '0'
         }}
         templateColumns={{
            base: '1fr',
            lg: '1fr 480px 480px 1fr'
         }}
         templateRows={{
            base: '300px 480px',
            lg: '1fr 480px 1fr'
         }}
         templateAreas={{
            base: `
               'LG'
               'FM'
            `,

            lg: `
               '. . . .'
               '. LG FM .'
               '. . . .'
            `
         }}
         placeItems="center"
         
      >
         <Flex
            gridArea="LG"
            flexDir="column"
            alignItems={{
               base: 'center',
               lg: 'flex-start'
            }}
         >
            <img src="/rocketseat.svg" alt="Rocketseat" />
            <Heading
               size="2xl"
               lineHeight="shorter"
               marginTop="16"
               textAlign={{
                  base: 'center',
                  lg: 'left'
               }}
            >
               Faça seu login na plataforma
            </Heading>
         </Flex>
         <Flex
            gridArea="FM"
            width="100%"
            height="100%"
            backgroundColor="gray.700"
            borderRadius="md"
            flexDir="column"
            alignItems="stretch"
            padding="16"
         >
            <InputGroup>
               <InputLeftElement
                  pointerEvents="none"
                  children={ <HiMail /> }
                  color="#38383a"
                  fontSize="1.2em"
                  height="100%"
               />
               <Input
                  height="50px"
                  backgroundColor="gray.800"
                  focusBorderColor="purple.500"
                  borderRadius="sm"
                  placeholder="E-mail"
               />
            </InputGroup>
            <InputGroup marginTop="2">
               <InputLeftElement
                  pointerEvents="none"
                  children={ <HiLockClosed /> }
                  color="#38383a"
                  fontSize="1.2em"
                  height="100%"
               />
               <Input
                  height="50px"
                  backgroundColor="gray.800"
                  focusBorderColor="purple.500"
                  borderRadius="sm"
                  placeholder="Senha"
               />
            </InputGroup>
            <Link
               alignSelf="flex-start"
               marginTop="2"
               fontSize="sm"
               color="purple.600"
               fontWeight="bold"
               _hover={{ color: 'purple.500' }}
            >
               Esqueci minha senha
            </Link>
            <Button
               backgroundColor="purple.500"
               height="50px"
               borderRadius="sm"
               marginTop="6"
               _hover={{ backgroundColor: 'purple.600' }}
            >
               ENTRAR
            </Button>
            <Text
               textAlign="center"
               fontSize="sm"
               color="gray.300"
               marginTop="6"
            >
               Não tem uma conta? {" "}
               <Link
                  color="purple.600"
                  fontWeight="bold"
                  _hover={{ color: 'purple.500' }}
               >
                  Registre-se
               </Link>
            </Text>
            <Separator />
            <Flex alignItems="center">
               <Text fontSize="sm">Ou entre com</Text>
               <Button
                  leftIcon={<FaGithub />}
                  height="50px"
                  flex="1"
                  backgroundColor="gray.600"
                  marginLeft="6"
                  borderRadius="sm"
                  _hover={{ backgroundColor: 'purple.500' }}
               >
                  GITHUB
               </Button>
            </Flex>
         </Flex>
      </Grid>
   )
}

export default Home