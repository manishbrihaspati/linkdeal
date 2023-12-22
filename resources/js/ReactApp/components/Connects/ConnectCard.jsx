import React from 'react'

const ConnectCard = ({heading , icon , connected , email }) => {
    const imgUrl =  `images/react/icons/${icon}`;
  return (
    <div className='card text-center py-3'>
        <div className="card-heading">
            <h6>{connected ? email : heading}</h6>
        </div>
        <div className="img">
            <img src={imgUrl} alt="" width={90} height={90} />
        </div>
        <div className="mt-3">
          <button className='btn btn-connect'> {connected ? "Disconnect" : "Connect"} </button>
        </div>
    </div>
  )
}

export default ConnectCard
