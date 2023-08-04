//import ItemDisplayer from './ItemDisplayer';
import './ItemList.css';
function ItemList({length}){
   return(
      <div className="ItemList">
         <div className="ItemCount">Completed Items : {length}</div>
         <div className="Items">
            
         </div>
      </div>

   )
}
export default ItemList;