function greet(name) {
    var name = document.getElementById('name').value;
    document.getElementById('greeting').innerHTML = 'Good day to you, ' + name + '!';
}