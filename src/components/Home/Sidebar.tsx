import { FaAngleRight } from "react-icons/fa"
import Dlogo from "../../svg/Dlogo"
import { Link } from "react-router-dom"
import { RxAvatar } from "react-icons/rx"
import { CiSearch } from "react-icons/ci";
import { PiTelevisionLight } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineMovie } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { IconType } from "react-icons"
import { useState } from "react";

const sidebarList = [
  { Icon: RxAvatar, title: "My Space" },
  { Icon: CiSearch, title: "Search" },
  { Icon: IoMdHome, title: "Home" },
  { Icon: PiTelevisionLight, title: "TV" },
  { Icon: MdOutlineMovie, title: "Movies" },
  { Icon: MdOutlineSportsBaseball, title: "Sports" },
  { Icon: TbCategory, title: "Categories" },
]

const Sidebar = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <aside className="fixed top-0 left-0 py-10 px-2 bg-gradient-to-r from-gray-900 to-transparent h-screen w-48">
      <Link to='/' className="flex gap-2 flex-col items-center w-min">
        <Dlogo />
        <span className="text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold bg-yellow-400 bg-opacity-10">
          <p className="text-yellow-500">Subscribe</p>
          <FaAngleRight fill="yellow" />
        </span>
      </Link>
      <div className="sidebar__list flex flex-col gap-6 py-8 pl-8" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {
          sidebarList.map((item, i) => <SidebarItem isVisible={isVisible} key={i} Icon={item.Icon} title={item.title} />)
        }
      </div>
    </aside>
  )
}

interface ISidebarItem {
  Icon: IconType;
  title: string;
  isVisible: boolean;
}

export function SidebarItem({ Icon, title, isVisible }: ISidebarItem) {

  return (
    <Link to="#" className="flex justify-start items-center text-xl font-semibold transition-all hover:scale-110 hover:translate-x-3 group">
      <Icon className="opacity-60 group-hover:opacity-100 text-2xl" />
      <p className={`text-gray-300 group-hover:text-gray-100 group-hover:font-bold transition-all pb-1 ${isVisible ? 'opacity-100 translate-x-3' : '-translate-x opacity-0'}`}>{title}</p>
    </Link>
  )
}


export default Sidebar