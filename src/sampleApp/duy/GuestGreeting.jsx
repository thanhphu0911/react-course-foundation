import BasicButton from "../../components/BasicButton";

function GuestGreeting({ text, handleLogin }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">{text}</h2>
        </div>
        <div className="card-content">
          <BasicButton
            text="Login"
            className="btn-duy"
            onClick={handleLogin}
            type="button"
          />
        </div>
      </div>
      {/* <h2>{text}</h2>
      <BasicButton
        text="Login"
        className="btn"
        onClick={handleLogin}
        type="button"
      ></BasicButton> */}
    </>
  );
}

export default GuestGreeting;
