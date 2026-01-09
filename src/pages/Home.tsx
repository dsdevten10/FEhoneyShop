import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Honey Shop</h1>
        <Button label="Click Me" />
      </main>
    </div>
  );
};
