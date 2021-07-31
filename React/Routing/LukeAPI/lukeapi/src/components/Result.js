import React,{useState , useEffect} from 'react'
import axios from 'axios'
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// import { Link } from '@reach/router';

const Result = (props) => {
    const {starType , id} = props
    const [finalResult, setFinalResult] = useState("")
    const [errors,setErrors] = useState('')

    useEffect(() => {
        axios.get('https://swapi.dev/api/'+starType+'/'+id)
        .then(response=>{
            console.log(response.data);
            setFinalResult(response.data);
            setErrors('');
        })
        .catch(err=>setErrors('Not Found'))
    }, [starType,id])


    return (
        <div>
            <h2>{finalResult.name}</h2>     
            {   
            finalResult ?
            Object.keys(finalResult).map((key,index)=>{
                    return index<5 && index>0? <p key={key}>{key} : {finalResult[key]}</p> : null
                })
                :
            <h3>{errors}</h3>
            }
            
        </div>
    )
}

export default Result
