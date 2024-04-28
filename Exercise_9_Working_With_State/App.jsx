// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

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
  