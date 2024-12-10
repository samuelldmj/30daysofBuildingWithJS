//get the minutes data from the list element and sum them up.

const videosClass = [...document.querySelectorAll('[data-time]')];

const seconds = videosClass.map(node => node.dataset.time).map(timeNodes =>
    {
        const [min, sec] = timeNodes.split(':').map(parseFloat);
        return (min * 60) + sec; 
    }).reduce((total, vidSec) => total + vidSec);

    console.log(seconds)

    // let secondsLeft = seconds;
    // const hours = Math.floor(secondsLeft / 3600);
    // secondsLeft = secondsLeft % 3600; 

    // const minutes = Math.floor(secondsLeft / 60);
    // secondsLeft = secondsLeft % 60; 

    // console.log(hours, minutes);


    const totalSeconds = videosClass.reduce((total, node) => {
        const [min, sec] = node.dataset.time.split(':').map(parseFloat);
        return total + (min * 60) + sec; 
    }, 0); // Start with 0 seconds
    console.log(totalSeconds);
    
    


