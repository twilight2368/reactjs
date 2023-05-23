import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Home(props) {
    
    const [word, setWord] = useState();
    const navigate = useNavigate();
  
    return <>
      <input type="search" placeholder="Search" className="border-4 border-red-400 border-solid rounded-md h-12 w-72 text-2xl"
                onChange={(e)=>{
                    setWord(e.target.value);
                }
            }/>
     <button  className="border-4 border-red-400 border-solid rounded-md h-12 w-20 mx-4 text-2xl"
        onClick={(e) => {
           navigate('/search/' + word);
     }}>Search</button>
    
    </>
    
}