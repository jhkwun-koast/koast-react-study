import {useEffect, useMemo, useState} from "react";

function Case2({roopCount}:{roopCount:number}) {
  const [firstName, setFirstName] = useState('Taylor');
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(Array.from({length:roopCount}, (_,i)=>i).reduce<number>((acc, curr) => acc + curr, 0));
  }, [roopCount]);

  //const sum = Array.from({length:roopCount}, (_,i)=>i).reduce<number>((acc, curr) => acc + curr, 0);

  /*const sum = useMemo(() => Array.from({length:roopCount}, (_,i)=>i).reduce<number>((acc, curr) => acc + curr, 0),
    [roopCount]);*/


  return (
    <>
      <p>{firstName}, {sum}</p>
      firstName: <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

    </>
  )
}

export default Case2;