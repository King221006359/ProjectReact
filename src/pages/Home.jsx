import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/navbar'
import '../App.css'
import Pic1 from '../assets/pic25.jpg'

import Footer from './Footer'




export function Home() {
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
        <Navbar />
        <div>
           
           
            
            
            {/* <section className='hero'> */}
             <div className='Trending'>
                {/* <h><strong>Z-</strong><u>tren</u><i>ding</i></h><br/> */}
                </div><br/><br/>
             <div className="contn-Home">
                
           
            {/* <img src={pic25} className='imagee'/> */}
            <img src ={Pic1} className='pice'/>
            <div className="leftsde">
            <h><strong>Business,Travel </strong>- octob.2023</h><br /><br/>
            </div>
            <div className="rightsiede">
            
            <h4><strong>‘Something’s going on here’: SA Startup Week connects founders to resources, inspiration and real talk</strong></h4><br />
            <p>Awareness emerged as an early theme as would-be fledgling  
                with its 360-degree views of downtown and beyond.</p>
            </div>
            </div>

            {/* </section> */}

            <section className='coco grid-container'>
            {posts.length > 0 ? posts.map((post, index) => (
                    <Card key={index} name={post.postTitle} image={post.postImage} author={post.author} description={post.postContent} link={post.link}  id={post._id}/>
                )
                ) : <p>Loading posts...</p>}
    
      
        


        </section>

       
        <Footer />
</div>
        </>
    );
}

export default Home;

