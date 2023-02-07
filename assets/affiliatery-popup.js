let settings = {
  isEnabled: false
}


let htmlString = ``
let modalObj = `<div id="af-modal" class="af-modal">

  <!-- Modal content -->
  <div class="af-modal-content">
    <span class="close">&times;</span>
    ${htmlString}
  </div>

</div>`

let styles = `/* The Modal (background) */
.af-modal {
  overflow: hidden;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /*overflow: auto; !* Enable scroll if needed *!*/
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.af-modal-content {
  /*background-color: #fefefe;*/
  margin: 10% auto; /* 15% from the top and centered */
  /*padding: 20px;*/
  /*border: 1px solid #888;*/
  width: max-content; /* Could be more or less, depending on screen size */
  position: relative;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 7px;
  top: 3px;
  z-index: 4;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

if (settings.isEnabled) {
  document.body.innerHTML = document.body.innerHTML + modalObj
  let modal = document.getElementById("af-modal")
  modal.style.display = "block"
  let close = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
  close.onclick = function () {
    modal.style.display = "none";
  }
}
