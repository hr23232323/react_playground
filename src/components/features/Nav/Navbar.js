import React from "react"
import NavbarContainer from './NavbarContainer'
import Logo from './Logo'
import ToggleBtn from './ToggleBtn'

function Navbar(){
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return(
        <NavbarContainer>
            <Logo
            w="100px"
            color={["white", "white", "primary.500", "primary.500"]}
            />
            <ToggleBtn toggle={toggle} isOpen={isOpen} />

        </NavbarContainer>
    )
}

export default Navbar;