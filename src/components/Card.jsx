import {Link} from "react-router-dom"
import '../App.css'
// import {IoPersonCircle} from 'react-icons/io'


const Card = ({id,name,image,description}) => {
    return (
        <>
            <div className='Cardi'>
               <img src={image} />
               <strong><h4>{name}</h4></strong>
                 <p><strong></strong>{description}</p>
                
                <Link to={`/Singlepage/${id}`}><span className="ree"> Read more</span></Link>
               
               

           </div>



        </>
    );
}

export default Card;

