import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Box, Flex, Grid } from '@chakra-ui/react'
import Menu from './Menu'

type Props = {
  title?: string
  children: ReactNode
}

const LayoutComponent = ({
  title = 'Nextjs',
  children
}: Props): ReactElement => {
  return (
    <Grid
      templateAreas="
    'menuArea content'
    "
      templateColumns="240px 1fr"
      gridGap={53}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Flex gridArea="menuArea">
        <Menu />
      </Flex>

      <Flex gridArea="content">
        <Box as="div">{children}</Box>
      </Flex>
    </Grid>
  )
}

export default LayoutComponent
