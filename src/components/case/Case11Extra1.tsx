import {useEffect, useState, startTransition, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ListState, setFilteredItems} from "../../features/listSlice.ts";


function Case11Extra1() {
  const dispatch = useDispatch();
  const items = useSelector<ListState, string[]>((state) => state.list.items);
  const filteredItems = useSelector<ListState, string[]>((state) => state.list.filteredItems);
  const [filter, setFilter] = useState('');
  const [localFilteredItems, setLocalFilteredItems] = useState<string[]>([]);

  useEffect(() => {
    // 필터링 결과를 로컬 상태로 동기화
    setLocalFilteredItems(filteredItems);
  }, [filteredItems]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);

    // startTransition으로 비동기적으로 필터링 처리
    startTransition(() => {
      const newFilteredItems = items.filter(item => item.toLowerCase().includes(newFilter.toLowerCase()))
      .map(item => {
        // 추가로 복잡한 연산 (예: 문자열 변환, 연산 등)
        for (let i = 0; i < 1000; i++) {
          item = item.split('').reverse().join('');
        }
        return item;
      });
      dispatch(setFilteredItems(newFilteredItems));
    });
  };

  return (
    <div>
      <input value={filter} onChange={handleInputChange} placeholder="Filter items" />
      <ul>
        {localFilteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Case11Extra1;