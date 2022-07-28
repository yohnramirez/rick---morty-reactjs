import { Flex } from '@chakra-ui/react'

const CharacterList = ({ character }) => {
  return (
    <Flex wrap='wrap' gap={10} justifyContent='center' alignItems='center'>
        {character.map((c, index) => (
            <div key={index}>{c}</div>
        ))}
    </Flex> 
  )
}

export default CharacterList