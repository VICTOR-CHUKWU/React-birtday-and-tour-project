import React,{useState} from 'react';
import {Data} from '../data'

function Birthday() {

    const [people, setPeople] = useState(Data);
    const RemoveItem = (id) => {
        const newPeople = people.filter((item)=>{
            return item.id !== id;
        })
        setPeople(newPeople)
    }
    return (
        <div className='main'>
           <h1>{people.length} Birthday Today</h1> 
           {
               people.map((item) => {
                   return (
                       <div key={item.id} className='item'>
                        <img src={item.img} alt=""/>
                        <div className='flex-down'>
                        <h3>{item.name}</h3>
                        <p>{item.age}</p>
                        </div>
                        <button className='btn' onClick={()=> RemoveItem(item.id)}>
                            Delete
                        </button>
                       </div>
                   )
               })
           }
           <button className='btn' onClick={() => {setPeople([])}}>
               Clear All
           </button>
        </div>
    )
}

export default Birthday
