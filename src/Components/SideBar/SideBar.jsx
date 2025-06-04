import "./SideBar.css";
import { CiMenuBurger } from "react-icons/ci";
import { LuCircleFadingPlus } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="menu">
        <CiMenuBurger className="menu-burger" size={"20px"}/>

        <div className="new-chat">
          <LuCircleFadingPlus size={"20px"}/>
          <p>Start a New Chat</p>
        </div>

        <div className="recent-chats">
          <p className="recent-title">Recent</p>
          <div className="recents-chats-title">
            <FiMessageSquare />
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
      <div className="menu-footer">
        <div className="menu-footer-item recents-chats-title">
          <MdOutlineQuestionMark />
          <p>Help</p>
        </div>

        <div className="menu-footer-item recents-chats-title">
          <FaHistory />
          <p>Past Activity</p>
        </div>

        <div className="menu-footer-item recents-chats-title">
          <IoSettingsOutline />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
