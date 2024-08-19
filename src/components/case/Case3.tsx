import {useEffect, useState} from "react";

function Case3({userId}:{userId:string}) {
  const [comment, setComment] = useState('');
  /*useEffect(() => {
    setComment('');
  }, [userId]);*/


  return (
    <>
      <p>{userId} : {comment}</p>
      <input value={comment} onChange={(e)=>setComment(e.target.value)} />
    </>
  )
}

export default Case3;