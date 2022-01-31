$(function() {
    $("#search").click(function() {
        let search = $("#input1").val();
        if (!search) {
            $("ol").empty();
            return;
        }
        let url = "http://localhost:8080/?value=" + search;
        console.log(url);

        $.get(url)
            .done(success)
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