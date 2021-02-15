import React from "react"
import { Box } from "@chakra-ui/react"
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";

function ToggleBtn({toggle, isOpen}){
    return(
        <Box display={{base: "block", md: "none"}} onClick={toggle}>
            {isOpen ? <MdClose /> : <MdMenu />}
        </Box>
    )
}

export default ToggleBtn;