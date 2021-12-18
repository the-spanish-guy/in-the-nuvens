import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

type Props = {
  title?: string
  children: ReactNode
}

const LayoutComponent = ({
  title = 'Nextjs',
  children
}: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Box as="div">{children}</Box>
    </>
  )
}

export default LayoutComponent
