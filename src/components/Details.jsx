import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"

const Details = () => {

    const { id } = useParams();
    const [dataDetails, setDataDetails] = useState([]);
    const { name, status, species, gender, image, origin, location } = dataDetails;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        axios.get(api)
        .then(res => setDataDetails(res.data))
        .catch(error => console.log(error))

    }, [api]);

    return(
        <Flex 
            alignItems='center' 
            justifyContent='center' 
            direction={['column', 'row']}
            h='auto' 
            py={4} 
            overflow='hidden' 
            color='brand.white'
            gap={5}>    

            <Box shadow='xl'>
                <Heading as='h2' size={['md', 'lg', 'lg']} textAlign='center' my={5}>{name}</Heading>
                <Image src={image} alt={name} borderTopRadius={5} />
                <Box 
                    bgColor={
                        status === 'Alive' && 'brand.green' || 
                        status === 'Dead' && 'brand.red' || 
                        status === 'unknown' && 'brand.softGray'
                    }  
                    borderBottomRadius={5} 
                    textAlign='center' 
                    fontWeight='bold'>{status}</Box>
            </Box>

            <Flex alignItems='start' gap={[2, 5]} direction='column' w={['300px', '200px']}>
                <Box>
                    <Heading size={['sm','md']} fontWeight='bold'>Last known location</Heading>
                    <Text size={['sm','md']}>{location?.name}</Text>
                </Box>
                <Box>
                    <Heading size={['sm','md']} fontWeight='bold'>Origin</Heading>
                    <Text size={['sm','md']}>{origin?.name}</Text>
                </Box>
                <Box>
                    <Heading size={['sm','md']} fontWeight='bold'>Specie</Heading>
                    <Text size={['sm','md']}>{species}</Text>
                </Box>
                <Box>
                    <Heading size={['sm','md']} fontWeight='bold'>Gender</Heading>
                    <Text size={['sm','md']}>{gender}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Details