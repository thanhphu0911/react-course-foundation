import BasicButton from '../../components/BasicButton';

function PhuComposedComponent() {
  return (
    <>
      <div className="container">
        <div className="banner">
          <h1 className='heading'>No Items!</h1>
        </div>
        <div style={{
          textAlign: 'right'
        }}>
          <BasicButton 
            text="Create"
            className="btn nhat_button" 
            onClick={() => {}}
            type="button"
          />
        </div>

      </div>
    </>
  );
}

export default PhuComposedComponent;
