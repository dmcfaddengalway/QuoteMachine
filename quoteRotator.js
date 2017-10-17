$(document).ready(function() {

    var quoteNum;
    var backgroundChoice;
    var colors = ['#023C40', '#DCF763', '#95A472', '#C96480', '#8FD694', '#3A015C', '#4F0147', '#5C0029', '#8E0045', '#9E0031', '#8EB8E5', '#0D00A4', '#F71735', '#230C33', '#B27C66'];

    quoteNum = Math.floor(Math.random() * 69);
    backgroundChoice = Math.floor(Math.random() * colors.length);

    $("body").css("background-color", colors[backgroundChoice]);
    $(".newQuoteButton").css("background-color", colors[backgroundChoice]);

    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(val) {
            console.log(val);

            $(".quote").html(val[quoteNum].quote.slice(0, val[quoteNum].quote.length));
            $(".author").html(val[quoteNum].author.slice(0, val[quoteNum].author.length));
        }
    );

    $('.newQuoteButton').on('click', function(e) {

        $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(val) {
                console.log(val);

                $(".quote").html(val[quoteNum].quote.slice(0, val[quoteNum].quote.length));
                $(".author").html(val[quoteNum].author.slice(0, val[quoteNum].author.length));
            }
        );

    });

});