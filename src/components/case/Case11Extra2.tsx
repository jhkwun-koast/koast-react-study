import { useState, startTransition, ChangeEvent, useSyncExternalStore} from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import {ListState, setFilteredItems} from "../../features/listSlice.ts";
import store from "../../store/store.ts";


function subscribe(callback: () => void) {
  const unsubscribe = store.subscribe(callback);
  return unsubscribe;
}

function getSnapshot() {
  return store.getState().list.filteredItems;
}

function useFilteredItems() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

function Case11Extra2() {
  const dispatch = useDispatch();
  const items = useSelector<ListState, string[]>((state) => state.list.items);
  const filteredItems = useFilteredItems();
  const [filter, setFilter] = useState('');

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
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Case11Extra2;