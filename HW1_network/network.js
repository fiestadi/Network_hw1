//*********task***** */
//1.Сделать запрос на сервер с помощью fetch (async await) url - https://jsonplaceholder.typicode.com/users/1 и обработать ответ.
// Данные о пользователе (name, email, website) должны отображаться в карточке. Карточка также должна иметь две кнопки >  <, при клике на которые мы посылаем запрос на след. пользователя и отображаем его в карточке.

// Данные о пользователе должны быть редактируемыми. На против каждого поля должна быть иконка карандаша, при клике на который пользователь мог бы редактировать данные пользователя.

const userCard = document.querySelector('.user-card');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userWebsite = document.querySelector('#userWebsite');
const editNameIcon = document.querySelector('#editName');
const editEmailIcon = document.querySelector('#editEmail');
const editWebsiteIcon = document.querySelector('#editWebsite');
const prevUserButton = document.querySelector('#prevUser');
const nextUserButton = document.querySelector('#nextUser');

let userId = 1;

// poluchaem dannie po ID
async function fetchUser(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await response.json();
    return userData;
}

// obnovlenie dannich
function updateCard(userData) {
    userName.textContent = userData.name;
    userEmail.textContent = userData.email;
    userWebsite.textContent = userData.website;
}

// pervij polzovatel
fetchUser(userId).then(userData => updateCard(userData));

// redaktirovanie
editNameIcon.addEventListener('click', () => {
    const newName = prompt('Enter new name:');
    if (newName !== null) {
        userName.textContent = newName;
    }
});

editEmailIcon.addEventListener('click', () => {
    const newEmail = prompt('Enter new email:');
    if (newEmail !== null) {
        userEmail.textContent = newEmail;
    }
});

editWebsiteIcon.addEventListener('click', () => {
    const newWebsite = prompt('Enter new website:');
    if (newWebsite !== null) {
        userWebsite.textContent = newWebsite;
    }
});

// knopka ">"
prevUserButton.addEventListener('click', () => {
    if (userId > 1) {
        userId--;
        fetchUser(userId).then(userData => updateCard(userData));
    }
});

// knopka "<"
nextUserButton.addEventListener('click', () => {
    userId++;
    fetchUser(userId).then(userData => updateCard(userData));
});