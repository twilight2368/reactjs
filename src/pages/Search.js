import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Search(props) {
  const [something, setSomething] = useState();

  let { mean } = useParams();

  useEffect(() => {
    
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + mean)
      .then((response) => response.json())
      .then((data) => {
        setSomething(data[0].meanings);
        
      });
  }, [mean]);

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
