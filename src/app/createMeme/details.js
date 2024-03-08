import React from 'react'
import './page.css'

function Details(props) {
     const { searchParams } = props;
  return (
    <div>
      <div className="container-details">
        {!fetchApi ? (
          <div className="main-card">
            <img src={searchParams.imgUrl}/>
            <div className="inputField">
              <input
                type="text"
                placeholder="enter text1"
                onChange={(e) => setText1(e.target.value)}
              />
              <input
                className="input2"
                type="text"
                placeholder="enter text2"
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
            <div className="btnDev">
              <button className="gen-btn" onClick={genrateImg}>
                Genrate Meme
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="user-Img">
              <div className="">
                <h2>Happy Hacking!!</h2>
              </div>
              <img src={fetchApi} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Details
