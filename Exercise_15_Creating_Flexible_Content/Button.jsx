// Button.jsx

export default function Button({children, className, mode="filled", Icon, ...props}) {
    // Todo: Build this component!
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
   let cssClass = `button ${mode}-button`;
   
    if (Icon) {
       cssClass += ' icon-button';
     }
     
    if(className) {
        cssClass += ' ' + className;
    }
     
    return (<button className={cssClass}{...props}>{children}
           {Icon && (
           <span className="button-icon">
             <Icon />
           </span>
         )}
         <span>{children}</span>
       </button>
     );
}