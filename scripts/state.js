// Check the page id and use it to target the correct state data (for when more states are added)
const currentPageID = document.body.getAttribute('id');

// Use a promise to fetch the data and build the ui on the state page templates
async function fetchDataAndBuildUI() {
  try {
    // Make a call to a data source or endpoint to fetch the data. In this case it's mocked up local data.
    const response = await fetch('/scripts/data.json'); 
    const data = await response.json();
    const stateData = data.illinois;

    // Update Hero Section
    document.getElementById('hero-section').style.backgroundImage = `url('${stateData.state_image}')`;
    document.getElementById('cityName').textContent = stateData.state_name;
    document.getElementById('nickname').textContent = stateData.nickname;
    document.getElementById('hero-soundbite').textContent = stateData.soundbite;


    // Loop through the state's keys to populate the table
    for (let stateKey in stateData) {
      if (stateKey.toLowerCase() === currentPageID.toLowerCase() && // key matches page id
          illinoisData.hasOwnProperty(key) && // objects' own properties only - exclude inherited properties
          typeof illinoisData[key] !== 'object') { // the property is not a nested object (ie. cities)

       console.log(stateKey); 

      }
    }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data and build UI
fetchDataAndBuildUI();
