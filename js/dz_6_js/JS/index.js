function createNewUser() {
    let firstName = prompt('Введіть Ваше імя');
    let lastName = prompt('Введіть Ваше призвіще');
    let birthday = prompt('Введіть Вашу дату народження (у форматі ДД.ММ.РРРР)');
    let newUser = {
        firstName,
        lastName,
        birthday,

        getLogin() {
            return (this.firstName.charAt(0).toLocaleLowerCase() + this.lastName.toLocaleLowerCase());
        },

        getAge() {
            let today = new Date();
            birthday = new Date(birthday);
            let age = today.getFullYear() - birthday.getFullYear();
            return age;
        },

        getPassword() {
            return (this.firstName.charAt(0).toUpperCase() + this.lastName.toLocaleLowerCase()) + this.birthday.slice(6);
        },
    }
return newUser;
}

const user = createNewUser();

console.log(user.getLogin());

console.log(user.getAge());

console.log(user.getPassword());