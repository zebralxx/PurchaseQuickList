const input = document.querySelector('.input-group input');
const button = document.querySelector('.input-group button');
const shoppingList = document.querySelector('.shopping-list');
const messageContainer = document.querySelector('.message-container');

let itemId = 1;

function showMessage() {
    messageContainer.innerHTML = '';

    const alertIcon = document.createElement('img');
    alertIcon.src = '/assets/alert.svg';
    alertIcon.alt = 'alert';
    alertIcon.style.width = '20px';
    alertIcon.style.height = '20px';
    alertIcon.style.verticalAlign = 'middle';
    alertIcon.style.marginRight = '8px';

    const messageText = document.createTextNode('The item has been removed from the list');

    messageContainer.appendChild(alertIcon);
    messageContainer.appendChild(messageText);

    messageContainer.classList.remove('hidden');

    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, 2000);
}

button.addEventListener('click', function() {
    const itemText = input.value.trim();

    if(itemText !== "") {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `item${itemId}`;

        // Ícone antes do texto
        const icon = document.createElement('img');
        
        const label = document.createElement('label');
        label.setAttribute('for', `item${itemId}`);
        label.textContent = itemText;

        const trash = document.createElement('img');
        trash.src = './assets/trash.svg';
        trash.alt = '';
        trash.classList.add('trash');

        trash.addEventListener('click', function() {
            shoppingList.removeChild(li);
            showMessage();
        });

        // Ordem: checkbox -> ícone -> label -> trash
        li.appendChild(checkbox);
        li.appendChild(icon);
        li.appendChild(label);
        li.appendChild(trash);

        shoppingList.appendChild(li);

        itemId++;
        input.value = '';
    }
});
