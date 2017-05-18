$(document).ready(function(){
    var suggestionFinder = function () {
        $("#user").keyup(function(){
            // var count = 0;
            // var filter = $(this).val();
            $.post('/search', {
                typedIn: $("#user").val()
            }, 
            (data, status) => {
                console.log(data)
                document.getElementById("suggestion1").value = data[0];
                if (data[1]!= undefined) {
                    document.getElementById("suggestion2").value = data[1];
                }
                // alert("Data: " + data + "\nStatus: " + status);
                //the part that is going to make the suggestion show up in your search. On key up event listener.
                // google for live search.
                // if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                //     $(this).fadeOut;
                // }
                // else {
                //     $(this).show()
                //     count++
                // }
                // $.get('/search', (data,status) => {
                //     if (parsedData[i].firstname.slice(0,typedIn.length)===typedIn) {
                //         (console.log("Pizza"))
                //     }
                // })
            });
            // var numberItems= count
        });
    };
    suggestionFinder();
});

// myFunction(typedIn) {
//     $.post("./search", typedIn, function(data,status){
//         document.getElementById("suggestion").value = data
//     })
// }