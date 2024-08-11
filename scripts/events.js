// Attach an event listener to the document that will execute the rest of the code when the document is loaded and fully parsed
document.addEventListener("DOMContentLoaded", function () {

  const eventsContainer = document.getElementById("eventsContainer");
  const cityFilter = document.getElementById("cityFilter");

  // Data that will be used to populate the event cards
  // url key is omitted because this is stubbed data. Link will point to the current page
  const eventsData = [
    { 
      title: "The Burley Q", 
      date: "March 21, 2024", 
      city: "chicago", 
      venue: "Red Velvet Cabaret",
      descriptionLead: "Experience the allure of burlesque at The Burley Q.",
      description: " Dazzling performances blend art, dance, and seduction in an unforgettable night. ",
      imageUrl: "/illinois-prototype/img/burlesque-1.jpg",
      imageAlt: "Closeup photo of a beautiful Burlesque Dancer dressed in red with red feathers"  
    },
    { 
      title: "Chicago Air Show", 
      date: "August 20, 2024", 
      city: "chicago", 
      venue: "Navy Pier",
      descriptionLead: "Witness breathtaking aerial stunts at the Chicago Air Show.",
      description: " Sky-high acrobatics and precision flying over Lake Michigan captivate all ages. ",
      imageUrl: "/illinois-prototype/img/air-show-1.jpg",
      imageAlt: "Aerial view of a jet flying over Lake Michigan near downtown Chicago"  
    },
    { 
      title: "The Black Rodeo", 
      date: "July 11, 2024", 
      city: "aurora", 
      venue: "Riverdge Stadium",
      descriptionLead: "Join the celebration of heritage at The Black Rodeo.",
      description: " Experience the thrill of rodeo sports, showcasing Black cowboys and cowgirls. ",
      imageUrl: "/illinois-prototype/img/black-rodeo-4.jpg",
      imageAlt: "Action shot of an African-American Rodeo performer riding a horse at top speed"  
    },
    { 
      title: "Autumn Book Fair", 
      date: "September 2, 2024", 
      city: "springfield", 
      venue: "Capital Concourse",
      descriptionLead: "Discover literary gems at the Autumn Book Fair.",
      description: " Meet authors, attend signings, and find rare books in a reader's paradise. ",
      imageUrl: "/illinois-prototype/img/bookfair-3.jpg",
      imageAlt: "Photo of a bookstore owner arranging books at his vendor booth at the outdoor bookfair"  
    },
    { 
      title: "Universoul Circus", 
      date: "August 8, 2024", 
      city: "springfield", 
      venue: "Midlands Park",
      descriptionLead: "Experience the magic of Universoul Circus.",
      description: " A multicultural, global talent showcase that entertains and mesmerizes. ",
      imageUrl: "/illinois-prototype/img/universoul-circus-2.jpg",
      imageAlt: "Closeup of the Ringmaster of Universoul Circus dressed in full regalia, smiling "  
    },
    { 
      title: "County Fair", 
      date: "May 28, 2024", 
      city: "rockford", 
      venue: "The County Fairgrounds",
      descriptionLead: "Embrace tradition at the County Fair.",
      description: " Enjoy rides, games, and farm exhibits in a celebration of community spirit. ",
      imageUrl: "/illinois-prototype/img/county-fair-2.jpg",
      imageAlt: "little boy at the county fair, looking at the camera"  
    },
    { 
      title: "St. Patrick's Day Parade", 
      date: " March 17, 2024", 
      city: "springfield", 
      venue: "Main Street, Downtown Springfield",
      descriptionLead: "Celebrate Irish culture at the St. Patrick's Day Parade.",
      description: " Green-clad crowds enjoy music, dancing, and the luck of the Irish. ",
      imageUrl: "/illinois-prototype/img/st-pat-day-1.jpg",
      imageAlt: "The Rotary Club of Springfield, cressed as leprechauns, walking in the ST. Patrick's Day parade"  
    },
    { 
      title: "Botanic Gardens Season Opening", 
      date: "April 15, 2024", 
      city: "waukegan", 
      venue: "Waukegan Botanic Gardens",
      descriptionLead: "Explore nature's splendor at the Botanic Gardens.",
      description: " Stroll through diverse ecosystems and vibrant floral displays in serene settings. ",
      imageUrl: "/illinois-prototype/img/botanic-garden-1.jpg",
      imageAlt: "Red brick road flanked by various collections of flowers inside of a long indoor greenhouse pathway"  
    },
    { 
      title: "Chinese New Year Celebration", 
      date: "February 10, 2024", 
      city: "chicago", 
      venue: "22nd Street, China Town",
      descriptionLead: "Ring in the Lunar New Year with a grand celebration.",
      description: " Experience traditional dances, foods, and a spectacular parade in Chinatown. ",
      imageUrl: "/illinois-prototype/img/chinese-new-year-1.jpeg",
      imageAlt: "Chinese Dragon walking in the Chinese New Year Parade followed by attendees, with parade goers watching on the sidewalk"  
    },
    { 
      title: "Farmer's Market", 
      date: "April 7, 2024", 
      city: "naperville", 
      venue: "University Stadium Parking Lot",
      descriptionLead: "Savor the bounty at the Farmer's Market.",
      description: " Fresh, local produce and handmade goods in a vibrant community gathering. ",
      imageUrl: "/illinois-prototype/img/farmers-market-7.jpg",
      imageAlt: "Young African-American woman, smiling while standing in front of her produce booth at the Farmer's Market"  
    },
    { 
      title: "Pizza Crawl", 
      date: "May 23, 2024", 
      city: "chicago", 
      venue: "Starting at Giordano's Pizza, South Loop",
      descriptionLead: "Embark on a delicious journey through Chicago's best pizzerias.",
      description: " Taste and judge the city's iconic deep-dish and thin-crust pizzas. ",
      imageUrl: "/illinois-prototype/img/matt-antonioli-ctwbBwcwI9U-unsplash.jpg",
      imageAlt: "Photo of the outside of Giordano's pizza restaurant chain, a staple of chicago pizza culture"  
    },
    { 
      title: "Wine Tasting and Vinyard Tour", 
      date: "August 24, 2024", 
      city: "galena", 
      venue: "Galena Vinyards",
      descriptionLead: "Indulge in the art of wine at Galena Vineyards.",
      description: " Explore the vineyard and savor tastings of award-winning wines. ",
      imageUrl: "/illinois-prototype/img/vinyard-4.jpg",
      imageAlt: "."  
    },
    { 
      title: "Restaurant Week!", 
      date: "June 11, 2024", 
      city: "naperville", 
      venue: "",
      descriptionLead: "Celebrate Naperville's culinary scene during Restaurant Week!",
      description: " Exclusive menus and discounts at the city's finest eateries. ",
      imageUrl: "/illinois-prototype/img/resturant-week-1.jpg",
      imageAlt: "Restaurant photo of a main course of gourmet burgers and fries with a beer."  
    },
    { 
      title: "Japanese Gardens Photo Tour", 
      date: "June 9, 2024", 
      city: "chicago", 
      venue: "Aioki Garden Preserves",
      descriptionLead: "Immerse yourself in tranquility at the Japanese Gardens Photo Tour.", 
      description: " Capture the serene beauty of traditional Japanese landscapes and architectural elements in a photographer's paradise.", 
      imageUrl: "/illinois-prototype/img/japanese-garden-1.jpg",
      imageAlt: "Red Japanese walking bridge over a lake at Japanese Gardens in Chicago" 
    },
    {
      title: "Jazz in the Park",
      date: "August 1, 2024",
      city: "chicago",
      venue: "Millennium Park",
      descriptionLead: "Enjoy some of the biggest acts in Jazz today!.",
      description: " From the band shell to the Pritzker Pavillion, there is something for everyone. Contemporary, Big Band, Old Standard, Fusion... ",
      imageUrl: "/illinois-prototype/img/live-music-2.jpg",
      imageAlt: "Jazz performer singing on stage"
    }
  ];


  // Filter the events by city
  function filterEvents(city) {
    // if the dropdown vaue is "all" then display all of the cities in the list. if not, only display the cities with a city key value that matches the dropdown value
    const filteredEvents = city === "all" ? eventsData : eventsData.filter(event => event.city === city);
    renderEvents(filteredEvents);
  }

  // Build the event card html and display the event cards 
  function renderEvents(events) {
    eventsContainer.innerHTML = "";
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");

      const image = document.createElement("img");
      image.src = event.imageUrl;
      image.alt = event.imageAlt;

      const eventCardContent = document.createElement("div");
      eventCardContent.classList.add("event-card-content");

      const title = document.createElement("h3");
      title.textContent = event.title;

      const date = document.createElement("p");
      date.textContent = `Date: ${event.date}`;

      const venue = document.createElement("p");
      venue.textContent = `Venue: ${event.venue}`;

      const descriptionLead = document.createElement("strong");
      descriptionLead.textContent = event.descriptionLead;

      const description = document.createElement("span");
      description.textContent = event.description;

      const link = document.createElement("a");
      link.href = "#"; 
      link.className = "secondary-cta-btn";
      link.textContent = "Attend " + event.title;

      // attach the content to the event card content section
      eventCardContent.appendChild(title);
      eventCardContent.appendChild(date);
      eventCardContent.appendChild(venue);
      eventCardContent.appendChild(descriptionLead);
      eventCardContent.appendChild(description);
      eventCardContent.appendChild(link);
      // attach the image and event card content section to the event card
      eventCard.appendChild(image);
      eventCard.appendChild(eventCardContent);
      // attach the event card to the events container
      eventsContainer.appendChild(eventCard);
    });
  }

  // Listen for filter changes...
  cityFilter.addEventListener("change", function () {
    filterEvents(cityFilter.value);
  });

  // Start with all events displayed
  filterEvents("all");
});



/**************** EVENT SUBMISSION FORM VALIDATION, LOCAL STORAGE, AND DATA DISPLAY

  [move the validation code on the events page to this file when you debug (doesn't work as expected here)]

*/

