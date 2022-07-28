import { Flex } from '@chakra-ui/react'

const CharacterList = ({ characters }) => {
  return (
    <Flex wrap='wrap' gap={10} justifyContent='center' alignItems='center'>
        {characters.map((c, index) => (
            <div key={index}>{c}</div>
        ))}
    </Flex> 
  )
}

export default CharacterList