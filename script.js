// Get the deployed JSON Server URL
const apiUrl = 'https://puzzled-prairie-bandicoot.glitch.me/'; 

// Function to fetch all users
async function fetchUsers() {
  try {
    const response = await fetch(`${apiUrl}/users`);
    const users = await response.json();
    // Display the users in the HTML (e.g., in a table or list)
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Function to create a new user
async function createUser(newUser) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });
    const createdUser = await response.json();
    console.log('User created:', createdUser);
    // Refresh the user list
    fetchUsers();
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Function to update a user
async function updateUser(userId, updatedUser) {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    });
    const updatedUser = await response.json();
    console.log('User updated:', updatedUser);
    // Refresh the user list
    fetchUsers();
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

// Function to delete a user
async function deleteUser(userId) {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}`, {
      method: 'DELETE'
    });
    console.log('User deleted.');
    // Refresh the user list
    fetchUsers();
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Event listeners for buttons
document.getElementById('createUserButton').addEventListener('click', () => {
  const newUser = {
    // Get user data from input fields
    name: document.getElementById('nameInput').value,
    email: document.getElementById('emailInput').value
  };
  createUser(newUser);
});

document.getElementById('updateUserButton').addEventListener('click', () => {
  const updatedUser = {
    // Get updated user data (e.g., name: "Alice")
  };
  updateUser(1, updatedUser); // Update user with ID 1
});

document.getElementById('deleteUserButton').addEventListener('click', () => {
  deleteUser(1); // Delete user with ID 1
});

// Initial fetch of users

fetchUsers();