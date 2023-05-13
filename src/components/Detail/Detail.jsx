import React, { useState, useEffect } from 'react'
import styles from "./Detail.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const{id}=useParams();
    const [character,setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
    return (<>
        {character ?.name && (
        <div className={styles.tarjeta}>
         <h1>Status: {character.status}</h1>
         <h1>Specie: {character.species}</h1>
         <h1>Gender: {character.gender}</h1>
         <h1>Origin: {character.origin.name}</h1>
         <img src={character.image} alt=""/>
        </div>)}
        </>
    );
};

export default Detail