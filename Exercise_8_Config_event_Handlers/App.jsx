export const user = {
  name: '',
};

function App() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
    console.log(name)
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>
     
      <p id="actions">
         {/* 
            create am arrow function that will except the return value of the handleCreateUser function, this will allow
            the execution of the handleCreateUser function to only be pressed on click, and allow for dynamic values (user)
            to be passed to the function 
          */}
        <button onClick={() => handleCreateUser(user)}>Create User</button>
      </p>
    </div>
  );
}

export default App;
  