import './ItemDisplayer.css';
function ItemDisplayer({ data,handleUpMedium,handleXMedium,handleDownMedium,keyy }) {
   function handleUp(){
      handleUpMedium(keyy);
   }
   function handleDown(){
      handleDownMedium(keyy);
   }
   function handleX(){
      handleXMedium(keyy);
   }
   return (
      <div className="ItemDisplayer">
         {data}
         <div className='content'>
         <button onClick={handleUp} className='ItemDisplayerButtons'>up</button>
         <button onClick={handleDown} className='ItemDisplayerButtons'>down</button>
         <button onClick={handleX} className='ItemDisplayerButtons'>X</button>
         </div>
      </div>
   )
}
export default ItemDisplayer;