document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');
    const alerts = document.querySelector('.success');
    var button = document.querySelector('.button');
    var grp = document.querySelector('.alert');

    yesButton.addEventListener('click', function() {
    			grp.classList.add('ok');
       alerts.innerHTML= "I love you too !";
       button.classList.add('remove');
    });

    noButton.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        noButton.style.right = `${x}px`;
        noButton.style.bottom = `${y}px`;
        yesButton.classList.add('good');
    });
});

var anim = document.querySelector('.fond2');
setTimeout(function() {
  anim.style.display = "none";
}, 6000);
