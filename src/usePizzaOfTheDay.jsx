import { useState,useEffect } from "react";

export const usePizzaOfTheDay=()=>{
    const [pizzaoftheday,setpizzaoftheday]=useState(null)

    useEffect(()=>{
        async function fetchPizzaOfTheDay() {
            const response=await fetch("/api/pizza-of-the-day")
            const data=await response.json()
            setpizzaoftheday(data)
        }
        fetchPizzaOfTheDay()
    },[])

    return pizzaoftheday
}