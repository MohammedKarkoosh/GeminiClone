import React from "react";
import "./Main.css";
import NavBar from "../NavBar/NavBar";
import { LuGitCompare } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineSummarize } from "react-icons/md";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";

function Main() {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="greetings">
          <p>
            <span>Hello, Mo</span>
          </p>
          <p>How Can I Help You?</p>
        </div>
        <div className="prompt-cards">
          <div className="prompt-card">
            <p>
              Loaction Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi
            </p>
            <LuGitCompare className="image" size={"50px"} />
          </div>

          <div className="prompt-card">
            <p>
              Give Ideas Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eligendi
            </p>
            <FaRegLightbulb className="image" size={"20%"} />
          </div>

          <div className="prompt-card">
            <p>
              Code Idea Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi
            </p>
            <FaCode className="image" size={"50px"} />
          </div>
          <div className="prompt-card">
            <p>
              summizer Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi
            </p>
            <MdOutlineSummarize className="image" size={"50px"} />
          </div>
        </div>

        <div className="main-footer">
          <div className="search-box">
            <input type="text" placeholder="Enter Prompt" />
            <div className="search-icons">
              <LuGalleryHorizontalEnd size={"20px"}/>
              <FaMicrophone size={"20px"}/>
              <BiSolidSend size={"20px"}/>
            </div>
          </div>
          <p className="footer-infor">

              Gemeni Can Display inaccurate Information, so double check the information
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
