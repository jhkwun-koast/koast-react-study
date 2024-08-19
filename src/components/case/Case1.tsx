import {useEffect, useState} from "react";

function Case1() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  //const fullName = `${firstNmae} ${lastNmae}`;

  return (
    <>
      <p>{fullName}</p>
      firstName: <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      lastName: <input value={lastName} onChange={(e)=>setLastName(e.target.value)} />
    </>
  )
}

export default Case1;