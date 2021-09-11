import { gql } from '@apollo/client'
import { GetServerSideProps } from 'next'
import { client } from '../service/appolo-client'

interface StudentsProps {
  name: string;
  email: string;
  cpf: string;
}

export default function Home(students: StudentsProps[]) {
  return (
    <h1>Hello World</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        listStudent {
          name
          email
          cpf
        }
      }
    `
  })

  return {
    props: {
      students: data
    }
  }
}