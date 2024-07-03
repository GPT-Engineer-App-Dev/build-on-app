import { Button } from "@/components/ui/button";
import { useProducts } from "@/integrations/supabase/index.js";
import { useEffect } from "react";

const Index = () => {
  const { data: products, error, isLoading } = useProducts();

  useEffect(() => {
    if (error) {
      console.error("Error fetching products:", error);
    }
  }, [error]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to Your New App</h1>
      <p className="mt-4 text-lg">This is your starting point. Customize it to your needs.</p>
      <Button className="mt-6" variant="primary">Get Started</Button>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <ul className="mt-6">
          {products?.map((product) => (
            <li key={product.id} className="mt-2">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;