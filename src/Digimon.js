import React, { useState,useEffect } from 'react';

const Digimon = (props) => {

    const [digimon, setDigimon] = useState([]);

    useEffect(() => {
        fetchDigimon()
    }, []);

    const fetchDigimon = async () => {
        const data = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${props.match.params.name}`);
        const digimonInfo = await data.json();
        setDigimon(digimonInfo);
    }

    return(
        <div>
            {
                digimon.map(e => 
                    <div>
                        <div>Nombre: {e.name}</div>
                        <div>Nivel: {e.level}</div>
                        <img src={e.img} alt="" />
                    </div>    
                )
            }
        </div>
    );
}

export default Digimon;