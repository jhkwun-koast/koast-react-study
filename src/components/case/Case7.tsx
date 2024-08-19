import {useEffect, useState} from "react";

interface Card {
  gold: boolean
}

function Case7() {
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 0) {
      setRound(r => r + 1)
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 1) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    if(isGameOver) alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard() {
    if (isGameOver) {
      throw Error('Game already ended.');
    } else {
      setCard({gold: true});
    }
  }

  /*const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ 렌더링 중에 가능한 것을 계산합니다.
  const isGameOver = round > 1;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    }

    // ✅ 이벤트 핸들러에서 다음 state를 모두 계산합니다.
    const nextCard = {gold:true};
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert('Good game!');
        }
      }
    }
  }*/

  return (
    <>
      <div onClick={handlePlaceCard} style={{width:'200px',height:'300px', backgroundColor:'red'}}>card</div>
    </>
  )
}

export default Case7;