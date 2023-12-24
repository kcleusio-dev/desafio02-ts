import {
  ChakraProvider,
  Input,
  Box,
  Center,
} from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { login } from "../services/login";
import { ButtonComp } from "./Button";


export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#FEEBC8' padding='25px'>
        <Header />
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="palavra passe" />
          <Center>
            <ButtonComp onClick={login}
              texto='Login'
              props={{ colorScheme: 'teal', size: 'sm', width: '100%', marginTop: '5px' }} />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}