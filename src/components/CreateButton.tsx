import LinkNext from "next/link"
import { RiAddLine } from 'react-icons/ri'
import { Button, Icon, useBreakpointValue } from '@chakra-ui/react'

interface CreateButtonProps {
    url: string;
}

export function CreateButton({ url }: CreateButtonProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <LinkNext href={url} passHref>
            <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                cursor="pointer"
            >
                <Icon
                    fontSize="20"
                    as={RiAddLine}
                />
                { isWideVersion ? "Criar novo" : ''}
            </Button>
        </LinkNext>
    )
}