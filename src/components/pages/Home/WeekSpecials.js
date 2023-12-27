import { Link } from "react-router-dom";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpg";
import "./WeekSpecials.css";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$14.99",
    description: `Enjoy our classic Greek Salad with crispy lettuce, colorful peppers, Kalamata olives, and authentic Chicago-style feta cheese. Served with crunchy garlic and rosemary croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$7.99",
    description: `Indulge in our delicious Bruschetta made from grilled bread, generously smeared with garlic, and perfectly seasoned with salt and extra virgin olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$6.50",
    description: `Satisfy your sweet tooth with our Lemon Dessert, a delightful treat straight from grandma's recipe book. Every ingredient is carefully sourced for an authentic and nostalgic flavor.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to="">
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
