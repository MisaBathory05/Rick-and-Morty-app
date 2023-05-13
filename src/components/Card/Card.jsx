import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites,} = props;

   const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

   return( 
      <div className={styles.wrapperCard}>
         {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
         <button className={styles.btn} onClick={() => {onClose(id);}}>X</button>
         <img src={image} alt="character"/>
         <Link strict to={`/detail/${id}`}>
         <h1 className={styles.name}>{name}</h1>
         </Link>
         {/* <h2 className={styles.name}>{name}</h2> */}
         <div>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character));
     },
     removeFav: (id) => {
       dispatch(removeFav(id));
     },
   };
 };
 
 const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites,
   };
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
