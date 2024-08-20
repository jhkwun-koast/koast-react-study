

/*function useWindowSizeStatus() {
  // 이상적이지 않습니다: Effect에서 저장소를 수동으로 구독
  const [size, setSize] = useState<number[]>([0,0]);
  useEffect(() => {
    function updateState() {
      setSize([window.innerHeight,window.innerWidth])
    }

    updateState();
    window.addEventListener('resize', updateState);
    return () => {
      window.removeEventListener('resize', updateState);
    };
  }, []);
  return size;
}*/
import { useSyncExternalStore} from "react";

function subscribe(callback:()=>void) {
  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('resize', callback);
  };
}

function getSnapshot(): string {

  return [window.innerHeight, window.innerWidth].join('@');
}

function useWindowSizeStatus() {
  return useSyncExternalStore(
    subscribe, // 동일한 함수를 전달하는 한 React는 다시 구독하지 않습니다.
    getSnapshot, // 클라이언트에서 값을 얻는 방법
    //() => true // 서버에서 값을 얻는 방법
  );
}

function Case11() {
  const [innerHeight, innerWidth] = useWindowSizeStatus().split('@');

  return (
    <>
      <p>{innerWidth}, {innerHeight}</p>
    </>
  )
}

export default Case11;