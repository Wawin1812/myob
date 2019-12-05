//Using Ajax jquery to fetch data from json. 
$.ajax({
    url: 'data.json',
    dataType: 'jsonp',
    Type: 'get',
    header: 'Access-Control-Allow-Origin',
    cache: false,
    success: function table(data) {
        //looped through the item in the json data
        $(data.data.items).each(function(index, value) {
            var record = "<tr><td>" + value.author.login + "</td><td>" + value.board.id + "</td><td>" + value.subject + "</td></tr>";
            //console.log(value.author.login, value.board.id, value.subject);
            //append rows to the table 
            $("table").append(record);

        })
    }
});
// $.getJSON("data.json", function(data) {
//     $(data.data.items).each(function(index, value) {
//         console.log(value.author);
//     });

// })