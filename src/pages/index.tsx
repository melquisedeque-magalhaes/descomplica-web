import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import {
    Box,
    Flex,
    Heading,
    Table,
    Tr,
    Checkbox,
    Thead,
    Th,
    Tbody,
    Td,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { RiPencilLine, RiDeleteBinLine } from 'react-icons/ri'

import { Header } from '../components/Header'
import { client } from '../service/appolo-client'
import { Pagination } from '../components/Pagination'
import { CreateButton } from '../components/CreateButton'


interface Students {
    _id: string;
    name: string;
    email: string;
    cpf: string;
}

interface StudentsProps {
    students: Students[];
}

export default function Home({ students }: StudentsProps) {

    console.log(students)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex direction="column" h="100vh" w="100%">
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px={["4", "6"]}
            >

                <Box flex="1" bg="gray.800" borderRadius={8} p={["6", "8"]} width="100%">

                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuarios</Heading>

                        <CreateButton url="/users/create" />
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["2", "4", "6"]} color="green.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuario
                                </Th>

                                {
                                    isWideVersion &&
                                    <Th>
                                        CPF
                                    </Th>
                                }

                                {isWideVersion && <Td></Td>}
                            </Tr>
                        </Thead>
                        {students.map(student => (
                            <Tbody key={student._id}>
                                <Tr>
                                    <Td px={["2", "4", "6"]}>
                                        <Checkbox colorScheme="pink" />
                                    </Td>

                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">{student.name}</Text>
                                            <Text fontSize="sm" color="gray.300">{student.email}</Text>
                                        </Box>
                                    </Td>

                                    {
                                        isWideVersion && (
                                            <Td>
                                                {student.cpf}
                                            </Td>
                                        )
                                    }

                                </Tr>
                            </Tbody>
                        ))}
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await client.query({
        query: gql`
      query {
        listStudent {
            _id
            name
            email
            cpf
        }
      }
    `
    })

    return {
        props: {
            students: data.listStudent
        }
    }
}