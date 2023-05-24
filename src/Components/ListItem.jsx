import React from 'react'

const ListItem = (props) => {

  const css = `absolute w-2 top-0 bottom-0 left-0 bg-[${props.color[props.idx%3]}]`

  return (
    <div className='w-full bg-white h-[5rem] hover:h-[8rem] rounded-lg relative overflow-hidden px-5 py-3 sm:pt-3 transition-all ease-in-out my-2'>
        <div className={css} />
        {props.children}
        {console.log(css)}
    </div>
  )
}

export default ListItem
