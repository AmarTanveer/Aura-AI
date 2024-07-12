import React from "react";
import "./Main.css";
import { IoCompassSharp } from "react-icons/io5";
import { IoBulb } from "react-icons/io5";
import { GiBrainstorm } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { CgSearchLoading } from "react-icons/cg";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Aura AI</p>
        <img src="/src/assets/profile.jpeg" alt="Profile Pic" />
      </div>

      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className="result-title">
              <img src="/src/assets/profile.jpeg" alt="Profile Pic" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src="/src/assets/aura-logo.svg" alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <div className="intro">
            <div className="greet">
              <p>
                <span>Hello, I'm Aura.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see in India.</p>
                <IoCompassSharp className="card-icon" />
              </div>

              <div className="card">
                <p>Briefly summarize this concept: Urban planning.</p>
                <IoBulb className="card-icon" />
              </div>

              <div className="card">
                <p>Brainstorm team-bonding activites for our work retreat.</p>
                <GiBrainstorm className="card-icon" />
              </div>

              <div className="card">
                <p>Improve the readability of the following code.</p>
                <FaCode className="card-icon" />
              </div>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <IoImageOutline className="search-box-icon" />
              <IoMicOutline className="search-box-icon" />
              {input ? (
                <AiOutlineSend
                  onClick={() => {
                    onSent();
                    recentPrompt(input);
                  }}
                  className="search-box-icon"
                />
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Aura AI may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
