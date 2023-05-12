

function Dialog(props) {
    return (
      <div className="dialog">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    );
  };
  
  export default Dialog;