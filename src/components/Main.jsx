import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {listAction, listSelector} from '../redux/reducer'
import { fetchUser } from '../redux/reducer';

const Main = () => {

    const dispatch = useDispatch();

    const list = useSelector(listSelector);

    useEffect(() => {
    dispatch(fetchUser());
    }, []);

  return (
    <div>
        {
            list.map((item,index)=>{
                return(
                    <div>
                        {item.name}<br/>
                        {item.email}
                        <br /><br />
                        <hr />
                    </div>
                )
            })
        }     
    </div>
  )
}
export default Main;