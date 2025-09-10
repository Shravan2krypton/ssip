document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const health = document.getElementById('health').value;
    const duration = document.getElementById('duration').value;
    const motivation = document.getElementById('motivation').value;

    const userInfo = {age, weight, health, duration, motivation};
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    window.location.href = 'treatment.html';
});