import { Box, Flex, Image } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex alignItems='center' justifyContent='center' pt={5}>
        <Image src="/images/logo.webp" alt="Rick and Morty" w={[60, 80, 80]}/>
    </Flex>
  )
}

export default Header