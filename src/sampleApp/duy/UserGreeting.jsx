import BasicButton from "../../components/BasicButton";

function UserGreeting({ text, name, handleLogin }) {
  return (
    <>
      <div className="card">
        <div className="banner">
          <h2 className="card-header-title">
            {text} {name}
          </h2>
        </div>
        <div className="card-content">
          <BasicButton
            text="Logout"
            className="btn-duy"
            onClick={handleLogin}
            type="button"
          />
        </div>
      </div>
     
    </>
  );
}

export default UserGreeting;
