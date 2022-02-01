$(function() {
    $("#search").click(function() {
        $("ol").empty();

        let search = $("#input1").val();
        if (!search) {
            return;
        }

        $.ajax("http://localhost:8080", {
                "type": "GET",
                "data": {
                    "value": search
                },
            }).done(success)
            .fail(failure);

    });
});

function success(data, status) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        $("ol").append("<li>" + "(" + data[i].wordtype + ") ::" + data[i].definition + "</li><br>");
    }
}

function failure(xhr, status, exception) {
    console.log(xhr, status, exception);
}