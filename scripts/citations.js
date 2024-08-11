//define data object that holds the list of citations
const citationList = [
  {
    author: "Lee, Russell - Photographer",
    title: "Negro Boys on Easter Morning. Southside, Chicago, Illinois. 1941 Apr. Photograph.",
    description: null,
    websiteTitle: "Library of Congress",
    url: "www.loc.gov/item/2017789025/",
    dateAccessed: "11-02-2024"
  },
  {
    author: null,
    title: "City-Data.com Illinois",
    description: "Illinois: Worldmark Encyclopedia of the States",
    websiteTitle: "Illinois",
    url: "https://www.city-data.com/states/Illinois.html",
    dateAccessed: "17-02-2024"
  },
  {
    author: null,
    title: "City-Data.com Chicago, Illinois",
    description: "Chicago, Illinois detailed profile",
    websiteTitle: "Chicago, Illinois (IL) profile: population, maps, real estate, averages, homes, statistics, relocation, travel, jobs, hospitals, schools, crime, moving, houses, news, sex offenders",
    url: "https://www.city-data.com/city/Chicago-Illinois.html",
    dateAccessed: "17-02-2024"
  },
  {
    author: null,
    title: "City-Data.com Naperville, Illinois",
    description: "Naperville, Illinois detailed profile",
    websiteTitle: "Naperville, Illinois (IL 60540) profile: population, maps, real estate, averages, homes, statistics, relocation, travel, jobs, hospitals, schools, crime, moving, houses, news, sex offenders",
    url: "https://www.city-data.com/city/Naperville-Illinois.html",
    dateAccessed: "17-02-2024"
  },
  {
    author: null,
    title: "City-Data.com Springfield, Illinois",
    description: "Springfield, Illinois detailed profile",
    websiteTitle: "Springfield, Illinois (IL 62701, 62711) profile: population, maps, real estate, averages, homes, statistics, relocation, travel, jobs, hospitals, schools, crime, moving, houses, news, sex offenders",
    url: "https://www.city-data.com/city/Springfield-Illinois.html",
    dateAccessed: "17-02-2024"
  },
  {
    author: null,
    title: "Enjoy Illinois",
    description: "Your guide to the best of Illinois. Places to go, things to do, the best places to eat and drink, must-see Chicago, trip ideas and inspiration for your Illinois vacation.",
    websiteTitle: "Enjoy Illinois | Official Guide to Illinois Travel",
    url: "www.enjoyillinois.com",
    dateAccessed: "29-01-2024"
  },
  {
    author: null,
    title: "Welcome to Illinois.gov!",
    description: "Find places to go, things to see. Search through all the different services offered by the various Illinois agencies.",
    websiteTitle: "Illinois",
    url: "www.illinois.gov",
    dateAccessed: "04-02-2024"
  },
  {
    author: "Various Contributors",
    title: "Lirary of Congress - Digital Collections",
    description: "Search results 1 - 28 of 28.",
    websiteTitle: "Search results for  Digital Collections, Illinois, Available Online | Library of Congress",
    url: "https://www.loc.gov/collections/?q=illinois",
    dateAccessed: "05-02-2024"
  },
  {
    author: "Various Contributors",
    title: "Lirary of Congress - Chicago Ethnic Arts Project Collection",
    description: "The Chicago Ethnic Arts Project survey was conducted in 1977 by the American Folklife Center at the request of the Illinois Arts Council to assess and document the status of ethnic art traditions in more than twenty ethnic communities in Chicago, and was jointly sponsored by both organizations.",
    websiteTitle: "About this Collection | Chicago Ethnic Arts Project Collection | Digital Collections  | Library of Congress",
    url: "https://www.loc.gov/collections/chicago-ethnic-arts-project/about-this-collection/",
    dateAccessed: "05-02-2024"
  },
  {
    author: "History.com Editors",
    title: "Chicago",
    description: null,
    websiteTitle: "Chicago",
    url: "https://www.history.com/topics/us-states/chicago",
    dateAccessed: "15-02-2024"
  },
  {
    author: null,
    title: "Illinois Blue Book Publications/Forms",
    description: "PDF Download - Chronology of Illinois History",
    websiteTitle: "Illinois Blue Book",
    url: "https://www.ilsos.gov/publications/illinois_bluebook/chronology.pdf",
    dateAccessed: "25-01-2024"
  },
  {
    author: "Janet M. Cartwright, Paul Simon, Richard T. Lockhart, The Editors of Encyclopaedia Britannica",
    title: "Illinois",
    description: "Geographical and historical treatment of Illinois, including maps and a survey of its people, economy, and government. Its capital city is Springfield, and its largest city and most important cultural and economic center is Chicago. Politically, Illinois is divided between the Chicago area and ‘downstate.’",
    websiteTitle: "Illinois | History, Cities, Capital, & Facts | Britannica",
    url: "https://www.britannica.com/place/Illinois-state",
    dateAccessed: "20-02-2024"
  },
  {
    author: "Wikipedia Contributors",
    title: "Galena, Illinois",
    description: null,
    websiteTitle: "Galena, Illinois - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Galena,_Illinois",
    dateAccessed: "09-02-2024"
  },
  {
    author: "Gunderson, Erica",
    title: "Ask Geoffrey: The Story Behind an Iconic 1940s Bronzeville Photo",
    description: "A famous photo taken in 1940s Bronzeville features the faces of five young African-American men, but their identities have remained a mystery for generations. Local history expert Geoffrey Baer is here with the story behind one of Bronzeville's most enduring images in this week’s edition of Ask Geoffrey.",
    websiteTitle: "Ask Geoffrey: The Story Behind an Iconic 1940s Bronzeville Photo | Chicago News | WTTW",
    url: "https://news.wttw.com/2015/11/25/ask-geoffrey-story-behind-iconic-1940s-bronzeville-photo",
    dateAccessed: "12-02-2024"
  },
  {
    author: "Wikipedia Contributors",
    title: "Economy of Chicago",
    description: null,
    websiteTitle: "Economy of Chicago - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Economy_of_Chicago",
    dateAccessed: "18-02-2024"
  },
  {
    author: null,
    title: "Welcome to the Historic Preservation Division",
    description: "The state operates dozens of historic sites, museums and monuments where visitors can learn the stories of Illinois. Experience life in a frontier fort. Walk the halls where Abraham Lincoln rose to greatness. See the remnants of a Native American city",
    websiteTitle: "Illinois Historic Preservation Division of the Department of Natural Resources",
    url: "https://dnrhistoric.illinois.gov/",
    dateAccessed: "14-02-2024"
  },
  {
    author: "Wikipedia Contributors",
    title: "Springfield, Illinois Economy",
    description: null,
    websiteTitle: "Wikipedia, Wikimedia Foundation",
    url: "https://en.wikipedia.org/wiki/Springfield,_Illinois#Economy",
    dateAccessed: "13-02-2024"
  },
  {
    author: null,
    title: "Illinois History",
    description: null,
    websiteTitle: "Illinois History | Washington County, Illinois",
    url: "https://washingtonco.illinois.gov/illinois-history/",
    dateAccessed: "16-02-2024"
  },
  {
    author: null,
    title: null,
    description: null,
    websiteTitle: "Illinois – YourCityBeat.com",
    url: "https://yourcitybeat.com/illinois/",
    dateAccessed: "19-02-2024"
  },
  {
    author: null,
    title: "Cost of Living Calculator: How Your City Compares to Other U.S. Cities",
    description: "Moving to a new city? Use the cost of living calculator to get an extensive cost of living comparison between your city and where you want to move to.",
    websiteTitle: "Cost of Living Calculator. Comparison by City 2024 | RentCafe",
    url: "https://www.rentcafe.com/cost-of-living-calculator/",
    dateAccessed: "21-02-2024"
  },
  {
    author: null,
    title: "A Brief History of Chicago's Nicknames",
    description: "Today, we're exploring the numerous unofficial nicknames Chicago has been given throughout the city's long history.",
    websiteTitle: "A Brief History of Chicago's Nicknames — MG Group",
    url: "https://mggroupchicago.com/a-brief-history-of-chicagos-nicknames/",
    dateAccessed: "22-02-2024"
  },
  {
    author: "Michael Ray",
    title: "100th Anniversary of Chicago's Flag",
    description: "April 4, 2017, marked the 100th anniversary of what is perhaps the world’s most recognizable municipal flag.",
    websiteTitle: "April 4, 2017, marked the 100th anniversary of what is perhaps the world’s most recognizable municipal flag.",
    url: "https://www.britannica.com/story/100th-anniversary-of-chicagos-flag",
    dateAccessed: "23-02-2024"
  },
  {
    author: "Perry R. Duis, Cathlyn Schallhorn",
    title: "Chicago",
    description: "Chicago is a city, the seat of Cook county, in northeastern Illinois, U.S. With a population of nearly three million, Chicago is the state’s largest and the country’s third most populous city. It is the commercial and cultural hub of the American Midwest. Learn more about Chicago in this article.",
    websiteTitle: "Chicago | History, Population, Map, & Facts | Britannica",
    url: "https://www.britannica.com/place/Chicago",
    dateAccessed: "24-02-2024"
  },
  {
    author: null,
    title: "Charles Mound Scenic Illinois",
    description: null,
    websiteTitle: "Scenic Illinois at Charles Mound, Illinois image - Free stock photo - Public Domain photo - CC0 Images ",
    url: "https://www.goodfreephotos.com/united-states/illinois/charles-mound/illinois-charles-mound-scenic-illinois.jpg.php",
    dateAccessed: "26-01-2024"
  },
  {
    author: null,
    title: "Starved Rock State Park",
    description: null,
    websiteTitle: "Starved Rock State Park  Photos - Free Stock Photos and public domain CC0 Images",
    url: "https://www.goodfreephotos.com/united-states/illinois/starved-rock-state-park/",
    dateAccessed: "27-01-2024"
  },
  {
    author: null,
    title: "Starved Rock State Park Hiking Steps",
    description: null,
    websiteTitle: "Hiking Steps at Starved Rock State Park, Illinois image - Free stock photo - Public Domain photo - CC0 Images",
    url: "https://www.goodfreephotos.com/united-states/illinois/starved-rock-state-park/illinois-starved-rock-state-park-hiking-steps.jpg.php",
    dateAccessed: "28-01-2024"
  },
  {
    author: "Wikipedia Contributors",
    title: "Galena, Illinois",
    description: null,
    websiteTitle: "Galena, Illinois - Wikipedia",
    url: "en.wikipedia.org/wiki/Galena,_Illinois",
    dateAccessed: "30-01-2024"
  },
  {
    author: null,
    title: "Timeline",
    description: "Discover the charm of Galena Country in Illinois! Plan your getaway to Galena today to experience local flavor, rich history, rolling vineyards and more.", 
    websiteTitle: "Galena & U.S. Grant Museum – Galena Historical Society & U.S. Grant Museum",
    url: "www.galenahistory.org",
    dateAccessed: "31-01-2024"
  },
  {
    author: null,
    title: "Galena Country",
    description: "Discover the charm of Galena Country in Illinois! Plan your getaway to Galena today to experience local flavor, rich history, rolling vineyards and more.", 
    websiteTitle: "Visit Galena, IL: Things to Do, Events & Hotels | Galena Country",
    url: "www.visitgalena.org",
    dateAccessed: "01-02-2024"
  }
];

