import React from 'react';
import Tor from './Tor';

function Tours({tour,removeTour}) {
    return (
        <section>
           
           <h1>Our Tours</h1>
            <div className="line"></div>
            <div>
                {
                    tour.map((item) => {
                        return (
                            <Tor key={item.id} {...item} removeTour={removeTour}></Tor>
                            
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Tours
