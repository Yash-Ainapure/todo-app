import './AddItemCompo.css'
function AddItemCompo({ dispatch }) {
   let value = "";
   function handleClick(e) {
      e.preventDefault();
      dispatch({ type: "GETDATA", value: value });
   }
   function handleChange(e) {
      console.log(e.target.name, e.target.value);
      value = e.target.value;
   }
   return (
      <div className="AddItemCompo">
         <form>
            <input className="form-inner" onChange={handleChange} name="name"></input>
            <button className="form-inner" onClick={handleClick}>Add Item</button>
         </form>
      </div>
   )
}
export default AddItemCompo;