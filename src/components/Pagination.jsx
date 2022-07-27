import { Button, Flex } from "@chakra-ui/react";

const Pagination = ({ goNextPage, goPrevPage }) => {

    return (
        <Flex gap={4} mt={5}>
            {goPrevPage && <Button bgColor='brand.100' color='brand.500' onClick={goPrevPage}>Previous</Button>}
            {goNextPage && <Button bgColor='brand.100' color='brand.500' onClick={goNextPage}>Next</Button>}
        </Flex>
    )
}

export default Pagination