import { Text, Flex, Link } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex 
        color='brand.white' 
        justifyContent='space-between'
        py={[2, 3, 5]} 
        mx={[2, 3, 5]}
        direction='column'
        _before={{content: '""', border: '2px', borderColor: 'brand.white'}}
        >

        <Flex justifyContent='space-between' mt={2}>
            <Text>© 2022 
                <Link 
                    href="https://sebastianrs.netlify.app/" 
                    color='brand.orange'
                    isExternal> Sebastián Ramírez.
                </Link>
            </Text>
            <Text>Build with <Link color='brand.orange' href="https://reactjs.org/" isExternal>React</Link></Text>
        </Flex>
    </Flex>
  )
}

export default Footer