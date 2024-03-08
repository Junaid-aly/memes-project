import React from 'react'
import Link from 'next/link';
import './App.css'

async function  Memes() {
const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();
const allMemes = response.data.memes
    
  return (
    <div className='container-fluid'>

    <div className='container'>
      {allMemes.map((object, index) => {
          return (
          <div
            key={index}
            className="m-5 card-data  rounded-lg shadow-2xl block  bg-white w-100">
            <div className="img-dev">
              <img src={object.url} />
            </div>
            {/* <h2>{object.name}</h2> */}
            <div className="content">
              <Link
                className="btn-meme"
                href={{
                  pathname: "/createMeme",
                  query: {
                      imgUrl: object.url,
                      id: object.id,
                    },
                }}>
                create Meme
              </Link>
            </div>
          </div>
        );
      })}
    </div>
                    </div>
  );
}

export default Memes

