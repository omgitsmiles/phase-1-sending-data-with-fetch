// // Add your code here

function submitData(name, email) {
    const postObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    };
    return fetch('http://localhost:3000/users', postObj)
    .then(res => res.json())
    .then(json => contact(json.id))
    .catch(contact)
}

function contact(newId) {
    document.getElementsByTagName('body')[0].innerHTML = newId
    document.body.append('Unauthorized Access')
}



// submitData('name, name@name.com')

// function submitData(name, email) {
//     return fetch('http://localhost:3000/users'
//     .then(resp => resp.json())
//     .then(access => access), {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             'name': name,
//             'email': email
//         })
//     });
// }

// const data = {
//     name: 'Steve',
//     email: 'steve@steve.com'
// }

// function submitData(name, email) {
//     return fetch('http://localhost:3000/user', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(data)
//         });
//     }