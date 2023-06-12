import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    key: number;
    skill: string;
    icon: IconType;
}

const SkillEntry = ({key, skill, icon}: Props) => {
  const Icon = icon;
  return (
    <div key={key} className="cursor-pointer my-3 flex gap-x-3">
      <div className="text-2xl">
        <Icon/>
      </div>
        <p className="text-sm my-auto">{skill}</p>
    </div>
  )
}

export default SkillEntry