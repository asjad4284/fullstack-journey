import { expect,vi,test } from "vitest";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
import { render, renderHook,waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock"

const fetchMocker=createFetchMock(vi)
fetchMocker.enableMocks()

const testPizza={
    id:"calabrese",
    name:"The Calabrese Pizza",
    category:"Supreme",
    description:"lol pizza from Calabria",
    image:"/public/pizzas/calabrese.webp",
    size:{S:12.5,M:16.8,L:20.5}
}


test("gives null when first called",async ()=>{
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const {result}=renderHook(()=>usePizzaOfTheDay())
    expect(result.current).toBeNull()
})

test("to call the API and get the pizza of the day",async ()=>{
    fetch.mockResponseOnce(JSON.stringify(testPizza))
    const {result}=renderHook(()=>usePizzaOfTheDay())
    await waitFor(()=>{
        expect(result.current).toEqual(testPizza)
    })
    expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day")
})