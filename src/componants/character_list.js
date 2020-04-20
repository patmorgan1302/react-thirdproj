import React from 'react';

const CharacterList = (props) => {
    return props.characters.map((character) => {
        return <div src={character.name} /> 

    });
};

export default CharacterList;