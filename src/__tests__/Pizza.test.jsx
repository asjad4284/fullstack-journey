import { expect,test } from "vitest";
import Pizza from "../pizza";
import { render } from "@testing-library/react";

test("alt test render on Pizza img",async ()=>{
    const name="My Favorite Pizza"
    const src="https://picsum.photos/200"
    const screen=render(
        <Pizza name={name} description="the best pizza" image={src}/>,
    )

    const img=screen.getByRole("img")
    expect(img.src).toBe(src)
    expect(img.alt).toBe(name)
})