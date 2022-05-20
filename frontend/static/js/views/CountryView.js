import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {

        return "<h1>Country </h1>";

    }


}




const deployCountryInfo = function () {

    let flagDiv = document.createElement('div');

    flagDiv.className = 'flag';

    let img = document.createElement('img');
    img.src = 'https://flagcdn.com/do.svg';

    flagDiv.appendChild(img);

    
    let divCountriesInfo = document.createElement('div');

    divCountriesInfo.className='countries-info';

    let divDetail = document.createElement('div');
    divDetail.className='details';

    let h3CountryName = document.createElement('h3');

    h3CountryName.textContent='Nombre Pais';

    let ulList = document.createElement('ul');

    ulList.className='details-list';
    ulList.id='dtl-list';

    let ilListLanguage = document.createElement('il');
    ilListLanguage.className='details-item';
    ilListLanguage.textContent='Espanol';

    let ilListCapital = document.createElement('il');
    ilListCapital.className='details-item';
    ilListCapital.textContent='Puerto Rico';

    let ilListRegion = document.createElement('il');
    ilListRegion.className='details-item';
    ilListRegion.textContent='Americas';

    let ilListPopulation = document.createElement('il');
    ilListPopulation.className='details-item';
    ilListPopulation.textContent='1234567';




    ulList.appendChild(ilListLanguage);
    ulList.appendChild(ilListCapital);
    ulList.appendChild(ilListRegion);
    ulList.appendChild(ilListPopulation);

    divDetail.appendChild(h3CountryName);
    divDetail.appendChild(ulList);

    let divBorders = document.createElement('div');
    divBorders.className='borders';

    let h3Borders = document.createElement('h3');
    h3Borders.textContent='Border Countries';


    let ulBorderCountry = document.createElement('ul');
    ulBorderCountry.className= 'borders-list';

    let iLBorderCountry = document.createElement('il');
    iLBorderCountry.className='orders-item';


    


    ulBorderCountry.appendChild(iLBorderCountry);

    divBorders.appendChild(h3Borders);

    

    divCountriesInfo.appendChild(divDetail);
    divCountriesInfo.appendChild(divBorders);
}