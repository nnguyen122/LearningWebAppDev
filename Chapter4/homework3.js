var main = function() {
    "use strict";
    // Average
    function exercise1(a1) {
        var sum = 0;
        var len = a1.length;
        if (len === 0) {
            return 0;
        } else {
            a1.forEach(function(value) {
                sum = sum + value;
            });
            return sum / len;
        }
    }
    // Max
    function exercise2(a1) {
        var max = a1[0];
        a1.forEach(function(value) {
            if (value > max) {
                max = value;
            }
        });
        return max;
    }
    // Is at leat one even   
    function exercise3(a1) {
        var even = false;
        a1.forEach(function(value) {
            if ((value % 2) === 0) {
                even = true;
                return (even ? "true" : "false");
            }
        });
        return even;
    }
    // Is all even    
    function exercise4(a1) {
        var even = true;
        a1.forEach(function(value) {
            if ((value % 2) !== 0) {
                even = false;
                return false;
            }
        });
        return (even ? "true" : "false");
    }
    // one string  
    function arrayContain(a1, str) {
        var found = false;
        a1.forEach(function(value) {
            if (value === str) {
                found = true;
                return false;
            }
        });
        return (found ? "true" : "false");
    }

    function arrayContainTwo(a1, str) {
        var found = false;
        var count = 0;
        a1.forEach(function(value) {
            if (value === str) {
                count = count + 1;
            }
            if (count === 2) {
                found = true;
                return false;
            }
        });
        return (found ? "true" : "false");
    }

    function arrayContainThree(a1, str) {
        var found = false;
        var count = 0;
        a1.forEach(function(value) {
            if (value === str) {
                count = count + 1;
            }
            if (count === 3) {
                found = true;
                return false;
            }

        });
        return (found ? "true" : "false");
    }

    //generalize
    function arrayContainNTimes(a1, str, n) {
        var found = false;
        var count = 0;
        a1.forEach(function(value) {
            if (value === str) {
                count = count + 1;
            }
            if (count === n) {
                found = true;
                return false;
            }
        });
        return (found ? "true" : "false");
    }

    var $content = exercise1([2, 4, 3, 5, 6]);
    $("body main .exercise1").append($content);


    $content = exercise2([2, 4, 3, 5, 6]);
    $("body main .exercise2").append($content);

    var $content1 = exercise3([2, 4, 3, 5, 6]);
    $("body main .exercise3").append($content1);

    var $content2 = exercise4([2, 4, 3, 5, 6]);
    $("body main .exercise4").append($content2);

    $content2 = arrayContain(["hello", "world"], "hello");
    $("body main .exercise5 .test1").append($content2);
    $content2 = arrayContain(["hello", "world"], "good bye");
    $("body main .exercise5 .test2").append($content2);
    $content2 = arrayContain(["hello", "world", "good bye"], "good bye");
    $("body main .exercise5 .test3").append($content2);

    $content2 = arrayContainTwo(["a", "b", "a", "c"], "a");
    $("body main .exercise6 .test1").append($content2);
    $content2 = arrayContainTwo(["a", "b", "a", "c"], "b");
    $("body main .exercise6 .test2").append($content2);
    $content2 = arrayContainTwo(["a", "b", "a", "c", "a"], "a");
    $("body main .exercise6 .test3").append($content2);

    $content2 = arrayContainThree(["a", "b", "a", "c", "a"], "a", 3);
    $("body main .exercise6 .test4").append($content2);

    $content2 = arrayContainNTimes(["a", "b", "a", "c", "a"], "a", 2);
    $("body main .exercise6 .test5").append($content2);
    $content2 = arrayContainNTimes(["a", "b", "a", "c", "a"], "a", 4);
    $("body main .exercise6 .test6").append($content2);
    $content2 = arrayContainNTimes(["a", "b", "a", "c", "a"], "b", 2);
    $("body main .exercise6 .test7").append($content2);
    $content2 = arrayContainNTimes(["a", "b", "a", "c", "a"], "b", 1);
    $("body main .exercise6 .test8").append($content2);
    $content2 = arrayContainNTimes(["a", "b", "a", "c", "a"], "d", 0);
    $("body main .exercise6 .test9").append($content2);

    //use under_score 
    function under_score2(a1) {
        return _.max(a1);
    }

    function under_score3(a1) {
        var even = _.find(a1, function(num) {
            return num % 2 === 0;
        });
        return (even === undefined ? "false" : "true");
    }

    function under_score4(a1) {
        var evens = _.filter(a1, function(num) {
            return num % 2 === 0;
        });
        return ((_.size(evens) === _.size(a1)) ? "true" : "false");
    }

    $content = under_score2([2, 4, 3, 5, 6]);
    $("body main .underScore2").append($content);

    $content2 = under_score3([2, 4, 3, 5, 6]);
    $("body main .underScore3").append($content2);

    $content2 = under_score4([2, 4, 3, 5, 6]);
    $("body main .underScore4").append($content2);
};


$(document).ready(main);