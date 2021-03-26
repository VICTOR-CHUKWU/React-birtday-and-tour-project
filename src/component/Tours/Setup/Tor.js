
import React, {useState} from 'react';

function Tor({id,image,info,price,name,removeTour}) {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="main-tour">
        <img src={image} alt="" className='main-img'/>
        <div className="item">
            <h2>{name}</h2>
            <h3>${price}</h3>
        </div>
        <p>{
        readMore? info : `${info.substring(0,200)}...`}
        <button className='btn-inline' onClick={() => setReadMore(!readMore)}>
            {readMore? '...show less': 'show more'}
        </button>
        </p>
        <button className='btn-tour' onClick={() =>removeTour(id)}>Not Interested</button>
    </div>
    )
}

export default Tor
