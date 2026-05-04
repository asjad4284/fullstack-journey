import Pizza from "./Pizza";

export default function order(){
    const pizzatype="pepperoni"
    const pizzasize="M"
    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select name="pizza-type" value={pizzatype}>
                            <option value="pepperoni">The Pepperoni Pizza</option>
                            <option value="pepperoni">The Big Meat Pizza</option>
                        </select>
                    </div>
                </div>
            </form>

        </div>
    )
}