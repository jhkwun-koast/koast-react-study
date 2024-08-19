import {useGetMenuName} from "../../hooks/useGetMenuName.tsx";
import Case1 from "./Case1.tsx";
import Case2 from "./Case2.tsx";
import Case3 from "./Case3.tsx";
import Case4 from "./Case4.tsx";
import {menuNames} from "../../utils/common.ts";
import Case5 from "./Case5.tsx";
import Case6 from "./Case6.tsx";
import Case7 from "./Case7.tsx";
import Case9 from "./Case9.tsx";
import Case11 from "./Case11.tsx";
import Case11Extra1 from "./Case11Extra1.tsx";
import Case11Extra2 from "./Case11Extra2.tsx";


function getComponent(value:number) {
  switch (value) {
    case 0:
      return <Case1 />
    case 1:
      return <Case2 roopCount={100}/>
    case 2:
      const userId = "shinekill";
      return <Case3 userId={userId} />
    case 3:
      return <Case4 items={[...menuNames]} />
    case 4:
      return <Case5 />
    case 5:
      return <Case6 />
    case 6:
      return <Case7 />
    case 8:
      return <Case9 />
    case 10:
      return <Case11 />
    case 11:
      return <Case11Extra1 />
    case 12:
      return <Case11Extra2 />
  }

}

function CaseIndex() {
  const menuName = useGetMenuName();

  if (!menuName) return null;

  const { value, name } = menuName;
  return (
    <>
      <h1>{name}</h1>
      { getComponent(value)}
    </>
  )
}

export default CaseIndex;