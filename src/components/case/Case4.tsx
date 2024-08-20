import {useEffect, useState} from "react";

function Case4({items}:{items:string[]}) {
  const [selection, setSelection] = useState<string | null>(null);

  /*useEffect(() => {
    setSelection(null);
  }, [items]);*/

  /*const [prevItems, setPrevItems] = useState(items);

  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }*/
  /*const selectionId = items.find(item => item === selection) ?? null;*/

  return (
    <>
      {
        items.map((item, index)=><p key={index} onClick={()=>{setSelection(item)}} style={{color:selection === item ? 'red':'black'}}>{item}</p>)
      }
    </>
  )
}

export default Case4;