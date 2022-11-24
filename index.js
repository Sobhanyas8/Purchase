let Count=0;

function INC() {
    Count+=1;
    document.getElementById("productNoD").textContent=Count;
}

function DEC() {
    if (Count>0) {
        Count-=1;
    document.getElementById("productNoD").textContent=Count;
    } else {

    }  
}

function PURCHE() {
    document.getElementById("error").innerText="Something Went Wrong, Please Try Again"


}

