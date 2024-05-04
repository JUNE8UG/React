// import useState hook function
import {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    
    // create a useState function and assign it the isStyled variable and setIsStyled function
    // give it a starting value of false
    const [isStyled, setIsStyled] = useState(false);

     // the handleStyle function will set 'setIsStyled' to true
    function handleStyle() {
        setIsStyled(true);
    }
    // create the starting text, which will be the styleText variable
    let styleText = <p>Style me!</p>;
    
    // if isStyled is true, which in the begining it won't be, then this means the user clicked 
    // the button and so we can proceed with the styling the text
    if (isStyled) {
        // set styleText to the appropriate color using the 'activate' css class
        styleText = (
        <p class="active">
            Style me!
        </p>);
    }
    
    // render styleText variable to the screen
    // on click call the handleStyle function to perform styling
    return (
         <div>
            {styleText}
            <button onClick={() => handleStyle()}> Toggle style</button>
        </div>
    );
}
