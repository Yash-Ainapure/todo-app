import './App.css';
import AddItemCompo from './components/AddItemCompo';
import ItemDisplayer from './components/ItemDisplayer';
import ItemList from './components/ItemList';
import { useState } from 'react';
function App() {

  const [item, setItem] = useState([]);

  function getTodo(value) {
    setItem([...item, { itemData: value, key: item.length + 1 }]);
    console.log("length updated");
  }
  function handleUp(key) {
    console.log("up " + key);
    if (key <= 1) {
      let val = item[key - 1];//get last index item
      console.log(val);
      let newItem = [...(item.filter(it => it.key !== key)), val];
      newItem = newItem.map(it => {
        return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
      });
      setItem(newItem);
    } else {
      console.log("key is not 1");
      let val = item.filter(it => it.key === key);
      let val2 = item.filter(it => it.key === (key - 1));
      let newItem = [...(item)];
      newItem.splice(key - 2, 2, ...val, ...val2);
      newItem = newItem.map(it => {
        return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
      });
      setItem(newItem);
    }
  }

  function handleDown(key) {
    console.log("down " + key);
    if ((key) >= item.length) {
      let val = item[key - 1];//get selected index item
      console.log(val);
      let newItem = [val, ...(item.filter(it => it.key !== key))];
      newItem = newItem.map(it => {
        return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
      });
      setItem(newItem);
    } else {
      console.log("possible");
      let val = item.filter(it => it.key === key);
      let val2 = item.filter(it => it.key === (key + 1));
      let newItem = [...(item)];
      newItem.splice(key - 1, 2, ...val2, ...val);
      newItem = newItem.map(it => {
        return { itemData: it.itemData, key: newItem.indexOf(it) + 1 }
      });
      setItem(newItem);
    }
  }
  function handleX(key) {
    setItem(item.filter(it => it.key !== key));
  }

  return (
    <div className="App">
      <div className="page-header">Todo List</div>

      <AddItemCompo getTodoMedium={getTodo}></AddItemCompo>

      <ItemList length={item.length}></ItemList>

      <div className='ItemDisplayerContainer'>
        {
          item.map(item => <ItemDisplayer handleUpMedium={handleUp}
            handleDownMedium={handleDown} handleXMedium={handleX} data={item.itemData} keyy={item.key}></ItemDisplayer>)
        }
      </div>
    </div>
  );
}

export default App;
