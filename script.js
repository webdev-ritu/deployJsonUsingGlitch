// Get the necessary elements
const getUsersButton = document.getElementById('getUsers');
const createUserButton = document.getElementById('createUser');
const updateUserButton = document.getElementById('updateUser');
const deleteUserButton = document.getElementById('deleteUser');
const userList = document.getElementById('user-list');

// Function to fetch users from the server
async function getUsers() {
  try {
    const response = await fetch('https://puzzled-prairie-bandicoot.glitch.me/users');
    const users = await response.json();

    userList.innerHTML = '';
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
      `;
      userList.appendChild(userDiv);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    userList.innerHTML = '<p>Error fetching users.</p>';
  }
}

// Function to create a new user (replace with actual form handling)
async function createUser() {
  try {
    const newUser = { name: 'New User', email: 'newuser@example.com' }; // Example user data
    const response = await fetch('https://puzzled-prairie-bandicoot.glitch.me/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      alert('User created successfully!');
      getUsers(); // Refresh user list
    } else {
      alert('Error creating user.');
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Function to update an existing user (incomplete, requires user input and ID retrieval)
async function updateUser() {
  try {
    const userId = 1; // Replace with actual user ID (needs user input or mechanism to get ID)
    const updatedUser = { name: 'Alice', email: 'alice@example.com' }; // Example updated data

    const response = await fetch(`https://puzzled-prairie-bandicoot.glitch.me/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      alert('User updated successfully!');
      getUsers(); // Refresh user list
    } else {
      alert('Error updating user.');
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

// Function to delete a user (incomplete, requires user input and ID retrieval)
async function deleteUser() {
  try {
    const userId = 1; // Replace with actual user ID (needs user input or mechanism to get ID)

    const response = await fetch(`https://puzzled-prairie-bandicoot.glitch.me/users/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('User deleted successfully!');
      getUsers(); // Refresh user list
    } else {
      alert('Error deleting user.');
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Add event listeners to buttons
getUsersButton.addEventListener('click', getUsers);
createUserButton.addEventListener('click', createUser);
updateUserButton.addEventListener('click', updateUser);
deleteUserButton.addEventListener('click', deleteUser);