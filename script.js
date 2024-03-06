document.addEventListener("DOMContentLoaded", function() {
    var acceptCookiesBtn = document.getElementById('accept-cookies-btn');
    acceptCookiesBtn.addEventListener('click', function() {
        // Code pour accepter les cookies ici
        // Par exemple, vous pouvez définir un cookie pour indiquer que l'utilisateur a accepté les cookies
        // Vous pouvez également masquer le banner une fois que l'utilisateur a accepté les cookies
        document.getElementById('cookie-banner').style.display = 'none';
    });
});
