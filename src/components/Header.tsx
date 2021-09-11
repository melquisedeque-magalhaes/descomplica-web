import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from '../widgets/Header/Logo'
import { NotificationNav } from '../widgets/Header/NotificationNav'
import { Profile } from '../widgets/Header/Profile'
import { SearchBox } from '../widgets/Header/SearchBox'

export function Header(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex
          as="header"
          width="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          px="6"
          align="center"
          mt="4"
        >
    
            <Logo />

            {isWideVersion && (
                <SearchBox />
            )}
        
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />

                <Profile 
                    name="Melqui Sodre" 
                    email="melqui.sodre15@gmail.com" 
                    showProfileData={isWideVersion} 
                />
                
            </Flex>
        </Flex>
    )
}