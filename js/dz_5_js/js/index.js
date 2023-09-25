function createNewUser() {
    let firstName = prompt('Введіть Ваше імя');
    let lastName = prompt('Введіть Ваше призвіще');
    let newUser = {
        firstName,
        lastName,
        getLogin() {
            return (this.firstName.charAt(0).toLocaleLowerCase() + this.lastName.toLocaleLowerCase());
        }

    }
return newUser;
}
const user = createNewUser();

console.log(user.getLogin());