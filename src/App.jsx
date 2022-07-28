import { useState, useEffect } from "react";
import { Flex, Input } from "@chakra-ui/react";
import axios from "axios";

import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import Pagination from "./components/Pagination";

const App = () => {

  const [character, setCharacter] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    let cancel;

    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.info.next);
        setPrevPageUrl(res.data.info.prev);
        setCharacter(res.data.results.map(i => 
          (
            <CharacterCard name={i.name} status={i.status} species={i.species} image={i.image}/>
          )
        ));
      })
      .catch(error => console.log(error))

    return () => cancel()

  }, [currentPageUrl]);

  const goNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const goPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  const handleChange = e =>{
    setSearch(e.target.value)
    filterCharacter(e.target.value)
  }

  const filterCharacter = input => {
    let result = character.filter( e => {
      if(e.props.name.toString().toLowerCase().includes(input.toLowerCase())){
        return e
      }
    })

    setCharacter(result)
  }

  if(loading) return "Loading..."

  return (
    <>
      <Flex justifyContent='center' alignItems='center' margin={5}>
        <Input 
          type='search' 
          placeholder='Search characters' 
          _placeholder={{ opacity: 0.5, color: 'brand.100' }}
          onChange={handleChange}
          />
      </Flex>
      <Flex direction='column' alignItems='center' justifyContent='center' mt={10}>
          <CharacterList character={character}/>

        <Pagination
          goNextPage={nextPageUrl ? goNextPage : null}
          goPrevPage={prevPageUrl ? goPrevPage : null}
        />
      </Flex>
    </>
  )
}

export default App