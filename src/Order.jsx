import { useState } from "react";
import Pizza from "./Pizza";

export default function Order(){
    const [pizzatype,setpizzatype]=useState("pepperoni")
    const pizzasize="M"
    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select 
                        onChange={(e)=>setpizzatype(e.target.value)}
                        name="pizza-type" 
                        value={pizzatype}>
                            <option value="pepperoni">The Pepperoni Pizza</option>
                            <option value="big_meat">The Big Meat Pizza</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                    checked={pizzasize === 'S'}
                                    type="radio"
                                    name="pizza-size"
                                    id='pizza-s'
                                    value='S'
                                />
                            <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzasize === 'M'}
                                    type="radio"
                                    name="pizza-size"
                                    id='pizza-m'
                                    value='M'
                                />
                            <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzasize === 'L'}
                                    type="radio"
                                    name="pizza-size"
                                    id='pizza-l'
                                    value='L'
                                />
                            <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                <div className="order-pizza">
                    <Pizza
                        name="Pepperoni"
                        description="another pep pizza"
                        image="/public/pizzas/pepperoni.webp"
                    />
                    <p>$13.37</p>

                </div>
            </form>

        </div>
    )
}