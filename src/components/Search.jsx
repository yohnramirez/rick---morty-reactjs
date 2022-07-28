import { Flex, FormControl, Input } from "@chakra-ui/react"

const Search = ({ setPage, setSearch }) => {

    const handleChange = e => {
        setPage(1)
        setSearch(e.target.value)
    }

    return (
        <Flex justifyContent='center' alignItems='center' m={5}>
            <FormControl>
                <Input onChange={handleChange} type='search' placeholder="Search characters" bgColor='brand.white'/>
            </FormControl>
        </Flex>
    )
}

export default Search