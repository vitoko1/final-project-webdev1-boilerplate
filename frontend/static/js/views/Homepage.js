import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {


        let aux2 = document.getElementById('containerHomePage');

        if (null != aux2) {

            document.getElementById('containerHomePage').remove();
        }

        let aux = document.getElementById('div-to-body');

        if (null != aux) {

            document.getElementById('div-to-body').remove();
        }

        createHomeSection();



        return "<h1>Homepage</h1>";
    }
}

const createHomeSection = function () {

    let divInFlex = document.createElement('div');
    divInFlex.className = 'container';
    divInFlex.id = 'containerHomePage';

    let h3 = document.createElement('h3');
    h3.textContent = 'Where do you Wanna Travel?';
    h3.className = 'home-page-title';
    divInFlex.appendChild(h3);

    let divBtn = document.createElement('div');
    divBtn.className = 'search-box';
    
    let aName = document.createElement('a');
    aName.href= 'countries';
    aName.textContent='Countries';

    let h1Title = document.createElement('h1');

    h1Title.appendChild(aName);

    divBtn.appendChild(h1Title);

    divInFlex.appendChild(divBtn);

    document.body.appendChild(divInFlex);

}