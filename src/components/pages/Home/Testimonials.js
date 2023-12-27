import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Isabella Rodriguez",
    image: customer1Image,
    rating: [1, 1, 1, 1, 1],
    says: `I had an amazing experience! The food was delicious and the service was exceptional.`,
  },
  {
    fullName: "Daniel Anderson",
    image: customer2Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The Bruschetta is my favorite! I keep coming back for more. Highly recommended.`,
  },
  {
    fullName: "Jasmine Smith",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The Lemon Dessert is a must-try! It's like a burst of sunshine in every bite.`,
  },
  {
    fullName: "Christopher Taylor",
    image: customer4Image,
    rating: [1, 1, 1, 1, 1],
    says: `Great ambiance and friendly staff. I'll definitely be returning for another delightful meal.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
