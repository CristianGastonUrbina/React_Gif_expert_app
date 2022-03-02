import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categories) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getGifs(categories)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                })


            })

    }, [categories])


    return state


}

