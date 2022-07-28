import { Heading, Link } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom"

const LinkCard = ({ id, nameCharacter }) => {
  return (
      <Link as={ReachLink} to={`/details/${id}`} _hover={{color: 'brand.orange', textDecoration: 'none'}}>
        <Heading 
          as='h2' 
          size='md' 
          textAlign='left' 
          mb={2} 
          fontWeight='bold'>
            {nameCharacter}
        </Heading>
      </Link>
  )
}

export default LinkCard