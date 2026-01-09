import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="bg-yellow-100 p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-700 mb-2 sm:mb-0">
          Honey Shop
        </h1>
        <Navbar />
      </div>
    </header>
  );
};
