var main = function() {
    "use strict";

    function init() {
        $.ajax({
            url: "http://localhost:3000/actors",
            type: "json",
            method: "GET",
            success: function(result) {
                result.forEach(function(a) {
                    var item_template = '<div class="mdl-list__item"><span class="mdl-list__item-primary-content">     <i class="material-icons mdl-list__item-avatar">person</i>      <span id="1" class="anh-ActorName">somename here</span>    </span>    <a class="mdl-list__item-secondary-action" href="javascript:change_star();"> <i class="material-icons anh-actorStarred">star</i></a></div>';
                    var $item = $(item_template).hide();

                    var $list = $(".anh-actorList");
                    $list.append($item);                   
                    $item.find(".anh-ActorName").text(a.name);
                    $item.find(".anh_ActorName").prop("id", 999);
                    if (a.starred) {
                        $item.find(".anh-actorStarred").text("star");
                    } else {
                        $item.find(".anh-actorStarred").text("star_border");
                    };
                    $item.fadeIn();
                });
                componentHandler.upgradeAllRegistered();
            },
            error: function(result) {
                console.log("ajax error " + result.status);
            }
        });
    }

    //event handler here
    $(".anh-button").on("click", function() {
        var o = {};
        o.name = $("#actorName").val();
        o.starred = "false";
        $.ajax({
            url: "http://localhost:3000/actors",
            type: "json",
            method: "POST",
            data: o,
            success: function(result) {
                // process add new list
                location.reload();
                var item_template = '<div class="mdl-list__item"><span class="mdl-list__item-primary-content">     <i class="material-icons mdl-list__item-avatar">person</i>      <span id="1" class="anh-ActorName">somename here</span>    </span>    <a class="mdl-list__item-secondary-action" href=""> <i class="material-icons anh-actorStarred">star</i></a></div>';
                var $item = $(item_template).hide();
                var $list = $(".anh-actorList");
                $list.append($item);                
                $item.find(".anh-ActorName").text(a.name);
                $item.find(".anh_ActorName").prop("id", 999);
                if (a.starred) {
                    $item.find(".anh-actorStarred").text("star");
                } else {
                    $item.find(".anh-actorStarred").text("star_border");
                };
                $item.fadeIn();
            },
            error: function(result) {
                console.log("ajax error " + result.status);
            }
        });
    });
    function change_star(){
    //get data
    //change value
    //update data
    }   
    init();
};
$(document).ready(main);