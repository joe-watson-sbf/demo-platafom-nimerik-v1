import React from "react";
import { getAudio } from "../helpers/helper";

export const useGeneric = () => {

    const [chwaIds, setChwaIds] = React.useState([]);
    const [repons, setReponse] = React.useState({ bon: 0, move: 0 });
    
    const checkIfChoiceAlreadyExist = (id) => {
        return chwaIds.includes(id);
    }


    const handleResetGame = () => {
        setChwaIds([]);
        setReponse({ bon: 0, move: 0 });
    }

    const handleResponse = (rezilta, id) => {
        
        if(!checkIfChoiceAlreadyExist(id)) {

            setChwaIds([...chwaIds, id]);

           handleAudio(rezilta);
            rezilta && setReponse({...repons, bon: (repons.bon + 1)});
            !rezilta && setReponse({...repons, move: (repons.move + 1)});
        }
    }

    const handleAudio = (rezilta) => {
        rezilta && new Audio(getAudio('bravo', 'mpeg')).play();
        !rezilta && new Audio(getAudio('wrong')).play();
    }


    
    return {handleResponse, repons, handleResetGame, kantiteSleksyon: chwaIds.length};
}
