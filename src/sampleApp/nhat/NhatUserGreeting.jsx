import BasicButton from "../../components/BasicButton";

// eslint-disable-next-line react/prop-types
function NhatUserGreeting({text, name, handleLogin}){
    return (
        <>
        <div className="container">
            <div className="container-header2">

        <h1>{[text," ", name]}</h1>
            </div>
        <div className="container-body">

            <BasicButton className="container-btn" text="Logout" onClick={handleLogin}/>

        </div>
        </div>
        </>
    );
}

export default NhatUserGreeting;








