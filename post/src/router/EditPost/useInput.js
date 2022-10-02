import {useState} from "react";
    const useInput = (inintValue) => {
        const [value, setValue] = useState(inintValue)
        const handlechange = (event) => {
            setValue(event.target.value)
        }
        return {
            value, 
            onChange: handlechange
        }
    }

export default useInput