
var opengov = new RestOpenGov();

$(function() {

    if(typeof sessionStorage.getItem("imagesHtml") == 'undefined' || sessionStorage.getItem("imagesHtml") == null) {

        opengov.search({ dataset: 'bafici', query: '_id:bafici11-films-* AND filepic1:* AND id_film:*', limit: 100 }, function(obj) {

            var html = '';
            
            for(var i in obj) {
                html += '<span><img src="http://www.bafici.gov.ar/home11/photobase/films/' + obj[i]._source.filepic1 + '" /></span>';
            }

            sessionStorage.setItem("imagesHtml", html);

            fx(html);
        });
    } else {
        fx(sessionStorage.getItem("imagesHtml"));
    }

});

function fx(html) {
    $('#container').html(html);
    $('#screen').show();
    $('#title').show();

    setInterval(function() {
        $($('#container img').get(Math.floor(Math.random() * $('#container img').length)))
            .animate({ opacity: 1 }, { duration: 200 })
            .animate({ opacity: 0.7 }, { duration: 100 });
    }, 70);
}