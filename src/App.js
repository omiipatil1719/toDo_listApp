import React, { useState, useEffect } from 'react'
import EventClick from './EventClick'
var App = () => {

  var [inputEvent, setinputEvent] = useState()
  var [items, setitems] = useState([])
  const [edittextId, setedittextId] = useState()
  const [edittitle, setedittitle] = useState()
  const [eventClick, setClickEvent] = useState(false)



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

  const editText = (id, title) => {
    setClickEvent(true)
    setedittextId(id)
    setedittitle(title)
  }



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
                        <button className='editbtn' onClick={() => editText(itemval.id, itemval.title)}></button>
                      </li>
                    </div>

                  </>
                )
              })
            }
          </ol>

        </div>

      </div>
      {
        <EventClick
          edittextId={edittextId}
          edittitle={edittitle}
          show={eventClick}
          onHide={() => setClickEvent(false)}
          items={items}
          setitems={setitems} />
      }

    </>)
}

export default App