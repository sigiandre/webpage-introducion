import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DigimonList = () => {
    
    const [digimon, setDigimon] = useState([]);

    useEffect(() => {
        fetchDigimon();
    }, []);

    const fetchDigimon = async() => {
        const data = await fetch("https://digimon-api.vercel.app/api/digimon");
        const digimonList = await data.json();
        setDigimon(digimonList);
    }

    return(
        <div>
            {
                digimon.map((e) => 
                    <div key={e.name}>
                        <Link to={`/digimon/name/${e.name}`}>
                            {e.name}
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default DigimonList;