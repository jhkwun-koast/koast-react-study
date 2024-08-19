import {Dispatch, SetStateAction, useEffect, useState} from "react";

function Toggle({ onChange }:{onChange: Dispatch<SetStateAction<boolean>>}) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 피하세요: onChange 핸들러가 너무 늦게 실행됨
  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange])

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div onClick={()=>{handleClick()}}>toggle</div>
  )
}

function Case9() {
  const [change, setChange] = useState(false);

  return (
    <>
      {String(change)}
      <Toggle onChange={setChange} />
    </>
  )
}

export default Case9;