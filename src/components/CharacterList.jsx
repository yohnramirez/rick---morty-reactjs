const CharacterList = ({ character }) => {
  return (
    <div>
        {character.map((c, index) => (
            <div key={index}>{c}</div>
        ))}
    </div>
  )
}

export default CharacterList