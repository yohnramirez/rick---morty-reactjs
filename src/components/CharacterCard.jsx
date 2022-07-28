import { Heading, Box, Image, Text } from "@chakra-ui/react"

const CharacterCard = ({ name, status, species, image }) => {
  return (
    <Box>
      <Heading as='h2' size={['md', 'lg', 'lg']} textAlign='center' mb={2}>{name}</Heading>
      <Image src={image} alt={name} />
      <Text>{status}</Text>
      <Text>{species}</Text> 
    </Box>
  )
}

export default CharacterCard