import { expect,test,afterEach } from "vitest";
import Pizza from "../pizza";
import { render ,cleanup} from "@testing-library/react";

afterEach(cleanup)

test("alt test render on Pizza img",()=>{
    const name="My Favorite Pizza"
    const src="https://picsum.photos/200"
    const screen=render(
        <Pizza name={name} description="the best pizza" image={src}/>,
    )

    const img=screen.getByRole("img")
    expect(img.src).toBe(src)
    expect(img.alt).toBe(name)
})

test("to have default img if not provided",()=>{
    const screen=render(
        <Pizza name="Something else" description="SUPER COOL PIZZA"/>
    )
    const img=screen.getByRole("img")
    expect(img.src).not.toBe("")
})