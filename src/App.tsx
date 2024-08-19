import Nav from "./components/Nav.tsx";
import Content from "./view/Content.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setItems} from "./features/listSlice.ts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 대량의 데이터를 초기화 (10000개의 항목 생성)
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
    dispatch(setItems(items));
  }, [dispatch]);
  return (
    <div style={{display:"grid", gridTemplateColumns: "400px 1fr", gap: "20px", height: "100vh" /* 전체 화면 높이 */}}>
      <Nav />
      <Content />
    </div>

  )
}

export default App
