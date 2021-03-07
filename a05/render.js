/**
 * Course: COMP 426
 * Assignment: a05
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */

 function test() {
    console.log("SUGMA");
}

export const renderHeroCard = function(hero) {
    // TODO: Copy your code from a04 to render the hero card
    return `
    <div class="column is-one-quarter has-text-centered">
        <div class="card">
            <div style="background-color: ${hero.backgroundColor}; border: solid 5px ${hero.color}; border-radius: 10px" class="card-header"> <p style="color: ${hero.color}" class="has-text-weight-bold card-header-title title is-4"> ${hero.name} </p></div>
            <div style="background-color: ${hero.backgroundColor}; border-radius: 10px" class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-128x128">
                            <img style="border: solid 6px ${hero.color}" class="is-rounded" src="${hero.img}" alt="${hero.name} picture">
                        </figure>
                        <br> <br>
                        <button onclick="test()" style="border: hidden; background-color: ${hero.color}; color: ${hero.backgroundColor}" class="button is-rounded is-medium"> EDIT </button>
                    </div>
                    <div class="media-content">
                        <p class="title is-4"> <span style="color: ${hero.color}"> ${hero.first} ${hero.last} </span> </p>
                        <p style="color: ${hero.color}" class="subtitle is-6"> First appearance: ${hero.firstSeen.getMonth()}/${hero.firstSeen.getDate()}/19${hero.firstSeen.getYear()} </p>
                        <p style="color: ${hero.color}"> ${hero.description} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Copy your code from a04 to render the hero edit form
    return `
    <div style="width: 20%" class="card">
        <div style="background-color: ${hero.backgroundColor}; border: solid 5px ${hero.color}; border-radius: 10px" class="card-header"> 
            <p style="color: ${hero.color}" class="has-text-weight-bold card-header-title title is-4"> EDIT HERO: ${hero.name} </p>
        </div>
        <div style="background-color: ${hero.backgroundColor}; border-radius: 10px" class="card-content">
            <form>
            <div class="field">
                <label style="color: ${hero.color}"class="label"> First Name </label>
                <div class="control">
                    <input class="input" type="text" value="${hero.first}">
                </div>
            </div>
            <div class="field">
                <label style="color: ${hero.color}"class="label"> Last Name </label>
                <div class="control">
                    <input class="input" type="text" value="${hero.last}">
                </div>
            </div>
            <div class="field">
                <label style="color: ${hero.color}"class="label"> Superhero Name </label>
                <div class="control">
                    <input class="input" type="text" value="${hero.name}">
                </div>
            </div>
            <div class="field">
                <label style="color: ${hero.color}"class="label"> Hero Description </label>
                <div class="control">
                    <input class="input" type="text" value="${hero.description}">
                </div>
            </div>
            <div class="field">
                <label style="color: ${hero.color}"class="label"> First Seen? </label>
                <div class="control">
                    <textarea class="textarea" rows="2"> ${hero.firstSeen} </textarea>
                </div>
            </div>
            <div class="columns">
                <div class="column is-half">
                    <button type="submit" onclick="function()" style="border: hidden; background-color: ${hero.color}; color: ${hero.backgroundColor}" class="button is-rounded is-medium"> SAVE </button>
                </div>
                <div class="column">
                    <button onclick="function()" style="border: hidden; background-color: ${hero.color}; color: ${hero.backgroundColor}" class="button is-rounded is-medium"> CANCEL </button>
                </div>
            </div>
            </form>
        </div>
    </div>
    `
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead
    console.log("Sugma");
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead
};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part
    heroes.forEach(hero => {
        let card = renderHeroCard(hero);
        ($root).append(card);
    });
    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part

    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //       clicking the edit button

    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form

    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button
};

/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
