import {useEffect, useState} from "react";

function Case12() {
  const [results, setResults] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
      .then(result => {
        setResults(result);
        console.info(page)
      })
  }, [ page]);



  /*useEffect(() => {
    let ignore = false;
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`).then(result => {
      if (!ignore) {
        setResults(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [page]);*/

  function handleNextPageClick() {
    setPage(page + 1);
  }

  return (
    <>
      <button onClick={()=>{handleNextPageClick()}}>next</button>
    </>
  )
}

export default Case12;