import {useEffect, useState} from "react";

function Case6() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const [jsonToSubmit, setJsonToSubmit] = useState("");

  useEffect(() => {
    alert('post analytics');
  }, []);
  useEffect(() => {
    alert(jsonToSubmit)
  }, [jsonToSubmit]);

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setJsonToSubmit( firstName+lastName);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        firstName: <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
        lastName: <input value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        <button type={"submit"}>전송</button>
      </form>
    </>
  )
}

export default Case6;