import React from 'react'

const Button = (props) => {
  return (
    <div>
           <button className='px-6 py-1 border-white bg-purple-700 hover:text-purple-700 transition-all  rounded-full border-2 text-white hover:bg-white  hover:border-purple-600  '>
                {props.title}
        </button>
    </div>
  )
}

export default Button