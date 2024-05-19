import BasicButton from "../../components/BasicButton";

// eslint-disable-next-line react/prop-types
function NhatGuestGreeting({text, handleLogin}){
    return (
        <>
        <div className="container">
            <div className="container-header2">
                <h1>{text}</h1>

            </div>
            <div className="container-body">
            <BasicButton className="container-btn" text="Login" onClick={handleLogin}/>
            </div>
        </div>
        </>
    )
}


export default NhatGuestGreeting;