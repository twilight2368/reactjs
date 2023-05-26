import EditFood from './EditFood';
import { Link } from 'react-router-dom';

function FoodItem(props) {
    return (
        <div>
            <div className="grid grid-cols-2 grid-rows-5 h-40 w-80 rounded-2xl py-2 bg-red-400">
                <div className="row-span-5">
                    <img src={require('../img/burger.png')} className='block mx-auto my-auto h-3/4 w-3/4'/>
                </div>
                
                <div> Name: <Link to = {"/food/" + props.id}>{props.name}</Link></div>
                <div> Price: {props.price}</div>
                <EditFood name = {props.name} price = {props.price} EditFood = {props.EditFood} id = {props.id} />
            </div>
        </div>
    )
}

export default FoodItem