import { createContext, useEffect, useState } from "react";
import axios from './Axios'


const ContextApi = createContext()

export const DataProvider = ({ children }) => {

    const [getData, setGetData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            const getFetchData = await axios.get("/students")
            setGetData(getFetchData.data)
            console.log(getFetchData.data);
        }
        fetchData()
    }, [])

    return (
        <ContextApi.Provider value={{ getData, setGetData }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextApi