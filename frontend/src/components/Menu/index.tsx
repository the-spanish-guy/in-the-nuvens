import React, { ReactElement } from 'react'

import {
  BsSun,
  BsMoon,
  BsStarFill,
  BsPeopleFill,
  BsFillTrashFill
} from 'react-icons/bs'
import {
  Box,
  Flex,
  Heading,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Menu as ChakraMenu
} from '@chakra-ui/react'
import { MdHome } from 'react-icons/md'
import { useRouter } from 'next/router'
import customColors from '@app/utils/colors'

type menuDataType = {
  key: number
  name: string
  path: string
  icon: JSX.Element
}
const menuData: menuDataType[] = [
  {
    key: 1,
    path: '/',
    name: 'Meus Arquivos',
    icon: <MdHome size="20" />
  },
  {
    key: 2,
    path: '/shared',
    name: 'Compartilhados',
    icon: <BsPeopleFill size="20" />
  },
  {
    key: 3,
    path: '/stars',
    name: 'Favoritos',
    icon: <BsStarFill size="20" />
  },
  {
    key: 4,
    path: '/trash',
    name: 'Lixeira',
    icon: <BsFillTrashFill size="20" />
  }
]

const CustomMenuItem = ({
  menuData
}: {
  menuData: menuDataType[]
  colorMode: 'dark' | 'light'
}) => {
  const router = useRouter()
  const isNotColor = useColorModeValue(customColors.inactive, '#FFFFFF')
  const color = useColorModeValue(customColors.primary, customColors.primary)
  const bgColor = useColorModeValue(
    customColors.label.light,
    customColors.label.dark
  )

  const isEquals = (toVerify: string): boolean => router.pathname === toVerify

  return (
    <ChakraMenu>
      {menuData.map(menu => (
        <MenuItem
          key={menu.key}
          _hover={{
            bgColor: customColors.label.dark,
            color: customColors.primary,
            borderRadius: 4
          }}
          mb="30px"
          p="8px"
          icon={menu.icon}
          color={isEquals(menu.path) ? color : isNotColor}
          bgColor={isEquals(menu.path) ? bgColor : 'transparent'}
          borderRadius={isEquals(menu.path) ? '4' : '0'}
          onClick={() => router.push(menu.path)}
        >
          <Heading fontFamily="Manrope" fontWeight="semibold" size="sm">
            {menu.name}
          </Heading>
        </MenuItem>
      ))}
    </ChakraMenu>
  )
}

const Menu = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      as="div"
      pl="24px"
      pt="37px"
      pb="24px"
      height="100vh"
      width="100vw"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      __css={{
        boxShadow: `-7.97203px 0px 53.8112px ${useColorModeValue(
          '#CCD8EC',
          'rgba(1, 1, 1, 0.47)'
        )}`
      }}
    >
      <Box as="div" w="80%">
        <Box as="div" mb="91px">
          {colorMode === 'light' ? (
            <img src="/assets/logo-light.png" width="121" />
          ) : (
            <img src="/assets/logo.png" width="121" />
          )}
        </Box>
        <CustomMenuItem menuData={menuData} colorMode={colorMode} />
      </Box>

      <Flex
        justifyContent="center"
        alignItems="center"
        border={`1px solid ${customColors.primary}`}
        w="40px"
        h="40px"
        borderRadius="4"
        onClick={toggleColorMode}
        cursor="pointer"
        color={customColors.primary}
      >
        {colorMode === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
      </Flex>
    </Box>
  )
}

export default Menu
