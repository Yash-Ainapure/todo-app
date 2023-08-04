import './AddItemCompo.css'
function AddItemCompo({ getTodoMedium }) {
   let value="";
   function handleClick(e) {
      e.preventDefault();
      getTodoMedium(value);
   }
   function handleChange(e){
      console.log(e.target.name,e.target.value);
      value=e.target.value;
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