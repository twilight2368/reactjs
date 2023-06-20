import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FoodItem from "../components/FoodItem";
import { Link } from "react-router-dom";
import EditFood from "../components/EditFood";

export default function FoodOne(props){
    const { id } = useParams();
    const [information, setInformation] = useState();
    const [temp, setTemp] = useState();
    const [loading, setLoading] = useState(true);
    const [change, setChange] = useState(false);
    
    const navigate = useNavigate();

    useEffect(()=>{
        const url = "http://localhost:3005/api/burger/" + id;
        fetch(url)
        .then((response) => response.json())
        .then(async (data)=>{    
            setInformation(data.burger);
            setTemp(data.burger);       
            console.log(temp);   
        })   
    }, []);
   
    function UpdateData(id) {
        const url = 'http://localhost:3005/api/burger/' + id;
        fetch(url, {method: 'PUT', 
                    headers: {
                        "content-type":  "application/json"
                    }, body: JSON.stringify(temp)})
        .then((response) =>{ 
            if (!response.ok) {
                throw new Error ('Something went wrong')
            }
            return response.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    

    return (
        <>

        <div>
           {
            information ? (
            <div> 
                <>
                   <div className="m-2">
                   <input type="text" required value = {temp.name} onChange={(e)=>{
                            setTemp({...temp, name: e.target.value})
                            setChange(true);
                            console.log(temp);
                   }}/>
                   </div>
                   <div className="m-2">
                   <input type="text" required value = {temp.price} 
                          onChange={(e)=>{
                            setTemp({...temp, price: e.target.value})
                            setChange(true);
                            console.log(temp);
                   }}/>
                   </div>

                   {
                        change ? <>
                            <div>
                                <button onClick={(e)=>{
                                        setTemp({...temp, information})
                                        setChange(false)
                                }}>Cancel</button>
                            </div>

                            <div>
                                <button onClick={() => {UpdateData(temp._id)}}>Update</button>
                            </div> 
                            </>: null
         
                     }
                </>
            </div>
            ) : <p>Loading ...</p>
           }
        </div>

        <div>
            <button onClick= {() => {
                  const url = 'http://localhost:3005/api/burger/' + information._id;
                  fetch(url, {method: 'DELETE'}).then((response)=>{
                       if (!response.ok) {
                           throw new Error (' Something went wrong! ');
                       }
                       navigate('/food/')
                  }).catch((error)=>{
                        console.log(error);
                  })
            }} >Delete</button>

            <div> <button><Link to = "/food/">Go back</Link></button></div>
           
        </div>
  


        </>
    )
}