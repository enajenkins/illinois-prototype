/**************** BUILD THE MAIN NAVIGATION

  1. Define the navigation elements
  2. Listen for the page load event, then when the page is finished loading, look for the nav container that you will build the main nav into 
  3. Loop through each navigation item, look for a subnav to render before moving to the next
  4. render everything into the navbar container on the page

*/

// ----- 1. Define navigation and subnav in JSON as an array of objects with possible child objects for easier manipulation and better readability.
// This is a static nav that will be shared across pages - so all code is contained within this file.
const navigationItems = [
  { title: "Home", href: "/illinois-prototype/index.html" },
  { title: "The State Capital", href: "/illinois-prototype/top-10-cities/springfield.html" },
  { title: "Top 10 Cities", href: "/illinois-prototype/top-10-cities/index.html", dropdown: true,
    children: [
      { title: "1. Chicago (click me)", href: "/illinois-prototype/top-10-cities/chicago.html" },
      { title: "2. Aurora", className: "unavailable", href: "#" },
      { title: "3. Joliet", className: "unavailable", href: "#" },
      { title: "4. Naperville (click me)", href: "/illinois-prototype/top-10-cities/naperville.html" },
      { title: "5. Rockford", className: "unavailable", href: "#" },
      { title: "6. Elgin", className: "unavailable", href: "#" },
      { title: "7. Springfield (click me)", href: "/illinois-prototype/top-10-cities/springfield.html" },
      { title: "8. Peoria", className: "unavailable", href: "#" },
      { title: "9. Waukegan", className: "unavailable", href: "#" },
      { title: "10. Champaign", className: "unavailable", href: "#" }
    ]
  },
  { title: "Events and Things To Do!", href: "/illinois-prototype/events.html" },
  { title: "Citations and Resources", href: "/illinois-prototype/citations.html" }
];


// ----- 2. listen to the DOM to know when the content has loaded
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar-nav"); // grab the main nav container that we will dynamically populate


// ----- 3. loop through each nav data item and build an li for each
  navigationItems.forEach(item => { 
    const li = document.createElement("li");
    li.className = "nav-item";

    // if there is a dropdown for the current nav item, build the submenu with the necessary bootstrap classes and attributes
    if (item.dropdown) {
      li.classList.add("dropdown"); // adds classes as a set of whitespace separated tokens
      
      // create the subnav toggle
      const a = document.createElement("a");
        a.className = "nav-link dropdown-toggle";
        a.href = item.href;
        a.id = "navbarDropdownMenuLink";
        a.setAttribute("role", "button");
        a.setAttribute("data-bs-toggle", "dropdown");
        a.setAttribute("aria-expanded", "false");
        a.textContent = item.title;
     
      // create the subnav list
      const ul = document.createElement("ul");
        ul.className = "dropdown-menu";
        ul.setAttribute("aria-labelledby", "navbarDropdownMenuLink");

      // create the subnav list items and attach them to the list element
      item.children.forEach(child => {
        const subNavListItems = document.createElement("li");
        const subNavLinks = document.createElement("a");
          subNavLinks.className = "dropdown-item";
          subNavLinks.href = child.href;
          subNavLinks.textContent = child.title;
          subNavListItems.appendChild(subNavLinks);
        ul.appendChild(subNavListItems);
      });

      li.appendChild(a);
      li.appendChild(ul);

    // if the current link does not have a dropdown, just build the nav-link
    } else { 
      const a = document.createElement("a");
        a.className = "nav-link";
        a.href = item.href;
        a.textContent = item.title;
      li.appendChild(a);
    }
// ----- 4. append the newly created link to the navbar element
    navbar.appendChild(li); 
  });
});



