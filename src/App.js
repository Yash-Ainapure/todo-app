import './App.css';
import AddItemCompo from './components/AddItemCompo';
import ItemDisplayer from './components/ItemDisplayer';
import ItemList from './components/ItemList';
import { useReducer } from 'react';
function App() {

  const [item, dispatch] = useReducer(itemReducer, []);

  function itemReducer(item, action) {
    switch (action.type) {
      case 'DELETE':
        return item.filter(it => it.key !== action.key);
      case 'GETDATA':
        return [...item, { itemData: action.value, key: item.length + 1 }]
      case 'HANDLEUP':
        if (action.key <= 1) {
          let val = item[action.key - 1];//get last index item
          console.log(val);
          let newItem = [...(item.filter(it => it.key !== action.key)), val];
          newItem = newItem.map(it => {
            return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
          });
          return newItem;
        } else {
          console.log("key is not 1");
          let val = item.filter(it => it.key === action.key);
          let val2 = item.filter(it => it.key === (action.key - 1));
          let newItem = [...(item)];
          newItem.splice(action.key - 2, 2, ...val, ...val2);
          newItem = newItem.map(it => {
            return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
          });
          return newItem;
        }
      case 'HANDLEDOWN':
        if ((action.key) >= item.length) {
          let val = item[action.key - 1];//get selected index item
          console.log(val);
          let newItem = [val, ...(item.filter(it => it.key !== action.key))];
          newItem = newItem.map(it => {
            return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
          });
          return newItem
        } else {
          console.log("possible");
          let val = item.filter(it => it.key === action.key);
          let val2 = item.filter(it => it.key === (action.key + 1));
          let newItem = [...(item)];
          newItem.splice(action.key - 1, 2, ...val2, ...val);
          newItem = newItem.map(it => {
            return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
          });
          return newItem
        }
      default:
        return console.log("switch case didn't matched");
    }
  }
  return (
    <div className="App">
      <div className="page-header">Todo List</div>

      <AddItemCompo dispatch={dispatch}></AddItemCompo>

      <ItemList length={item.length}></ItemList>

      <div className='ItemDisplayerContainer'>
        {
          item.map(item => <ItemDisplayer dispatch={dispatch} data={item.itemData} keyy={item.key}></ItemDisplayer>)
        }
      </div>
    </div>
  );
}

export default App;
