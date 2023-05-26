import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Notfound from "../components/NotFound";


export default function Search(props) {
  const [something, setSomething] = useState();
  const [notfound, setNotfound] = useState(false);
  const navigate = useNavigate();

  let { mean } = useParams();

  useEffect(() => {
    
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + mean)
      .then((response) => {
          if (response.status === 404) {
            setNotfound(true);
          } else if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
          } else {
            return response.json();
          }
        })
      .then((data) => {
        setSomething(data[0].meanings);
        
      }).catch((error) => {
        console.error(error);
      });;
      }, [mean]);

  if (notfound) {
    return <div><Notfound/></div>
  }else{
    return (
      <div>
      
        {something ? 
          <div>{ something.map(function (e) {
              return (
                <div className='text-2xl'>
                  {e.partOfSpeech}:{e.definitions[0].definition}
                </div>
              );
          })}
          </div>
          : <p>Loading.........</p>}
      </div>
    );
  }

}