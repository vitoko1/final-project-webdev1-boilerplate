import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        createHomeSection();

        let aux2 = document.getElementById('containerHomePage');

        if (null != aux2) {

        document.getElementById('containerHomePage').remove();
        }
        
        return "<h1>Homepage</h1>";
    }
}

const createHomeSection = function(){

    let divInFlex = document.createElement('div');
    divInFlex.className = 'container';
    divInFlex.id = 'containerHomePage';

    let h3 = document.createElement('h3');
    h3.textContent = 'Where do you Wanna Travel?';
    h3.className = 'home-page-title';
    divInFlex.appendChild(h3);

    let divBtn = document.createElement('div');
    divBtn.className = 'search-box';

    let buttonF = document.createElement('button');
    buttonF.className = 'search-btn';
    buttonF.textContent = 'Countries';
    divBtn.appendChild(buttonF);

    divInFlex.appendChild(divBtn);

    document.body.appendChild(divInFlex);

}