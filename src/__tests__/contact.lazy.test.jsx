import { render } from "@testing-library/react";
import { expect,vi,test } from "vitest";
import createFetchMock from "vitest-fetch-mock"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";


const queryClient=new QueryClient
const fetchMocker=createFetchMock(vi)
fetchMocker.enableMocks()

test("can submit contact form",async ()=>{
    fetchMocker.mockResponse(JSON.stringify({status:"ok"}))
    const screen=render(
        <QueryClientProvider client={queryClient}>
            <Route.options.component/>
        </QueryClientProvider>
    )

    const nameInput=screen.getByPlaceholderText("Name")
    const emailInput=screen.getByPlaceholderText("Email")
    const msgTextArea=screen.getByPlaceholderText('Message')

    const testData={
        name:"Asjad",
        email:"xyz@gmail.com",
        message:"sldfjd fjsklj"
    }

    nameInput.value=testData.name
    emailInput.value=testData.email
    msgTextArea.value=testData.message

    const btn=screen.getByRole("button")
    btn.click()

    const h3=await screen.findByRole("heading",{level:3})
    expect(h3.innerText).toContain("Submitted")

    const request=fetchMocker.requests()
    expect(request.length).toBe(1)
    expect(request[0].url).toBe("/api/contact")
    expect(fetchMocker).toHaveBeenCalledWith("/api/contact",{
        body:JSON.stringify(testData),
        headers:{
            "Content-type":"application/json"
        },
        method:"POST"
    })
})