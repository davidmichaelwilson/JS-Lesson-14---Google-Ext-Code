let myDiscoveries = []
const inputElement = document.getElementById("input-element")
const inputButton = document.getElementById("input-button")
const unorderedListElement = document.getElementById("unordered-list-element")

//Store the delete button in a deleteButton variable.
const deleteButton = document.getElementById("delete-button")

//Retrieve myDiscoveries from the localStorage
let discoveriesFromLocalStorage = JSON.parse(localStorage.getItem("myDiscoveries"))
const tabButton = document.getElementById("tab-button")

const tabs = [{url: "http://www.partridgegetslucky.com"}]

tabButton.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs))
    myDiscoveries.push(tab[0].url)
    localStorage.setItem(“myDiscoveries”, JSON.stringify(myDiscoveries))
    display(myDiscoveries)
  })


if (discoveriesFromLocalStorage) {
    myDiscoveries = discoveriesFromLocalStorage
    display(myDiscoveries)
}

function display(discoveries) {
    let listItems = ""
    for (let i = 0; i < discoveries.length; i++) {

        listItems += `
          <li>
                <a target='_blank' href='${discoveries[i]}'>
                    ${discoveries[i]}
                </a>
            </li>
`
        console.log(listItems)
    }
    unorderedListElement.innerHTML = listItems
}


deleteButton.addEventListener("dblclick", function() {
    localStorage.clear()
    myDiscoveries = []
    display(myDiscoveries)
})

inputButton.addEventListener("click", function() {
    myDiscoveries.push(inputElement.value)
    inputElement.value = ""
    
    //Save myDiscoveries array to localStorage
    localStorage.setItem("myDiscoveries", JSON.stringify(myDiscoveries))
    display(myDiscoveries)

})


