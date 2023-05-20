let Users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function renderUsers() {
  const Container = document.getElementById("Container");
  Container.innerHTML = "";

  Users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `<div> ${user.id}.  Name:${user.name}   Profession:${user.profession}   Age:${user.age}</div>`;
    Container.appendChild(userCard);
  });
}

// Function to filter users based on profession
function filterUsers() {
  const selectedProfession = document.getElementById("professional").value;

  if (selectedProfession === "") {
    alert("Please select a profession before clicking the Filter button.");
    return;
  }

  const filteredUsers = Users.filter(
    (user) => user.profession === selectedProfession
  );
  renderFilteredUsers(filteredUsers);
}

// Function to render the filtered list of users
function renderFilteredUsers(filteredUsers) {
  const userContainer = document.getElementById("Container");
  userContainer.innerHTML = "";

  filteredUsers.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `<div> ${user.id}.  Name:${user.name}   Profession:${user.profession}   Age:${user.age}</div>`;
    Container.appendChild(userCard);
  });
}

// Function to add a new user
function addUser() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const professionInput = document.getElementById("profession");

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const profession = professionInput.value.trim();

  if (name === "" || age === "" || profession === "") {
    alert("Please enter name , profession and age before adding a user.");
    return;
  }
  const newUser = {
    id: Users.length + 1,
    name,
    age,
    profession,
  };

  Users.push(newUser);
  renderUsers();
  // Clear the input text  field
  nameInput.value = "";
  ageInput.value = "";
  professionInput.value = "";
}

// Add event listeners
const filterButton = document.getElementById("filter");
const addUserButton = document.getElementById("addUser");

filterButton.addEventListener("click", filterUsers);
addUserButton.addEventListener("click", addUser);
