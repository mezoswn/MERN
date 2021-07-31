import React , {useState} from 'react'
import {navigate} from '@reach/router'

const StarsApi = (props) => {
        const {label, data , datalabel} = props
        const[id,setId] = useState(0);
        const[starType,setstarType] = useState('planets');
    
        const idValue =(e)=>{
            setId(e.target.value)
        }
    
        const starValue =(e)=>{
            setstarType(e.target.value)
        }
    
        const findStar = (e) =>{
            e.preventDefault();
            navigate('/'+starType+'/'+id)
            setstarType('planets');
            setId('');
        }
    
        return (
            <form onSubmit={(e)=>findStar(e)}>
                <label> {label} </label>
                <select onChange={starValue}>
                    {
                        data.map((star , i) =>{
                            return <option key={i} value={star}>{star}</option>
                        })
                    }
                </select>
                <label> {datalabel} </label>
                <input onChange={idValue} value={id} type="number" placeholder="Please enter a value"></input>
                <button type="submit">Search</button>
            </form>
        )
    }

export default StarsApi

            // {Object.keys(result).map((key,index) => <p>{key}: {result[key]}</p>)}
