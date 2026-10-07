const itemTitle = document.getElementById('todo-title')
const itemDescription = document.querySelector('#todo-desc')
const button = document.querySelector('.btn-add')
//  document.querySelectorAll('.btn-add') ==> Array
//  document.getElementsByClassName('.btn-add') ==> Array

if (itemTitle == null || itemDescription == null || button == null) {
    throw new Error('Elemnts not found')
}

if (!itemTitle || !itemDescription || !button) {
    throw new Error('Elemnts not found')
}

if ([itemTitle, itemDescription, button].some(el => el == null)) {
    throw new Error('Elemnts not found')
}

const checkEmptyState = () => {
    const totalCount = document.getElementsByClassName('todo-item').length
    if (totalCount != 0) {
        document.querySelector('#empty-state').classList.add('hidden')
    }

    if (totalCount == 0) {
        document.querySelector('#empty-state').classList.remove('hidden')
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();


    const title = itemTitle.value
    if (title == '') {
        return;
    }

    const description = itemDescription.value

    itemTitle.value = ''
    itemDescription.value = ''

    console.log('title:', title, ' description:', description)

    const item = document.createElement('li')
    item.classList.add('todo-item')

    const titleNode = document.createElement('div')
    titleNode.classList.add('todo-title')
    titleNode.textContent = title

    const descriptionNode = document.createElement('div')
    descriptionNode.classList.add('todo-desc')
    if (description.length) {
        descriptionNode.textContent = `${description.slice(0, 50)}...`
    }

    const deleteBtn = document.createElement('div')
    deleteBtn.classList.add('btn-delete')
    const icon = document.createElement('i')
    icon.classList.add("fa-solid", "fa-trash")
    deleteBtn.appendChild(icon)

    deleteBtn.addEventListener('click', () => {
        // item.remove()
        item.addEventListener('animationend', () => {
            item.remove()
            checkEmptyState()
        })
        item.classList.add('fall-out')

    })

    item.appendChild(titleNode)
    item.appendChild(descriptionNode)
    item.appendChild(deleteBtn)

    document.getElementById('todo-list').appendChild(item)
    checkEmptyState()

})