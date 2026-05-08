import {usePizzaOfTheDay} from "./usePizzaOfTheDay"

const PizzaOfTheDay=()=>{
    const pizzaOfTheDay=usePizzaOfTheDay();
    if(!pizzaOfTheDay){
        return <div>Loading</div>
    }

    return (
        <div className="pizza-of-the-day">
            <h2>Pizza of the day</h2>
            <div>
                <div className="pizza-of-the-day-info">
                    <h3>{pizzaOfTheDay.name}</h3>
                    <p>{pizzaOfTheDay.description}</p>
                    <p className="pizza-of-the-day-price">
                        {pizzaOfTheDay.price}
                    </p>
                </div>
                <img src={pizzaOfTheDay.image} className="pizza-of-the-day-image" />
            </div>
        </div>
    )
}

export default PizzaOfTheDay