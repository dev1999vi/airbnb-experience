import React from 'react';
import './Card.css';
// import cardImg from '../assets/image 12card.png';
import star from '../assets/Star 1.png';

const Card = (props) => {

  let badgeText
  if(props.openSpots === 0)
  {
    badgeText = "SOLD OUT"
    
  }
  else if(props.country === "Online")
  { 
    badgeText = "ONLINE"
  }
  return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={props.img} alt='card-img' width='250px' height='350px' />
            <div className='stats'>
            <img src={star} alt='star' height='15px' />
            <span>{String(props.rating)}</span><span className='grey'>  ({props.reviewCount}) &#183; {props.country} </span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
  )
}

export default Card;