import React from 'react'

export default function Button({text = "click", btnClass, icon, onClick}) {
  return (
    <div>
      <button className={btnClass} onClick={onClick}>
        {icon}
        {text || "click"}
      </button>
    </div>
  )
}
