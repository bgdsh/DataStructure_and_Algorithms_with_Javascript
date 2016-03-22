/**
 * Created by bgd on 16/3/23.
 */
;(function ($) {
    var callbacks = $.Callbacks();
    $.subscribe = callbacks.add;
    $.publish = callbacks.fire;
    $.unsubscribe = callbacks.remove;

    //有问题,每次publish,两个订阅都会触发,只能通过数据字段来做限定
    $.subscribe("new-user", function (e, data) {
        var compliedTemplate;
        if (data.name) {
            compliedTemplate = _.template($("#userTemplate").html());
            $("#users").append(compliedTemplate(data));
        }

    });
    $.subscribe("new-rating", function (e, data) {
        var compliedTemplate;
        if (data.movie) {
            compliedTemplate = _.template($("#ratingsTemplate").html());
            $("#ratings").append(compliedTemplate(data));
        }
    });
    $("#add").on("click", function (e) {
        e.preventDefault();
        var strUser = $("#weibo_handle").val();
        var strMovie = $("#movie_seen").val();
        var strRating = $("#movie_rating").val();
        $.publish("new-user", {name: strUser});
        $.publish("new-rating", {movie: strMovie, rating: strRating});
    })
})(jQuery);