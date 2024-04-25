import "./Card.css"
import "./index.css"

export default function Card ({name, children}) {
    return (
        <article className="card">
            <h2>{name}</h2>
            {children}
        </article> 
        

        
    );
}