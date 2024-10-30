import { useState } from "react";
import { getPerson } from './getPerson';

// props can be destructured to { type, heading, children}
export function Alert({ 
    type = "information",
    heading,
    children,
    closable,
    onClose,
    }) {
        
    const [visible, setVisible] = useState(true);

    if(!visible){
        return null;
    }

    /** Handles what happens after the close button is clicked. */
    const handleCloseClick = () => {
        setVisible(false);
        if(onClose){
            onClose();
        }
    }

    return (
        <div>
            <div>
                <span role="img" 
                aria-label={
                    type === "Warning"
                        ? "warning"
                        : "information" 
                }>
                {type === "warning" ? "⚠"  : "i"}    
                </span>
                <span>{heading}</span>
            </div>
            
            { closable && (
                <button aria-label="Close" onClick={handleCloseClick}>
                    <span role="img" aria-label="Close">❌</span>
                </button>
                    )}
            
            <div>{children}</div>
        </div>
    );
}