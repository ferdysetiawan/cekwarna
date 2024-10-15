'use client'

import { useState } from 'react'

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [isOpen, setIsOpen] = useState(true)
  const [direction, setDirection] = useState('left')

  const colors = ['black', 'white', 'red', 'green', 'blue']

  const handleColorChange = (color) => {
    setBackgroundColor(color)
  }

  const toggleOpen = (newDirection) => {
    if (isOpen && newDirection === direction) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
      setDirection(newDirection)
    }
  }

  return (
    <div 
      className="flex flex-col justify-end items-center min-h-screen w-full relative"
      style={{ backgroundColor }}
    >
      <div 
        className={`fixed bottom-8 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'left-1/2 transform -translate-x-1/2' 
            : direction === 'left' 
              ? '-left-2' 
              : '-right-2'
        }`}
      >
        {isOpen ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => toggleOpen('left')}
              className="absolute top-2 left-2 text-white hover:text-gray-300 focus:outline-none w-8 h-8 flex items-center justify-center"
              aria-label="Close color panel to the left"
            >
              <span className="text-2xl">&lsaquo;</span>
            </button>
            <button
              onClick={() => toggleOpen('right')}
              className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none w-8 h-8 flex items-center justify-center"
              aria-label="Close color panel to the right"
            >
              <span className="text-2xl">&rsaquo;</span>
            </button>
            <div className="flex space-x-4 mt-8">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform hover:scale-110`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                  aria-label={`Change background to ${color}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={() => toggleOpen(direction === 'left' ? 'right' : 'left')}
            className={`bg-gray-800 text-white p-2 ${
              direction === 'left' ? 'rounded-r-lg' : 'rounded-l-lg'
            } hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 w-8 h-12 flex items-center justify-center`}
            aria-label={`Open color panel from the ${direction === 'left' ? 'left' : 'right'}`}
          >
            <span className="text-2xl">
              {direction === 'left' ? '\u203A' : '\u2039'}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}