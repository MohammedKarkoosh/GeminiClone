import "./SideBar.css";
import { CiMenuBurger } from "react-icons/ci";
import { LuCircleFadingPlus } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

function SideBar() {

  const [openSideBar, setOpenSideBar]= useState(false);
  


  return (
    <div className="side-bar">
      <div className="menu">
        <div className="menu-burger">
        <CiMenuBurger className="menu-burger-icon" size={"20px"}
        onClick={()=>setOpenSideBar(prev=>!prev)}
        />
        </div>
        <div className="new-chat">
          <LuCircleFadingPlus size={"20px"}/>
          {
            openSideBar ?
            <p>Start a New Chat</p>
            :
            null
          }
          
        </div>

          {
            openSideBar ?

        <div className="recent-chats">
          <p className="recent-title">Recent</p>
          <div className="recents-chats-title">
            <FiMessageSquare  size={"20px"}/>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
          : null
          }
      </div>
      <div className="menu-footer">
        <div className="menu-footer-item recents-chats-title">
          <MdOutlineQuestionMark  size={"20px"}/>
           {
            openSideBar ? <p>Help</p>

            :null 
           }
        </div>

        <div className="menu-footer-item recents-chats-title">
          <FaHistory  size={"20px"}/>
          {
            openSideBar ? <p>Past Activity</p>

            :null}
        </div>

        <div className="menu-footer-item recents-chats-title">
          <IoSettingsOutline size={"20px"}/>
           {
            openSideBar ?<p>Settings</p>
            :null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