// Build the citation entry before displaying it in the #citations-container...
function formatCitation(source) {
  let citation = "";

  /* ----- Display the citations data according to MLA guidelines 

    author: Last, First
    title: in quotation marks
    description: for images
    websiteTitle: in italics
    url: without https://, between pointed brackets
    dateAccessed: day, month, year

  */

  // if the entry detail exists, add it to the citation entry.
  if (source.author) citation += `<strong>${source.author}</strong> `;
  if (source.title) citation += `<strong>"${source.title}."</strong> `;
  if (source.websiteTitle) citation += `<em>${source.websiteTitle}</em>, `;
  if (source.publisher) citation += `${source.publisher}, `;
  if (source.publicationDate) citation += `${source.publicationDate}, `;
  if (source.url) citation += `< ${source.url} >. `;
  if (source.accessDate) citation += `Accessed ${source.accessDate}.`;

  return citation;
}

// Display the citation built above
function displayCitations() {
  const citationsContainer = document.getElementById("citations-container");
  citationsContainer.innerHTML = "";
  
  citationList.forEach(source => {
    const citation = formatCitation(source);
    const paragraph = document.createElement("p");
    paragraph.innerHTML = citation;
    citationsContainer.appendChild(paragraph);
  });
}

// Call the function to display citations on the webpage
displayCitations();




