$(() => {
  $("form").submit((e) => {

    e.preventDefault();

    $.post("/", {
      fName: $("#fName").val(),
      lName: $("#lName").val(),
    })
    .done((response) => {
      let info = $("#info").html();

      info = info + response + "<br>";

      $("#info").html(info);
    });

  });
});
