import { useState } from "react";

export default function App() {
    
    const [selectedPrice, setSelectedPrice] = useState('$100');
    
    function updatePrice() {
        setSelectedPrice('$75');
    }
    
    return (
        <div>
            <p data-testid="price"> {selectedPrice}
            </p>

            <button onClick={() => updatePrice()}>Apply Discount</button>
        </div>
        
    );
}
  
