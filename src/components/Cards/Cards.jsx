import Card from '../Card/Card';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
   <div className ={styles.maindiv} >
      {characters.map((char) => {
         return (
            <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            image={char.image}
            onClose={onClose}
            />
         );
      })}
   </div>
   );
}
