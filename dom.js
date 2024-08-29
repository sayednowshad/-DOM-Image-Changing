function changeImage(fileName){

   let doc =  document.querySelector("#image");

   doc.setAttribute('src', fileName);

}

//{/* <img id="image" src="audi.jpg"/> <br><br>
//<button onclick="changeImage('bugatti.jpg')" id="buttons"> image 1  </button>
//<button onclick="changeImage('Ferrari.jpg')" id="buttons"> image 2 </button>
//<button onclick="changeImage('lamborgini.jpg')" id="buttons"> image 3 </button>
// <button onclick="changeImage('audi.jpg')" id="buttons"> image 4 </button> */}