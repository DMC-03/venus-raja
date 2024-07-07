document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const time = document.getElementById('time').value;

    const responseDiv = document.getElementById('response');
    responseDiv.textContent = `Booking successful! Name: ${name}, Pickup: ${pickup}, Dropoff: ${dropoff}, Time: ${time}`;
});
