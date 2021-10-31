var selection = document.querySelector("select");
var result = document.querySelector("p")
var link = document.querySelector("a");
var text = selection.options[selection.selectedIndex].text;


selection.addEventListener("change", ()=>{
    result.innerText = selection.options[selection.selectedIndex].value;
    link.innerHTML = selection.options[selection.selectedIndex].text + " Support Website";
    
    switch(link.innerHTML){
        case "Depression Support Website":
            return link.href = "https://www.nhs.uk/mental-health/conditions/clinical-depression/treatment/";
            break;
        case "Anxiety Support Website" :
            return link.href = "https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/overview/";
            break;
        case "OCD Support Website" :
            return link.href = "https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/";
            break;
        case "ADHD Support Website" :
            return link.href = "https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/";
            break;
        case "PTSD Support Website" :
            return link.href = "https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/overview/";
            break;
        case "Bipolar Disorder Support Website" :
            return link.href = "https://www.nhs.uk/mental-health/conditions/bipolar-disorder/overview/";
           

    }

    console.log(text);
})