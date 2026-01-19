 let activeUser = ""; let currentLoc = ""; let currentAmt = 0;

    function toggleModal() { document.getElementById('landing-content').classList.add('hidden'); document.getElementById('modal-content').classList.remove('hidden'); }
    function goToLogin() { document.getElementById('website-view').classList.add('hidden'); document.getElementById('grid').classList.add('hidden'); document.getElementById('login-page').classList.remove('hidden'); document.body.style.backgroundColor = "white"; }
    
    function handleManualLogin() {
        const email = document.getElementById('manual-email').value;
        const pass = document.getElementById('manual-pass').value;
        if(email && pass) { enterDashboard(email.split('@')[0]); } 
        else { alert("Please enter both email and password"); }
    }

    function enterDashboard(user) {
        activeUser = user;
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('email-popup').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('grid').classList.remove('hidden');
        document.body.style.backgroundColor = "#0f1111";
        document.getElementById('user-display').innerText = "Account: " + user;
        
        var map = L.map('map').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        setInterval(() => { document.getElementById('clock').innerText = new Date().toLocaleTimeString(); }, 1000);
    }

    function openPayment(loc, amt) {
        currentLoc = loc; currentAmt = amt;
        document.getElementById('payment-screen').classList.remove('hidden');
        document.getElementById('pay-title').innerText = "Checkout: ₹" + amt;
    }

    function generateTicket() {
        document.getElementById('payment-screen').classList.add('hidden');
        document.getElementById('dashboard').classList.add('hidden');
        document.getElementById('ticket-screen').classList.remove('hidden');
        document.getElementById('t-user').innerText = activeUser;
        document.getElementById('t-loc').innerText = currentLoc;
        document.getElementById('t-amt').innerText = currentAmt;
    }