import { Button, Flex } from "@chakra-ui/react";

const Pagination = ({ page, setPage }) => {

    const prev = () => {
        if (page === 1) return
        setPage(p => p - 1)
    }

    const next = () => {
        setPage(p => p + 1)
    }

    return (
        <Flex justifyContent='center' gap={5} my={5} color='brand.white'>
            <Button bgColor='brand.orange' onClick={prev}>Prev</Button>
            <Button bgColor='brand.orange' onClick={next}>Next</Button>
        </Flex>
    )
}

export default Pagination