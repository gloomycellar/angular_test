app.filter('durations', function(){
    return function(session){
        switch (session){
            case 1:
                return 'One Hour';
            case 2:
                return 'Two Hours';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
        }
    }
});
