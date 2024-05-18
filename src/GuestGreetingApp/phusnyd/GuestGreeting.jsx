import BasicButton from "../../components/BasicButton";

function GuestGreeting({ text, handleLogIn }) {
  return (
    <>
      <h1>{text}</h1>
      <BasicButton text="Login" className="signInBtn" onClick={handleLogIn} />
    </>
  );
}

export default GuestGreeting;
