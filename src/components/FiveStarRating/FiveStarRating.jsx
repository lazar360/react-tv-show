import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // déclarer un tableau d'étoiles
  const starList = [];

  // stocker dan une variable le nombre d'étoile pleine
  const starFillCount = Number(rating).toFixed(0);

  // stocker dans une variable si oui ou non il y a une demi étoile
  const hasStarHalf = rating - starFillCount > 0.5;  

  // stocker dans le tableau le nombre d'étoiles vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  // pusher dans le tableau les étoiles pleines
  for(let i = 1; i <= starFillCount; i++){
    starList.push(<StarFill key={"star-fill" + i}/>);
  }

  // pusher dans le tableau les demi étoiles (s'il y en a)
  if (hasStarHalf) starList.push(<StarHalf key={"star-fill"}/>);

  // pusher dans le tableau les étoiles vide
  for(let i = 1; i <= emptyStarCount; i++){
    starList.push(<StarEmpty key={"star-empty" + i}/>);
  }

  return <div>{starList}</div>;
}
