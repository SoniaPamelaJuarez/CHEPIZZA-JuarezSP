import { useEffect, useState } from 'react';

export const useAsync = (asyncF, dependency=[]) => {
    const [data, setData] = useState();
    const [isLoad, setIsLoad] = useState(true);
    const [er, setEr] = useState();

    useEffect (() => {
        setIsLoad(true)

        asyncF().then(res => {
            setData(res)
        }).catch (er => {
            setEr(er)
        }).finally (() =>{
            setIsLoad(false)
        })
    }, dependency)

    return{
        data,
        isLoad,
        er
    }
}
