function displayResults(itemValue) {


    // iterates over the fizzbuzz. figure how to use itemValue
    for (i = 1; i <= itemValue; i++) {
        var output = i;
        //least restrictive conditional first
        if (i % 3 === 0) {
            output = "fizz";
        }
        if (i % 5 === 0) {
            output = "buzz";
        }
        if ((i % 3 == 0) && (i % 5 == 0)) {
            output = "fizzbuzz";
        }

        $('.js-results').append("<div class=\"fizz-buzz-item\">\n\t<span>" + output + "</span>\n</div>");
    }


}

$("#number-chooser").submit(function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    var itemValue = $('#number-choice').val();
    //use that value to call the getResults function defined bellow
    displayResults(itemValue);
});
