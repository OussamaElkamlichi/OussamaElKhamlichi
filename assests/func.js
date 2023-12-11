document.addEventListener('DOMContentLoaded', function() {
    var pdfLink = document.getElementById('pdfLink');

    pdfLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        var pdfPath = pdfLink.getAttribute('href');
        window.open(pdfPath, '_blank'); 
    });
});
