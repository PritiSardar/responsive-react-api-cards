import React from 'react'

const Cards = ({card}) => {
  return (
    <div className="bg-green-800 text-white border border-black m-5 p-3 flex flex-col gap-5 justify-start rounded-lg overflow-auto ">
      <img className='rounded-lg w-[100%]' src="https://wallpapers.com/images/hd/green-space-10r1hxj4khe0vt2i.jpg" alt="green img" />
    <span className='font-bold'>User ID : {card.userId}</span>
      <span className='font-bold'>ID : {card.id}</span>
      <h2 className='font-semibold'>{card.title}</h2>
      <p>{card.body}</p>
    </div>
  )
}

export default Cards
