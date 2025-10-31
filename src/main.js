import './style.css'
import 'alpinejs';

document.addEventListener('DOMContentLoaded', () => {
    const locationText = document.getElementById('location-text');
    const hiddenText = document.getElementById('hidden-text');
    

    // Fetch user's location using a free IP geolocation service (ipinfo.io)
    fetch('/api/location')
        .then(response => response.json())
        .then(data => {
            const { city, region, country } = data;
            locationText.textContent = `${city}`;

            hiddenText.style.display = 'block';
            
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            locationText.textContent = '';


        });
});



