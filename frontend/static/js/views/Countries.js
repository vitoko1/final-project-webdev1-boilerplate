import AbstractView from "./AbstractView.js";
import { getCountries } from '../countries.js';
import { getCountriesResume } from '../countries.js';

const countries = getCountries();
const testArray = getCountriesResume();
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        // console.log("FILTER TEST BELOW");
        // console.log(filterFunction("region", "Americas"))

        createFilterSection();
        return "<h1>Countries Victor</h1>";

    }


}

const createFilterSection = function (){
 
    let newELement= document.createElement('section')

    newELement.className = 'home';

    let divInFlex = document.createElement('div');

    divInFlex.className = 'in-flex';

    let newInput = document.createElement('input');

    newInput.className= 'text';
    newInput.label='label';

    let newLabel =  document.createElement('label');

    newLabel.innerHTML= 'Select Filter:';

    let newSelect = document.createElement('select');

    newSelect.id = 'filterSelect';

    let option1= document.createElement('option');
    option1.value='region';
    option1.label='Region';
    let option2= document.createElement('option');
    option2.value='name';
    option2.label='Name';

    let buttonF =document.createElement('button');

    buttonF.id='filterButton';
    buttonF.textContent='Filter';


    newSelect.appendChild(option1);
    newSelect.appendChild(option2);

    divInFlex.appendChild(newInput);
    divInFlex.appendChild(newLabel);
    divInFlex.appendChild(newSelect);
    divInFlex.appendChild(buttonF);

    //let container = document.getElementById('test10');
    //container.style.visibility = "hidden";

    let blancDiv = document.createElement('div');
    let divFlags = document.createElement('div');

    divFlags.className= 'flags';

    let img = document.createElement('img');
    img.src="/design/chile.png";
    img.alt='chile';




    blancDiv.appendChild(divFlags);
    divInFlex.appendChild(blancDiv);


    newELement.appendChild(divInFlex);

    //container.appendChild(newELement);
    document.body.appendChild(newELement)



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






