import { useSelector, useDispatch } from 'react-redux';
import {change, MenuState} from "../features/menuSlice.ts";
import {menuNames} from "../utils/common.ts";

function Nav() {
  const menu = useSelector((state: MenuState) => state.menu.value);
  const dispatch = useDispatch();
  return (
    <div style={{borderRight:"1px solid black", paddingRight:"10px", height:"100vh"}}>
      current menu : {menu}
      <ul>
        {
          menuNames.map((menuName, index) => <li style={{color:index === menu? 'red':'black'}} key={index} onClick={() => dispatch(change(index))}>{menuName}</li>)
        }
      </ul>
    </div>
  )
}

export default Nav