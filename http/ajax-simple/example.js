function load(){
    // alert();
    var xhr = new XMLHttpRequest;
        xhr.open("GET","data.txt");
        xhr.onload = function(){
            alert(xhr.responseText);
        };
        xhr.send();
        
}