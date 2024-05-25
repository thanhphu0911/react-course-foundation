import NhatGuestGreeting from "./NhatGuestGreeting";
import NhatUserGreeting from "./NhatUserGreeting";
import { useState } from "react";

export default function HanndleApp() {
    const [login, setLogin] = useState(false);

    function handleLogin() {
        setLogin(!login)
        
    }
    return (
        <>
        <div className="handleApp">
            {login ? ( <NhatUserGreeting text= "Welcome to" name="Nhat" handleLogin={handleLogin}/> )
            : ( <NhatGuestGreeting text="Please sign up" handleLogin={handleLogin}/> )
            }
        </div>
        </>
    )
}