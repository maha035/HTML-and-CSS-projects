function runDigitalClock() {
    const timeDisplay = document.getElementById('time-string');
    
    setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      // Convert 24hr format to 12hr format
      hours = hours % 12;
      hours = hours ? hours : 12; // if hour is 0, make it 12
      const formattedHours = String(hours).padStart(2, '0');
      
      timeDisplay.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    }, 1000);
  }
  runDigitalClock();

  