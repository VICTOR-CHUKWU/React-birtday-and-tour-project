import React,{useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project';

const Tour = () => {
    const [loading, setLoading] = useState(true);
    const [tour, setTour] = useState([])
    

    const fetchApi = async () => {
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTour(tours)
        } catch (error) {
           setLoading(false);
           console.log(error) 
        }
       
    }
    const removeTour = (id) => {
        let newTour = tour.filter((item) => item.id !== id);
        setTour(newTour);
    }
    useEffect(() => {
        fetchApi()
        
    }, []);
    if(loading) {
        return(
            <Loading/>
        )
    };
    if(tour.length === 0){
        return(
            <section>
                <h2>No Tours Left</h2>
        <button className='btn' onClick={fetchApi}>Refresh</button>
            </section>
        )
    }
    return (
        <>
            
                <section>
                    <Tours tour={tour} removeTour={removeTour}/>
                </section>
            
        </>
    )
}

export default Tour;