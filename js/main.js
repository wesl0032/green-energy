// Green Energy for All

// Used ClaudeAI to pinpoint errors, for content information

// Sections:
// 1. Preloader (images once page loads)
// 2. Resources (content object - 3 sub-objects)
// 3. DOM references (buttons Nodelist & content area)
// 4. handleSection (click event)
// 5. Event listeners (makes buttons click)


// Preloader
// caches three content images on page load
// loads to display when user clicks the button

function preloader() {
    // array holding file paths for images
    const imagesList = [
        "./img/solar-panel.jpg",
        "./img/lake-by-homes.jpg",
        "./img/smart-devices.jpg"
    ];

    // empty array that holds images
    const images = [];

    // loop through every path in imagesList
    // i is 0 (first item) and keeps going
    for (let i = 0; i < imagesList.length; i++) {

        // new Image() creates hidden <img> element
        images[i] = new Image();

        // setting .src triggers browser to download
        // key line that does actually caching
        images[i].src = imagesList[i];
    }

    // log confirmation to verify paths loaded correctly
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}

// window.addEventListener listens for event on browser.
window.addEventListener("load", preloader);

// Resources
// 3 sub-objects (solar, hydro, smart) 
// headingContent - text for <h2> heading
// bodyText - text for the <p> paragraph
// imgURL - file path for <img> src
// imgAlt - accessible alt text for <img>

const resources = {

    // "solar" matches data-key="solar" for btn 1
    solar: {
        headingContent: "Affordable Solar Panels",
        bodytext: `Solar energy has become one of the most accessible clean energy options for average households. 
        Government rebates and financing programs has dropped the cost of installing rooftop solar panels by 70% in the past decade. 
        The average 6 kW system can be installed for under $10,000 after incentives, and pays for itself within 6-8 years by reducing electricity bill cost. 
        Community solar programs let house and apartment renters participate too.`,

        // imgUrl is the file path 
        imgUrl: "./img/solar-panel.jpg",

        // imgAlt is text screen reader announces for image
        imgAlt: "Solar panels mounted on a red tiled residental rooftop"
    },

    // "hydro" matches data-key="hydro" for btn 2
    hydro: {
        headingContent: "Micro-Hydro Power for Rural Homes",
        bodyText: `Properties with a stream or river nearby have access to one of the most
      reliable clean energy sources available — micro-hydro power. Unlike solar or wind,
      a micro-hydro system generates electricity around the clock regardless of weather.
      Systems sized for a typical home cost between $5,000 and $20,000 depending on water
      flow and the vertical drop available. With very low maintenance requirements and a
      lifespan of 20 to 30 years, they offer an excellent long-term return on investment.
      Federal and provincial programs in Canada, as well as federal incentives in the United
      States, often cover 25 to 40 percent of installation costs, making micro-hydro one of
      the most cost-effective clean energy options for rural households.`,
      
      imgUrl: "./img/lake-by-homes.jpg",
      imgAlt: "A historic brick home beside a calm stream surrounded by lush greenery"
    },

    // "smart" matches data-key="smart" for btn 3
    smart: {
        headingContent: "Smart Home Energy Management",
        bodyText: `You don't need solar panels or a wind turbine to start cutting your energy
      bills and reducing your footprint. Smart home devices — including programmable
      thermostats, motion-activated lighting, and energy monitoring plugs — can reduce
      household electricity consumption by 15 to 30 percent with minimal upfront investment.
      Entry-level smart bulbs start at just a few dollars each, and a smart thermostat
      typically pays for itself within a year through heating and cooling savings. When
      paired with a time-of-use electricity plan, smart devices can automatically shift
      your usage to off-peak hours, cutting your bill further without any change to your
      daily routine. It is the easiest first step toward a greener, more affordable home.`,

      imgUrl: "./img/smart-devices.jpg",
      imgAlt: "A collection of smart home devices including a smart bulb, speaker and security camera"
    }
};

// DOM References
const buttons = document.querySelectorAll(".btn-group button");

const contentArea = document.getElementById("content-area");

// Handle Selection 
// moves active style to clicked button
// swaps content area to show solution

// Parameter: event is put in by browser when click occurs

function handleSelection(event) {
    // Step 1: Remove id="active-button" 
    // loop through every button in NodeList
    // i=0 (Solar), i=1 (hydro), i=2 (smart)

    for (let i = 0; i < buttons.length; i++) {
        
        if (buttons[i].hasAttribute("id")) {

            buttons[i].removeAttribute("id");
        }
    }

    // Step 2: Mark clicked button as active
    // event.target is the button the user just clicked
    // CSS rule for #active-button now applies
    event.target.setAttribute("id", "active-button");

    // Step 3: Look up right content 
    // Every button has a data-key attribute in HTML
    // key will be "solar", "hydro", or "smart"
    const key = event.target.dataset.key;

    // Destructuring { } unpacks the 4 properties
    const { headingContent, imgUrl, imgAlt, bodyText } = resources[key];

    // Step 4: Inject new content 
    // browser parses resulting string as HTML and renders img, heading, and paragraph
    contentArea.innerHTML =
    `<h2>${headingContent}</h2>
    <img src="${imgUrl}" alt="${imgAlt}">
    <p>${bodyText}</p>`;

}

// Event Listeners 
buttons.forEach(function(btn) {
    btn.addEventListener("click", handleSelection);

});
