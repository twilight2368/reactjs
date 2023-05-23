import FoodItem from '../components/FoodItem';
import {useState , useEffect} from 'react';
import AddFood from '../components/AddFood';
import {v4 as uuidv4} from 'uuid';

function Food(props) {
  const [food, setFood] = useState();


  useEffect(() => {

    fetch("http://localhost:3005/api/burger/")
      .then((response) => response.json())
      .then((data) => {
        setFood(data.burger);
      });
  }, []);

  function EditFood(id, newName, newPrice) {
    const update = food.map(
        function (e) {
            if(id == e.id){
                return{...food, id: e.id, name: newName, price: newPrice}
            }
            return e;
        }
    )
    
    setFood(update);
  }

  function SetFood(id, newName, newPrice) {
    const newFood = {
        id: id,
        name: newName,
        price: newPrice
    };
    
    setFood([...food, newFood]);

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
                )} </>: <p>Loading.........</p>
        }   

      </div>
      
      <div className='text-center m-3 pb-3 mb-0'>
        <AddFood SetFood = {SetFood}/>
      </div>

      
    </div>
  );
}

export default Food;