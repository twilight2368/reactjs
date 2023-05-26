import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FoodItem from "../components/FoodItem";
import { Link } from "react-router-dom";

export default function FoodOne(props){
    const { id } = useParams();
    const [information, setInformation] = useState();
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();

    useEffect(()=>{
        const url = "http://localhost:3005/api/burger/" + id;
        fetch(url)
        .then((response) => response.json())
        .then(async (data)=>{    
            setInformation(data.burger);             
        })   
    }, []);

    useEffect(()=>{
        console.log(information)
    }, [information]);


    function deleteSomehing() {
        console.log("delete...")
    }

    return (
        <>

        <div>
           {
            information ? (
            <div> 
                <>
                    <FoodItem name = {information.name} price = {information.price}/>
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
            <button><Link to = "/food/">Go back</Link></button>
        </div>



        </>
    )
}