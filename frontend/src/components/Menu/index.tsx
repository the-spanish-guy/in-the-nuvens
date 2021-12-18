import {
  Box,
  Heading,
  Menu as ChakraMenu,
  MenuItem,
  useColorModeValue
} from '@chakra-ui/react'
import { BsFillTrashFill, BsStarFill, BsPeopleFill } from 'react-icons/bs'
import { MdHome } from 'react-icons/md'
import React, { ReactElement } from 'react'
import customColors from '@app/utils/colors'
import { useRouter } from 'next/router'

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

const CustomMenuItem = ({ menuData }: { menuData: menuDataType[] }) => {
  const router = useRouter()
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
          onClick={() => router.push(menu.path)}
        >
          <Heading fontFamily="Manrope" fontWeight="600" size="sm">
            {menu.name}
          </Heading>
        </MenuItem>
      ))}
    </ChakraMenu>
  )
}

const Menu = (): ReactElement => {
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
          <img src="/assets/logo.png" width="121" />
        </Box>
        <CustomMenuItem menuData={menuData} />
      </Box>
      <Box as="div" w="31px" h="31px">
        <img src="/assets/moon.svg" width="100" />
      </Box>
    </Box>
  )
}

export default Menu
