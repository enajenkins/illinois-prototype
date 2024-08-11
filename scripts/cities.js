
/**************** FETCH DATA. POPULATE EXISTING SECTIONS AND BUILD PARTS OF THE PAGE FOR EACH APPROPRIATE LOCATION

  1. Grab the key you will use to match the data to the page.
  2. Use a promise to access and store the data from an endpoint - local data in this case.
  3. Populate the hero with the correct data for the location 
  4. Build and the data table with the correct data for the location 
  5. Build and Populate the famous people list with the correct data for the location 
  6. Build and Populate the obscure facts list with the correct data for the location (to do: convert from static code)

*/

// ----- 1. Get the city id and set it as the key that is used to match the data to the correct city page
const currentPageID = document.body.getAttribute('id');


// ----- 2. Use a promise to fetch the data and build the ui on the city and state page templates
async function fetchDataAndBuildUI() {
  try {
    // Make a call to a data source or endpoint to fetch the data. In this case it's mocked up local data.
    const response = await fetch('/illinois-prototype/scripts/data.json'); 
    const data = await response.json();

    // TEST THE DATA: Log the newly fetched data to make sure it's available and variables work
    console.log(currentPageID); // expected format: ie: "chicago"
    console.log(data.illinois.state_name); // expected format: "Illinois"
    console.log(data.illinois.cities[currentPageID].city_name); // expected format: "Chicago, Illinois"

    // Loop through the state's city keys to look for the currentPageID
    for (let cityKey in data.illinois.cities) {
      if (cityKey.toLowerCase() === currentPageID.toLowerCase()) {
        // Access the city object
        let city = data.illinois.cities[cityKey];
        // TEST THE DATA: Render the city_name and population for the matching city
        console.log("City Name:", city.city_name);
        console.log("Population:", city.population);


// ----- 3. Update Hero Section
        document.getElementById('hero-section').style.backgroundImage = `url('${data.illinois.cities[cityKey].city_image}')`;
        document.getElementById('cityName').textContent = data.illinois.cities[cityKey].city_name;
        document.getElementById('nickname').textContent = data.illinois.cities[cityKey].nickname;
        document.getElementById('hero-soundbite').textContent = data.illinois.cities[cityKey].soundbite;


// ----- 4. Update City Data Table (refactor later for efficiency and better security)
        const cityDataTableBody = document.getElementById('cityDataBody');
        cityDataTableBody.innerHTML = '';
        const cityData = data.illinois.cities[cityKey]; // current city
        const classificationCity = `Urban: ${cityData.classification.urban}%, 
                                    Rural: ${cityData.classification.rural}%`;
        const classificationState = `Urban: ${data.illinois.classification.urban}%, 
                                    Rural: ${data.illinois.classification.rural}%`;
        const row = `<tr>
                      <th scope="row">Population</th>
                      <td>${cityData.population.toLocaleString()}</td>
                      <td>${data.illinois.population.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date of Incorporation</th>
                      <td>${cityData.year_incorporated}</td>
                      <td>${data.illinois.year_incorporated}</td>
                    </tr>
                    <tr>
                      <th scope="row">Region</th>
                        <td>${cityData.region_of_state} ${data.illinois.state_name}</td>
                        <td>${data.illinois.region}</td>
                    </tr>
                      <tr>
                        <th scope="row">Classification</th>
                        <td>${classificationCity}</td>
                        <td>${classificationState}</td>
                      </tr>
                      <tr>
                        <th scope="row">Median Household Income</th>
                        <td>$${cityData.median_household_income.toLocaleString()}</td>
                        <td>$${data.illinois.median_household_income.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <th scope="row">Median Rent</th>
                        <td>$${cityData.median_rent.toLocaleString()}</td>
                        <td>$${data.illinois.median_rent.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <th scope="row">Median Home Value</th>
                        <td>$${cityData.median_home_value.toLocaleString()}</td>
                        <td>$${data.illinois.median_home_value.toLocaleString()}</td>
                      </tr>`;
        cityDataTableBody.innerHTML = row;


// ----- 5. Build and Populate Famous People List
        const famousPeopleList = document.getElementById('famousPeopleList');
        famousPeopleList.innerHTML = '';
        const famousPeople = data.illinois.cities[cityKey].famous_people_born_here;

        famousPeople.forEach(person => { 
          const listItem = `<li><a href="#" target="_blank"><i class="bi bi-star-fill"></i> ${person} <i class="bi bi-box-arrow-up-right"></i></a></li>`;
          famousPeopleList.innerHTML += listItem;
        });

// ----- 6. Build and Populate Obscure Facts List (to do: convert from static code)

      } // END IF (cityKey....
    } // END FOR (let cityKey...

  } catch (error) {
    console.error('There was an error fetching the data. Please refer to this error:', error);
  } // END CATCH 
} // END ASYNC 

// Call the function to fetch data and build UI
fetchDataAndBuildUI();
