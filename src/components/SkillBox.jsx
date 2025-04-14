import React from 'react'

const SkillBox = ( {name, icon}) => {
  return (
    <div className='hover:border-purple-500 hover:shadow-purple-400 hover:shadow-sm flex rounded-lg gap-1 max-w-fit border-1 border-gray-600 px-4 py-2 justify-center items-center'>
        <img className='w-8' src={icon} alt="" />
        <span className='text-gray-300 text-lg'>{name}</span>
    </div>
  )
}

export default SkillBox