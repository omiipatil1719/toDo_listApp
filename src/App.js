import React, { useState, useEffect } from 'react'

var App = () => {

  var [inputEvent, setinputEvent] = useState("")

  var [items, setitems] = useState([])

  

  var itemEvent = (e) => {
    setinputEvent(e.target.value)
  }


  var addList = () => {


    const newArr = [...items];
    newArr.unshift({
      id: new Date().toISOString(),
      title: inputEvent
    });
    setitems([...newArr])

    setinputEvent('');

  }

  var deleteItem = (id) => {
    var x = items.filter(item => item.id !== id);
    setitems(x)
    console.log("delete")
  }

  useEffect(() => {



  }, []);



  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo list</h1>
          <br />
          <input type="text" id='inputval' value={inputEvent} placeholder='Add_a_Items' onChange={itemEvent} />
          <button className='add' onClick={addList}>+</button>
            
          <ol>
            {
              items.map((itemval) => {
                return (
                  <>
                    <div className='itembox'>
                      <button className='deletebtn' onClick={() => deleteItem(itemval.id)}></button>
                      <li key={itemval.id}>{itemval.title}
                      <input />
                      </li>

                    </div>

                  </>
                )
              })
            }
          </ol>
        </div>

      </div>


    </>)
}

export default App