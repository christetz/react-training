import Rect, {useReducer} from 'react'

export function FooBar() {
  const [hello, dispatch] = useReducer((state, action) => {

    return state;
  })

  return <>
    <h1>{hello}</h1>
    <input type="text" onChange={evt => dispatch({type: 'TEXT_CHANGED', text: evt.target.value})}
    </>
}