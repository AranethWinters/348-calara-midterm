'use client';
import React, { useState } from 'react';
import Header from './component/header.jsx'

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  var id;
  // Set a user input value
  const updateInput = (value) => {
    setTask(value);
  };

  // Add or edit item
  const handleAction = () => {
    if (task.trim() === '') return; // Avoid adding empty items
      // Add new item
      const newItem = {
        id: Date.now,
        value: task,
      };
      setTasks([...task, newItem]);
      console.log(task)
      setTask('');
    }

  // Function to delete item from list using id to delete
  const deleteItem = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <main className='mx-[10vw] my-[4vh]'>
      <Header />
      <div className='flex items-center justify-center gap-4'>
        <input type='text' className='border-2 rounded' placeholder='Add item...' value={task} onChange={(e) => updateInput(e.target.value)}></input>
        <button className='border-2 rounded p-1' onClick={handleAction} >Add</button>
      </div>
      <div
                style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}
            >
                {tasks.length > 0 ? (
                    tasks.map((item) => (
                        <div
                            key={item.id} // Use the unique id as the key
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <span style={{ fontSize: '1.2rem', flexGrow: '1' }}>
                                {item.value}
                            </span>
                            <span>
                                <button
                                    style={{
                                        padding: '10px',
                                        backgroundColor: '#f44336',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        marginRight: '10px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Finished
                                </button>
                            </span>
                        </div>
                    ))
                ) : (
                    <div
                        style={{ textAlign: 'center', fontSize: '1.2rem', color: '#777' }}
                    >
                        No items in the list
                    </div>
                )}
            </div>
    </main>
  );
};

export default App;