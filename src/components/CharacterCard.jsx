import { Heading, Box, Image, Text, Flex } from "@chakra-ui/react"

const CharacterCard = ({ name, status, species, image }) => {
  return ( 
    <Box borderRadius={5} overflow='hidden' bgColor='brand.gray' color='brand.white'>
      <Image src={image} alt={name} />
      <Box padding={2}>
        <Heading as='h2' size='md' textAlign='left' mb={2} fontWeight='bold'>{name}</Heading>
        <Flex gap={2}>
          <Box 
            bgColor={
              status === 'Alive' && 'brand.green' || 
              status === 'Dead' && 'brand.red' || 
              status === 'unknown' && 'brand.softGray'
            } 
            px={1}>

            <Text fontSize='sm' fontWeight='bold'>{status}</Text>
          </Box>
          <Text fontSize='sm' fontWeight='bold'>{species}</Text>
        </Flex>
      </Box> 
    </Box>
  )
}

export default CharacterCard