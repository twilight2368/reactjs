import FoodItem from '../components/FoodItem';
import {useState , useEffect} from 'react';
import AddFood from '../components/AddFood';
import {v4 as uuidv4} from 'uuid';
import { useNavigate, useLocation} from 'react-router-dom';

function Food(props) {
  const [food, setFood] = useState();
 
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {

    fetch("http://localhost:3005/api/burger/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization" : "Bearer"+ " " + localStorage.getItem('accessToken'),
      },
    })
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          navigate("/login", {
            state : {
                url: location.pathname,
            }
          },);
          console.log(location)
        }
        return response.json();
      })
      .then((data) => {
        setFood(data.burger);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);


  function EditFood(id, newName, newPrice) {
    const update = food.map(
        function (e) {
            if(id === e.id){
                return{...food, id: e.id, name: newName, price: newPrice}
            }
            return e;
        }
    )
    
    setFood(update);
  }

  function SetFood(newName, newPrice) {
      const url = 'http://localhost:3005/api/burger/';
      const data = {
        name: newName,
        price: newPrice
      }

      fetch(url, {
        method:'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data)
        }
      ).then((response)=>{
            if(!response.ok){
              throw new Error ('Something went wrong');
            }

            return response.json();
      })
      .then((data)=>{
        console.log(data);
        setFood([...food, data.burger])
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  return (
    <div className='min-h-screen'>
      <div className='flex flex-row flex-wrap gap-2 justify-around'>
        {       
           food ? <>
                {food.map(
                    function(e){
                        return <FoodItem 
                                    key = {e._id}
                                    name = {e.name} price = {e.price} id = {e._id}
                                    EditFood = {EditFood}
                                />
                    }
                )} </>: <p>Loading...</p>
        }   

      </div>
      
      <div className='text-center m-3 pb-3 mb-0'>
        <AddFood SetFood = {SetFood}/>
      </div>

      
    </div>
  );
}

export default Food;