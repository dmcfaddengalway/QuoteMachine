$(document).ready(function() {

    var quoteNum;
    var quote;
    var author;
    var backgroundChoice;
    var colors = ['#023C40', '#95A472', '#C96480', '#8FD694', '#3A015C', '#4F0147', '#5C0029', '#8E0045', '#9E0031', '#8EB8E5', '#0D00A4', '#F71735', '#230C33', '#B27C66'];

    function getQuote() {

        quoteNum = Math.floor(Math.random() * 69);
        backgroundChoice = Math.floor(Math.random() * colors.length);

        $("body").css("background-color", colors[backgroundChoice]);
        $(".newQuoteButton").css("background-color", colors[backgroundChoice]);

        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(val) {
                //console.log(val);

                $(".quote").html(val[quoteNum].quote.slice(0, val[quoteNum].quote.length));
                $(".author").html(val[quoteNum].author.slice(0, val[quoteNum].author.length));

        });
    }

    function shareQuote() {

            var quote = document.getElementById("quote").innerText;
            var author = document.getElementById("author").innerText;

            var tweetURL = "https://twitter.com/intent/tweet?hashtags=quotes,FCC&related=freecodecamp&text='" + encodeURIComponent('"' + quote + '" ' + author);

            window.open(tweetURL);
    }

    getQuote();

    $(".newQuoteButton").on("click", getQuote);
    $(".fa-twitter-square").on("click", shareQuote);
});