$(document).ready(function () {
  $("#chat-btn").click(() => {
      $(".chat-container")
      .append(
        $("<div>", { class: "self-chat  bg-white shadow-sm text-dark" })
          .append(
            $("<div>")
              .append(
                $("<img/>", {
                  src: "https://media.istockphoto.com/photos/programming-man-picture-id910425902?k=6&m=910425902&s=170667a&w=0&h=vygTo_gBGVx0R9MMo0Txrxp7xmDzLH0-0ZgrazLZMw4=",
                  class: "logo rounded-circle mx-1",
                })
              )
              .append(
                $("<label>", {
                  text: "You",
                  class: "fw-bolder mx-1",
                })
              )
          )
          .append(
            $("<p>", {
              class: "px-2",
              text: $("#chat-input").val(),
            })
          )
      )
      .scrollTop($(".chat-container")[0].scrollHeight);
  });
});
