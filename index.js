import figlet from "figlet";
import inquirer from "inquirer";
import gradient from "gradient-string";

// Declare a variable to store the user's name
let userName;

const greet = async () => {
  figlet("Welcome to Maersk", function (err, data) {
    console.log(data);
  });

  // Wait for 2secs
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Ask the user's name
  const { name } = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name?",
  });

  // Set the user's name
  userName = name;

  // Print the welcome message
  const msg = `Hello ${userName}!`;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
};

// Call the askName function
greet();
