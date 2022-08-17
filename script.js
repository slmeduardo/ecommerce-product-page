const productImg = document.getElementById("product-img")
const productImgModal = document.getElementById("product-img-modal")
const bottomImgs = Array.from(document.getElementsByClassName("bottom-img"))
const elems = document.querySelectorAll(".bottom-img")
const modal = document.getElementById("myModal")

function changeImage(element, modal = false) {
    Array.from(elems).forEach(el => {
        el.classList.remove('selected')
    })
    modal?productImgModal.src = element.src.replace('-thumbnail', '') : productImg.src = element.src.replace('-thumbnail', '')
    element.classList.add("selected")
}
elems.forEach(btn => (btn.onclick = () =>
changeImage(btn, btn.classList.contains('btn-modal'))))

const span = document.getElementsByClassName("close")[0];

productImg.onclick = function() {
    console.log(modal)
    modal.style.display = "block";
  }

span.onclick = function() {
    modal.style.display = "none";
  }

  
  function minusValue() {
    const amountValue = parseInt(document.getElementById('amountValue').innerHTML)
    document.getElementById('amountValue').innerHTML = amountValue - 1
}

function plusValue() {
    const amountValue = parseInt(document.getElementById('amountValue').innerHTML)
    document.getElementById('amountValue').innerHTML = amountValue + 1
}