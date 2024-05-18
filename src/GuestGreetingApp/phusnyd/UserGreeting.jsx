import BasicButton from "../../components/BasicButton";

function UserGreeting({ text, name, handleLogIn }) {
  return (
    <>
      <h1>
        {text}, {name}
      </h1>
      <BasicButton text="Logout" className="signInBtn" onClick={handleLogIn} />
    </>
  );
}

export default UserGreeting;
