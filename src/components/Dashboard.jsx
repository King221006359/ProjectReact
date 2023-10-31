import { useState, useEffect } from 'react'

import Card2 from './Card2'
import NavbarAdm from '../components/NavbarAdm'
import '../App.css'
import pic25 from '../assets/pic26.jpg'
import Footer from '../pages/Footer'




export function Dashboard() {






    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://klab-blog-api.onrender.com/Blog/API/post/get/all")
            .then((response) => response.json())
            .then((res) => {
                if (res) {
                    setPosts(res)
                }
            })
    }, [])



    console.log("POSTS", posts)












    return (
        <>
        <div>
           
          
            <NavbarAdm />
            
            {/* <section className='hero'> */}
             <div className='Trending'>
                <h><strong>Chart</strong><u>-tren</u><i>ding</i></h><br/>
                </div><br/><br/>
                
             <div className="contn">
           
          
       


                
            <div className="leftsd">
            <img src={pic25} className='imagee'/>
            </div>
            <div className="rightsd">
            <h><strong>Business,Travel </strong>- octob.2023</h><br /><br/>
            <h4><strong>‘Something’s going on here’: SA Startup Week connects founders to resources, inspiration and real talk</strong></h4><br />
            <p>Awareness emerged as an early theme as would-be fledgling and established entrepreneurs gathered for San Antonio Startup Week on Monday morning on the 24th floor of Frost Tower, 
                with its 360-degree views of downtown and beyond.</p>
            </div> 
            </div>

            {/* </section>

         {/* <Charts /> */}
            {/* <Link to="/Signup"><span className='create'> View Analytics</span></Link> */}
            <section className='coco grid-container'>
            {posts.length > 0 ? posts.map((post, index) => (
                    <Card2 key={index} id={post._id} name={post.postTitle} image={post.postImage} description={post.postContent}/>
                )
                ) : <p>Loading posts...</p>}
    
      
        


        </section>

       
        <Footer />
</div>
        </>
    );
}

export default Dashboard;


