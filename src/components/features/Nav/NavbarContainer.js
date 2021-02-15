import React from "react"
import { Flex } from "@chakra-ui/react"

function NavbarContainer({children, ...props}){
    return(
        <Flex   as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                bg={["green.500", "green.500", "transparent", "transparent"]}
                color={["green", "green", "green.700", "green.700"]}
                {...props}       
            >
            {children}
        </Flex>

    )
}

export default NavbarContainer;