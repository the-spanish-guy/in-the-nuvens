import customColors from '@app/utils/colors'
import { Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from 'react'

type AsTextType = 'text' | 'title' | 'subtitle'

type TextType = {
  as: AsTextType
  color?: string
  children: ReactNode
  mt?: string
  mb?: string
  ml?: string
  mr?: string
  pt?: string
  pb?: string
  pl?: string
  pr?: string
  width?: string
  fontSize?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  fontWeight?:
    | 'bold'
    | 'medium'
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'semibold'
    | 'extrabold'
    | 'black'
}

const Text = ({ as, children, ...props }: TextType): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()

  const textColor = useColorModeValue(customColors.title, '#FFFFFF')

  const renderText = (type: AsTextType) => {
    switch (type) {
      case 'subtitle':
        return (
          <Heading
            {...props}
            fontSize="lg"
            fontWeight="bold"
            color={props.color || textColor}
          >
            {children}
          </Heading>
        )

      case 'title':
        return (
          <Heading
            {...props}
            color={props.color || textColor}
            fontSize="3xl"
            fontWeight="bold"
          >
            {children}
          </Heading>
        )

      case 'text':
      default:
        return <Heading {...props}>{children}</Heading>
    }
  }

  return renderText(as)
}

export default Text
