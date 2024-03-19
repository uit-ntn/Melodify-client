import { BsCollectionPlay } from "react-icons/bs";
import { FaHouse, FaMicrophoneLines, FaPodcast } from "react-icons/fa6";
import { BiPulse } from "react-icons/bi";

const MenuList = [
  {
    id: 1,
    icon: <FaHouse />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
  },
  {
    id: 3,
    icon: <FaMicrophoneLines />,
    name: "Artist",
  },
  {
    id: 4,
    icon: <BsCollectionPlay />,
    name: "Albums",
  },
  {
    id: 5,
    icon: <FaPodcast />,
    name: "Podcast",
  },
];

export { MenuList };
