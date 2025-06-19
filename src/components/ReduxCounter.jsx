import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, customIncrease } from '../features/counterSlice'

const ReduxCounter = () => {
  const count = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
        <div>ReduxCounter</div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        <button onClick={()=>dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(customIncrease({num:10, operation:"Add"}))}>Custom Add</button>
        <button onClick={()=>dispatch(customIncrease({num:10, operation:"Sub"}))}>Custom Subtract</button>
    </>
  )
}

export default ReduxCounter