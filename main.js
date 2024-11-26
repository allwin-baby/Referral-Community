        // Switch between the pages after 10 seconds
        setTimeout(function() {
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'flex';
            document.body.style.backgroundColor = '#000'; // Black background
            document.documentElement.style.backgroundColor = '#000'; // Black background
        }, 10000); // 10000 milliseconds = 10 seconds