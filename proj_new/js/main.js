/**
 * Created by danilakimov on 18.11.16.
 */

$(".show__marks").on("click", function () {
    $(this).parent().find(".marks__all").toggle();
});

$(".blocks").on("click", function () {
    window.location = $(this).find("a").attr('href');
});

$('.dropdown-toggle').dropdown();

$('.js__mark_submit').click(function (e){
    e.preventDefault();
    var newThis = $(this);
    swal({
        title: "Оценка поставлена",
        text: "Оценка успешно поставлена",
        type: "success",
    }, function () {
        window.location = newThis.attr('href');
    });
});