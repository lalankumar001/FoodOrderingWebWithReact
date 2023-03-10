import styles from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealsItem from './MealsItem/MealsItem';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Indian Thali",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: " Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Momos",
    description: "Healthy...and green...",
    price: 18.99,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealsItem  key={meal.id} meal={meal}/>);
  return (
    <div>
      <section className={styles.meals}>
        <Card>
       <ul>{mealsList}</ul>
       </Card>
      </section>
    </div>
  );
};
export default AvailableMeals;
