import { useEffect, useState} from "react"
import { optionsLimit } from "../../constants"
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'

const Search=({data,onSearch})=>{

    const [value,setValue]=useState('')
    const [showOptions,toggleShow]=useState(false)
    const [options,setOptions]=useState(data)

    const changeHandler=(e)=>{
        setValue(e.target.value)
    }

    const handleOptionClick=(option)=>{
        setValue(option)
        toggleShow(false)
        onSearch(option)
    }
    useEffect(()=>{


        setOptions(data.filter(option=>option.toLowerCase().includes(value.toLowerCase())).slice(0,optionsLimit))

    },[value,data])

    const handleblur=(e)=>{
        if(e?.relatedTarget?.className!=="optionbtn") toggleShow(false)
    }

    return(
        <div className="searchContainer" >
            <div  className="searchbox">
                <input 
                    className="searchInput"
                    value={value} 
                    onFocus={(e)=>toggleShow(true)} 
                    onBlurCapture={handleblur}
                    onChange={changeHandler} 
                    onKeyDown={(e)=>e.key==='Enter' && onSearch(value)}
                    placeholder={'Search...'} 
                />
        
                <SearchIcon sx={{ fontSize: '2rem' ,cursor:'pointer'}}  color="primary" onClick={()=>onSearch(value)}/>
            </div>
            
            {showOptions && 
            <ul className="options">
                {options.map(option=>
                    <li className="option" key={option} >
                        <button onClick={()=>handleOptionClick(option)} className="optionbtn">
                            {option}
                        </button>
                    </li>)}
            </ul>
            }
        
        </div>
    )

}

export default Search