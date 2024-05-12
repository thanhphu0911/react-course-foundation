import BasicButton from "../../components/BasicButton";

function DuyComposedComponent() {
  return (
    <>
      <div>
        <h1>Sample App: Duy - Compose Component </h1>
        <div class="card">
          <div class="card-header">
            <h2 className="card-header-title">No items!</h2>
          </div>
          <div class="card-content">
            <BasicButton
              text="Increment"
              className="btn"
              onClick={() => {}}
              type="button"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DuyComposedComponent;
