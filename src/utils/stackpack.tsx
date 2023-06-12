import React from 'react';
import { returnIcon } from './iconpack';
import { IconType } from 'react-icons';
import { FaCode } from 'react-icons/fa';
import Tooltip from '../components/tooltip';


type Props = {
    skills: Array<string>;
}

type IconProps = {
  index: number;
  Icon: IconType;
  item: string;
}

const StackIcon = ({ Icon, index, item }: IconProps): JSX.Element | any => {
  return Icon === FaCode ? (
    <div className="text-base text-[#1DA1F2] m-1 py-1 px-3" key={index}>
      <Tooltip text={item}><Icon/></Tooltip>
    </div>
  ) : (<div className="text-base text-[#1DA1F2] m-1 py-1 px-3" key={index}>
      <Icon/>
    </div>)
}


const Skill = ({skills}: Props) : JSX.Element | any => {
  return skills ? skills.map((item, index) => (
    <StackIcon key={index} index={index} Icon={returnIcon(item)} item={item}/>
    // <span key={index} className="border text-sm font-thin m-1 py-1 px-3 rounded-md border-[#1DA1F2] text-[#1DA1F2]">{item}</span>
  )): null
}

export default Skill

