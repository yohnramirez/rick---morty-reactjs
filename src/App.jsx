import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import axios from "axios";

import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import Pagination from "./components/Pagination";

const App = () => {

  const [character, setCharacter] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
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

  if(loading) return "Loading..."

  return (
    <Flex direction='column' alignItems='center' justifyContent='center' wrap='wrap'>
      {/* <Flex alignItems='center' justifyContent='center' wrap='wrap'> */}
        <CharacterList character={character}/>
      {/* </Flex> */}

      <Pagination
        goNextPage={nextPageUrl ? goNextPage : null}
        goPrevPage={prevPageUrl ? goPrevPage : null}
      />
    </Flex>
  )
}

export default App