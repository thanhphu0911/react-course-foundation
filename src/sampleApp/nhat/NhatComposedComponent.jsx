import BasicButton from "../../components/BasicButton";

function NhatComposedComponent() {
return (
    <>
    <div>
        <div className="container">
            <div className="container-header">
                <h2 className="container-title">No items!</h2>
            </div>
            <div>
                <BasicButton
                    text="Increment"
                    className="btn"
                    onClick={()=>{}}
                    type="button"
                />
            </div>
        </div>
    </div>
    </>
);
}
export default NhatComposedComponent;