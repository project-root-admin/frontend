import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TASK, ADD_USER } from '../mutation';

const AddTaskForm = () => {
  const [taskInput, setTaskInput] = useState({
    // taskInput state initialization
  });

  const [userInput, setUserInput] = useState({
    // userInput state initialization
  });

  const [createTask, { loading: loadingTask, error: errorTask, data: dataTask }] = useMutation(CREATE_TASK);
  const [addUser, { loading: loadingUser, error: errorUser, data: dataUser }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        input: taskInput,
      },
    })
      .then((result) => {
        // Handle success
        console.log(result);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    console.log('ran');
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log('userInput', userInput);
    await addUser({
      variables: {
        input: userInput,
      },    
    })
      .then((result) => {
        // Handle success
        console.log(result);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    console.log('data2', dataUser);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Render form fields for task input */}
        <button type="submit" disabled={loadingTask}>
          Add Task
        </button>
        {errorTask && <p>Error: {errorTask.message}</p>}
      </form>
      <form onSubmit={handleCreateUser}>
        {/* Render form fields for user input */}
        <input type="text" name="firstname" placeholder="Please Enter your First Name" onChange={handleChange} />
        <input type="text" name="lastname" placeholder="Please Enter your Last Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Please Enter your Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Please Enter your Password" onChange={handleChange} />
        <button type="submit" disabled={loadingUser}>
          Create User
        </button>
        {errorUser && <p>Error: {errorUser.message}</p>}
      </form>
    </>
  );
};

export default AddTaskForm;