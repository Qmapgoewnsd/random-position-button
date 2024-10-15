window.onload = () => {
    // Open the second page in a new window
    const newWindow = window.open('index.html', '__blank', 'width=300,height=300');

    // Check if the new window is closed
    const interval = setInterval(() => {
        if (newWindow.closed) {
            // If the new window is closed, reload the main page
            clearInterval(interval);
            location.reload();
        }
    }, 500); // Check every 500 milliseconds
};
