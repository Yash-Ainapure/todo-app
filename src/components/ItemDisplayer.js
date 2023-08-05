import './ItemDisplayer.css';
function ItemDisplayer({ data,dispatch,keyy }) {
   return (
      <div className="ItemDisplayer">
         {data}
         <div className='content'>
         <button onClick={()=>dispatch({ type: 'HANDLEUP', key: keyy })} className='ItemDisplayerButtons'>up</button>
         <button onClick={()=>dispatch({ type: 'HANDLEDOWN', key: keyy })} className='ItemDisplayerButtons'>down</button>
         <button onClick={()=>dispatch({ type: 'DELETE', key: keyy })} className='ItemDisplayerButtons'>X</button>
         </div>
      </div>
   )
}
export default ItemDisplayer;