import { useEffect, useState } from "react"
import { Box } from "@chakra-ui/react";
import axios from "axios";

import CharacterList from "../components/CharacterList"
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const Home = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    
    let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;
  
    useEffect(() => {
  
      axios.get(api)
      .then(res => setCharacters(res.data.results.map(c => {
        return(
          <CharacterCard id={c.id} name={c.name} status={c.status} species={c.species} image={c.image}/>
        )
      })
      ))
      .catch(error => console.log(error))
     
    }, [api]);
  
    return (
        <Box py={5}>
          <Search setPage={setPage} setSearch={setSearch}/>
          <CharacterList characters={characters}/>
          <Pagination page={page} setPage={setPage}/>
        </Box>
    )
}

export default Home