import Homepage from './views/Homepage.js';
import CountryView from './views/CountryView.js';
import Countries from './views/Countries.js';


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    console.log("match",match);
    const values = match.result.slice(1);
    console.log("values",values)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }))
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    console.log(pathToRegex("/posts/:code"))
    const routes = [
        {path: '/', view: Homepage},
        {path: '/countries', view: Countries},
        {path: '/countries/:id', view: CountryView}  

    ];

    const potentialMatches = routes.map(route => {
        return {
            route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    } );

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if(!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHTML();

    // console.log(match.route.view());

}

window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})