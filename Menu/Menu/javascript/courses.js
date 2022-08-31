const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("search-list")
    const items = document.querySelectorAll(".items")
    const pname = storeitems.getElementsByTagName("h3")

    for(var i=0; i<pname.length; i++){
        let match = items[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                items[i].style.display = "";
            }
            else{
                items[i].style.display = "none";
            }

        }


    }
}