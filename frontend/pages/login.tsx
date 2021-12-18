import LayoutComponent from '@app/components/Layout'
import {
  Box,
  Flex,
  Grid,
  Input,
  Button,
  Heading,
  FormLabel,
  FormControl,
  useColorModeValue
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'

const Login: NextPage = () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleLogin = () => {
    console.log({ user, password })
  }
  return (
    <LayoutComponent title="login">
      <Grid
        as="main"
        bgSize="cover"
        height="100vh"
        templateAreas="
        '. . .'
        '. form .'
        '. . .'
        "
        bgRepeat="no-repeat"
        templateRows="1fr 620px 1fr"
        bgImage="/assets/background.svg"
        templateColumns="108px 485px 1fr"
      >
        <Flex gridArea="form" flexDir="column">
          <img src="/assets/logo.png" alt="logo" width="142" height="35.68" />
          <Heading mt="40px" mb="40px" as="h1" size="lg">
            Armazene seus arquivos com facilidade
          </Heading>
          <FormControl>
            <Box
              as="div"
              height={223}
              display="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="user" id="field-user">
                Usuario
              </FormLabel>
              <Input
                id="user"
                type="text"
                value={user}
                onChange={ev => setUser(ev.target.value)}
                height={55}
                border="none"
                placeholder="Insira um nome de usuário"
                bgColor={useColorModeValue(
                  'rgba(255, 255, 255)',
                  'rgba(255, 255, 255, .03)'
                )}
              />

              <FormLabel htmlFor="password" id="field-password">
                Senha
              </FormLabel>
              <Input
                height={55}
                border="none"
                id="password"
                type="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                placeholder="Insira uma senha"
                bgColor={useColorModeValue(
                  'rgba(255, 255, 255)',
                  'rgba(255, 255, 255, .03)'
                )}
              />
            </Box>

            <Button
              mt="18px"
              w="100%"
              h="56px"
              bgColor="primary"
              onClick={handleLogin}
              _hover={{}}
            >
              ENTRAR
            </Button>
          </FormControl>
        </Flex>
      </Grid>
    </LayoutComponent>
  )
}

export default Login
