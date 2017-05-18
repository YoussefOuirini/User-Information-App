$(document).ready(function(){
    var suggestionFinder = function () {
        var time= Date.now();
        $("#user").keyup(function(){
            if (time+3000 < Date.now()) {
                time=Date.now();
                $.post('/search', {
                    typedIn: $("#user").val()
                }, 
                (data, status) => {
                    console.log(data)
                    document.getElementById("suggestion1").value = data[0];
                    if (data[1]!= undefined) {
                        document.getElementById("suggestion2").value = data[1];
                    }
                });
            }
        });
    };
    suggestionFinder();
});