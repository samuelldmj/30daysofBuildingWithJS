
//i want to automatically check all checkboxes in between the first and the lastChecked.

//1
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//4) // Variable to store the last checked checkbox
let lastChecked;

//3 create function
function checkHandling(e){
    // console.log(e);

    // 7) keep track of checks from the first to the lastChecked
    let inBetween = false;
    //======= (7)

    // 6) validating if user hands is on shiftKey and checked.
    //i want the highlight to work when the user hold shift key and click checked
    //this.checked is the same as the input field that is checked .checked is a boolean
    if(e.shiftKey && this.checked){
        

        //8 keeping track of each checkboxes checked from the first checkbox with the hand on shiftKey to the lastChecked
        //used a loop to determine or distinguish the range from first to last
        checkboxes.forEach(checkbox => {
            //checkbox represent each input check field
            // If the checkbox is either the clicked one or the last clicked, toggle inBetween
         // These are the boundaries that will define which checkboxes should be checked when the user holds Shift and clicks.   
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
                checkbox.style.backgroundColor = 'lightblue';
            }
        })
        //========
        

    }
    //======

     // Update the last checked checkbox
     if (this.checked) {
        lastChecked = this;
    }

    //5) save to the input field that is checked.
    //so that we would know where our checked end .
    lastChecked = this;
}

//2 /// Add event listener for all checkboxes
checkboxes.forEach(input => input.addEventListener('click', checkHandling));




