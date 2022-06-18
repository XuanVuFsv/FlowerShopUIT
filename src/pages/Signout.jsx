import React from 'react'
import { useParams } from 'react-router-dom';
import './Signout.css'

const Signout = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <><div className='signout'>Bạn {name} đã đăng xuất. Hẹn gặp lại bạn lần sau</div>
    <img className='goodbye' src='https://img.freepik.com/free-photo/time-say-goodbye-inscription-white-paper-sheet-white-wine-glass-glass-gold-engagement-ring-concept-deterioration-relations-people_76255-380.jpg?w=2000'></img></>
  )
}

export default Signout