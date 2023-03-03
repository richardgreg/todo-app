import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';

const style = {

}

export default function Todo({todo}) {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox"/>
        <p className={style.todo}>{todo}</p>
      </div>
      <button>{<FaRegTrashAlt/>}</button>
    </li>
  )
}
