import React from 'react'

const Arrowleft = ({ color }) => {
  return (
    <div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke={color || "#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.5019 12H3.67188" stroke={color || "#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default Arrowleft
