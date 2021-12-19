import LayoutComponent from '@app/components/Layout'
import customColors from '@app/utils/colors'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Progress,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Text from '@app/components/Text'
import { files, folders, mostRecent } from '@app/mocks/mostRecentViewed'
import Donut from '@app/components/Charts/Donuts'

const Home: NextPage = () => {
  const title = 'Meus Arquivos'
  return (
    <LayoutComponent title={title}>
      <Text as="title" mt="34px" mb="32px">
        {title}
      </Text>

      <Grid
        templateColumns="1fr"
        templateRows="171px 1fr"
        templateAreas="
        'mostRecent'
        'otherContent'
        "
      >
        <Flex gridArea="mostRecent" flexDirection="column" width="100%">
          <Text as="subtitle" fontSize="lg" fontWeight="bold">
            Recentes
          </Text>
          <Flex flexDir="row" width="100%" mt="16px">
            {mostRecent.map((recent, index) => (
              <Box
                mr="16px"
                pt="21px"
                pb="10px"
                key={index}
                width="107px"
                height="134px"
                display="flex"
                flexDir="column"
                borderRadius={4}
                alignItems="center"
                alignContent="center"
                bgColor={useColorModeValue(
                  customColors.label.light,
                  customColors.label.dark
                )}
              >
                <img
                  src={
                    recent.isFolder ? '/assets/folder.svg' : '/assets/file.svg'
                  }
                />
                <Text
                  as="text"
                  fontSize="sm"
                  mt="8px"
                  mb="2px"
                  fontWeight="bold"
                  color={useColorModeValue(
                    customColors.subtitle,
                    customColors.terciary
                  )}
                >
                  {recent.nome}
                </Text>
                <Text
                  as="text"
                  fontSize="sm"
                  fontWeight="light"
                  color={useColorModeValue(customColors.input, '#FFFFFF')}
                >
                  {recent.nome}
                </Text>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Flex gridArea="otherContent" mt="32px">
          <Grid
            templateColumns="1fr 1fr"
            templateRows="1fr"
            templateAreas="
              'dataContent storageUsed'
            "
          >
            <Flex gridArea="dataContent" flexDir="column">
              <Text as="subtitle" fontSize="lg" fontWeight="bold">
                Pastas
              </Text>
              <Flex flexDir="row" width="100%" mt="16px">
                {folders.map((recent, index) => (
                  <Box
                    mr="16px"
                    pt="21px"
                    pb="10px"
                    key={index}
                    width="107px"
                    height="134px"
                    display="flex"
                    flexDir="column"
                    borderRadius={4}
                    alignItems="center"
                    alignContent="center"
                    bgColor={useColorModeValue(
                      customColors.label.light,
                      customColors.label.dark
                    )}
                  >
                    <img
                      src={
                        recent.isFolder
                          ? '/assets/folder.svg'
                          : '/assets/file.svg'
                      }
                    />
                    <Text
                      as="text"
                      fontSize="sm"
                      mt="8px"
                      mb="2px"
                      fontWeight="bold"
                      color={useColorModeValue(
                        customColors.subtitle,
                        customColors.terciary
                      )}
                    >
                      {recent.nome}
                    </Text>
                    <Text
                      as="text"
                      fontSize="sm"
                      fontWeight="light"
                      color={useColorModeValue(customColors.input, '#FFFFFF')}
                    >
                      {recent.nome}
                    </Text>
                  </Box>
                ))}
              </Flex>

              <Text as="subtitle" fontSize="lg" fontWeight="bold" mt="32px">
                Arquivos
              </Text>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Data</Th>
                    <Th>Tamanho</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {files.map((recent, index) => (
                    <Tr key={index}>
                      <Td display="flex" flexDir="row">
                        <Flex
                          w="31px"
                          h="31px"
                          bgColor={useColorModeValue(
                            customColors.label.light,
                            customColors.label.dark
                          )}
                          mr="24px"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <img
                            src={
                              recent.isFolder
                                ? '/assets/folder.svg'
                                : '/assets/file.svg'
                            }
                            width="60%"
                          />
                        </Flex>
                        <Text
                          as="text"
                          fontSize="sm"
                          mt="8px"
                          mb="2px"
                          fontWeight="bold"
                          color={useColorModeValue(
                            customColors.subtitle,
                            '#FFFFFF'
                          )}
                        >
                          {recent.nome}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          as="text"
                          fontSize="sm"
                          mt="8px"
                          mb="2px"
                          fontWeight="bold"
                          color={customColors.input}
                        >
                          {recent.data}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          as="text"
                          fontSize="sm"
                          fontWeight="light"
                          color={customColors.input}
                        >
                          {recent.size}
                        </Text>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>

            <Flex gridArea="storageUsed" flexDir="column">
              <Text as="subtitle" fontSize="lg" fontWeight="bold" mb="33px">
                Armazenamento
              </Text>

              <Donut />

              <Flex flexDir="row" h="37" w="100%" gap={2}>
                <Box
                  as="div"
                  w="37px"
                  h="37px"
                  display="flex"
                  justifyContent="center"
                  borderRadius="9999"
                  bgColor={useColorModeValue(
                    customColors.label.light,
                    customColors.label.dark
                  )}
                >
                  <img src="/assets/file.svg" width="17" />
                </Box>
                <Flex
                  flexDir="column"
                  width="100%"
                  justifyContent="space-around"
                >
                  <Box
                    as="div"
                    display="flex"
                    flexDir="row"
                    justifyContent="space-between"
                  >
                    <Text as="text" fontSize="sm" fontWeight="hairline">
                      Fotos
                    </Text>

                    <Text as="text" fontSize="sm" fontWeight="hairline">
                      4,92GB
                    </Text>
                  </Box>
                  <Progress
                    colorScheme="secondary"
                    value={80}
                    height="6px"
                    borderRadius="8"
                  />
                </Flex>
              </Flex>

              <Flex flexDir="row" h="37" w="100%" mt="26px" mb="26px" gap={2}>
                <Box
                  as="div"
                  w="37px"
                  h="37px"
                  display="flex"
                  justifyContent="center"
                  borderRadius="9999"
                  bgColor={useColorModeValue(
                    customColors.label.light,
                    customColors.label.dark
                  )}
                >
                  <img src="/assets/file.svg" width="17" />
                </Box>
                <Flex
                  flexDir="column"
                  width="100%"
                  justifyContent="space-around"
                >
                  <Box
                    as="div"
                    display="flex"
                    flexDir="row"
                    justifyContent="space-between"
                  >
                    <Text as="text" fontSize="sm" fontWeight="hairline">
                      Fotos
                    </Text>

                    <Text as="text" fontSize="sm" fontWeight="hairline">
                      4,92GB
                    </Text>
                  </Box>
                  <Progress
                    colorScheme="primary"
                    value={80}
                    height="6px"
                    borderRadius="8"
                  />
                </Flex>
              </Flex>

              <Flex flexDir="row" h="37" w="100%" gap={2}>
                <Box
                  as="div"
                  w="37px"
                  h="37px"
                  display="flex"
                  justifyContent="center"
                  borderRadius="9999"
                  bgColor={useColorModeValue(
                    customColors.label.light,
                    customColors.label.dark
                  )}
                >
                  <img src="/assets/file.svg" width="17" />
                </Box>
                <Flex
                  flexDir="column"
                  width="100%"
                  justifyContent="space-around"
                >
                  <Box
                    as="div"
                    display="flex"
                    flexDir="row"
                    justifyContent="space-between"
                  >
                    <Text as="text" fontSize="sm" fontWeight="hairline">
                      Fotos
                    </Text>

                    <Text as="text" fontSize="sm" fontWeight="hairline">
                      4,92GB
                    </Text>
                  </Box>
                  <Progress
                    bgColor={useColorModeValue(
                      '#F4F4FF',
                      customColors.label.dark
                    )}
                    colorScheme="terciary"
                    value={80}
                    height="6px"
                    borderRadius="8"
                  />
                </Flex>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Grid>
    </LayoutComponent>
  )
}

export default Home
