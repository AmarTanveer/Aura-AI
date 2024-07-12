import React from "react";
import "./Sidebar.css";
import { IoIosMenu } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { GoHistory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import run from "../../config/auraai";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { newChat, onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const runPrevChat = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className={`sidebar ${extended ? "extended" : ""}`}>
      <div className="top">
        <IoIosMenu
          onClick={() => setExtended((extended) => !extended)}
          className="side-bar-icons menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <IoIosAdd className="side-bar-icons" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => runPrevChat(item)} className="recent-entry">
                  <IoChatbox className="side-bar-icons" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <GoQuestion className="side-bar-icons" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <GoHistory className="side-bar-icons" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <IoSettingsOutline className="side-bar-icons" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
