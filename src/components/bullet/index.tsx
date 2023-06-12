import React from 'react'

type Props = {
    descBullets: Array<string>
}

const Bullet = ({descBullets}: Props) : JSX.Element | any => {
  return descBullets ? descBullets.map((item, index) => (
    <li key={index} className="py-0.5">{item}</li>
  )): null
}

export default Bullet