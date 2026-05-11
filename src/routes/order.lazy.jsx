import { useEffect,useState,useContext } from "react";
import Pizza from "../Pizza";
import Cart from "../Cart"
import { CartContext } from "../contexts";

export default function Order(){
    const [pizzatype,setpizzatype]=useState("pepperoni")
    const [pizzasize,setpizzasize]=useState("M")
    const [loading,setloading]=useState(true)
    const [pizzatypes,setpizzatypes]=useState([])
    const [cart,setCart]=useContext(CartContext)

    let price,selectedpizza;

    async function checkout() {

        setloading(true)
        await fetch("/api/order",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({cart}),

        });
        setCart([])
        setloading(false)
    }

    if(!loading){
        selectedpizza=pizzatypes.find((pizza)=>pizzatype===pizza.id);
        price=selectedpizza.sizes[pizzasize]
    }

    useEffect(() => {
        fetchpizzatypes();
    }, []);

    
    async function fetchpizzatypes() {
        const pizzasRes = await fetch("/api/pizzas");
        const pizzasJson = await pizzasRes.json();
        setpizzatypes(pizzasJson);
        setloading(false);
    }

    return (
        <div className="order-page">
            <div className="order">
                <h2>Create Order</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setCart([...cart,{pizza:selectedpizza,size:pizzasize,price}])
                }}>
                    <div>
                        <div>
                            <label htmlFor="pizza-type">Pizza Type</label>
                            <select 
                            onChange={(e)=>setpizzatype(e.target.value)}
                            name="pizza-type" 
                            value={pizzatype}>
                                {pizzatypes.map((pizza)=>(
                                    <option key={pizza.id} value={pizza.id}>{pizza.name}</option>
                                ))}
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
                                        onChange={(e)=>setpizzasize(e.target.value)}
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
                                        onChange={(e)=>setpizzasize(e.target.value)}
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
                                        onChange={(e)=>setpizzasize(e.target.value)}
                                    />
                                <label htmlFor="pizza-l">Large</label>
                                </span>
                            </div>
                        </div>
                        <button type="submit">Add to Cart</button>
                    </div>
                    <div className="order-pizza">
                        {!loading && selectedpizza && (
                            <>
                                <Pizza
                                    name={selectedpizza.name}
                                    description={selectedpizza.description}
                                    image={selectedpizza.image}
                                />
                                <p>${price}</p>
                            </>
                        )}
                    </div>
                </form>
            </div>
            {loading? <h2>Loading...</h2>:<Cart checkout={checkout} cart={cart}/>}
        </div>
    )
}