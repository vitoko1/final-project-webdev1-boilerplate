import AbstractView from "./AbstractView.js";
import { getCountries } from '../countries.js';
import { getCountriesResume } from '../countries.js';


const countries = getCountries();
const countriesResumeArray = getCountriesResume();
const btnFilter = document.getElementById("filterButton")
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        // console.log("FILTER TEST BELOW");
        // console.log(filterFunction("region", "Americas"))

        let aux = document.getElementById('div-to-body');

        if (null != aux) {

            document.getElementById('div-to-body').remove();
        }

        let aux2 = document.getElementById('containerHomePage');

        if (null != aux2) {

            document.getElementById('containerHomePage').remove();
        }

        createFilterSection();
        return "<h1>Countries</h1>";

    }


}







const createFilterSection = function () {


    let newELement = document.createElement('section')

    newELement.className = 'home';

    let divInFlex = document.createElement('div');

    divInFlex.className = 'in-flex';

    let newInput = document.createElement('input');

    newInput.id = 'inputId';

    newInput.className = 'text';
    newInput.label = 'label';

    let newLabel = document.createElement('label');

    newLabel.innerHTML = 'Select Filter:';

    let newSelect = document.createElement('select');

    newSelect.id = 'filterSelect';

    let option1 = document.createElement('option');
    option1.value = 'region';
    option1.label = 'Region';
    let option2 = document.createElement('option');
    option2.value = 'name';
    option2.label = 'Name';

    let buttonF = document.createElement('button');

    buttonF.id = 'filterButton';
    buttonF.textContent = 'Filter';


    newSelect.appendChild(option1);
    newSelect.appendChild(option2);

    divInFlex.appendChild(newInput);
    divInFlex.appendChild(newLabel);
    divInFlex.appendChild(newSelect);
    divInFlex.appendChild(buttonF);



    // let blancDiv = document.createElement('div');

    let blancDiv = createFlags();
    // let divFlags = createFlags();

    // blancDiv.appendChild(divFlags);
    divInFlex.appendChild(blancDiv);


    newELement.appendChild(divInFlex);


    let divToBody = document.createElement('div');
    divToBody.id = 'div-to-body';

    divToBody.appendChild(newELement);
    document.body.appendChild(divToBody);



}

const filterFunction = function (filterBy, input) {
    let filteredCountries = [];

    if (filterBy === "name") {
        filteredCountries = testArray.filter(f => f.countryName === input);

    } else if (filterBy === "region") {
        filteredCountries = testArray.filter(f => f.region === input);
    }

    return filteredCountries;
}


const createFlags = function () {

    let blancDiv = document.createElement('div');

    countriesResumeArray.forEach(function (country) {



        let divFlags = document.createElement('div');
        divFlags.className = 'flags';

        let countryFlag = country.flag;
        let countryPopulation = country.population;
        let countryRegion = country.region;
        let countryCapital = country.capital;
        let countryName = country.countryName;
        let countryId = country.idCountry;



        let img = document.createElement('img');
        img.src = countryFlag;
        img.alt = countryName;



        let h1Title = document.createElement('h1');
        //h1Title.textContent = countryName; 

        let aName = document.createElement('a');
        aName.href= 'countries/'+countryId;
        aName.textContent=countryName;

        h1Title.appendChild(aName);
        let pPopulation = document.createElement('p');
        pPopulation.textContent = 'Population: ' + countryPopulation;


        let pRegion = document.createElement('p');
        pRegion.textContent = 'Region: ' + countryRegion;

        let pCapital = document.createElement('p');
        pCapital.textContent = 'Capital: ' + countryCapital;


        divFlags.appendChild(img);
        divFlags.appendChild(h1Title);
        divFlags.appendChild(pPopulation);
        divFlags.appendChild(pRegion);
        divFlags.appendChild(pCapital);
        blancDiv.appendChild(divFlags);




    });



    return blancDiv;

}




window.onload = function () {

    document.getElementById("filterButton").addEventListener("click", getInfo);
}

function getInfo() {
    let getInput = document.getElementById("inputId");
    let values = getInput.value;


    let getSelectValues = document.getElementById("filterSelect");
    //alert(getSelectValues);
    let valueSelect = getSelectValues.options[getSelectValues.selectedIndex].value;
    //alert(valueSelect);

}








