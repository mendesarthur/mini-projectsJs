function send() {
    let application = new Application();
    application.start()
}
const btn = document.querySelector("#main-btn")
btn.addEventListener("click", send)


//class Application

class Application {
        
  start() {
            let house = this.getApllicationForm();
            this.clearApplicationForm();
            this.throwInHTML( this.makeRentedElement(house), this.makeHouseText(house) )
        }


        //remocao e adicao do titulo "Lista de imoveis" (quando não tiver nenhum imovel, o titulo nao aparecerá)
        createTitle() {
            let titleRentedText = document.createElement("h3");
            titleRentedText.innerText = "Lista de Imóveis";
            document.getElementById("title").appendChild(titleRentedText);
        }

        static removeTitle() {
            let titleDiv = document.getElementById("title");
            titleDiv.removeChild(titleDiv.children[0]);
        }



        getApllicationForm() {
            let houseRented = false;
            let houseType = document.querySelector("input[name='house-type']:checked").value;
            let houseArea = document.querySelector("input[name='area']").value;
            try {        
            houseRented = document.querySelector("input[name='alugado']:checked").value;
            } catch(error) {

            }
            let house = new Houses(houseType, houseArea, houseRented);
            return house;
        }

        clearApplicationForm() {
            document.querySelector("input[name='house-type']:checked").checked = false;
            document.querySelector("input[name='area']").value = "";
            document.querySelector("input[name='alugado']").checked = false;
        }

        makeHouseText(houseInfo) {
            let text = ""
            text = "Tipo: " + houseInfo.type + "<br>" + "Área: " + houseInfo.area + "m²" 
            let divElement =  document.createElement("div");
            divElement.innerHTML = text;
            return divElement;
        }

        makeRentedElement(houseInfo) {
            if (houseInfo.rented == false) {
                //Não será criado nenhum elemento adicional
            } else {
                let element = document.createElement("div")
                element.style.backgroundColor = "yellow";
                element.style.color = "black";
                element.style.textAlign = "center";
                element.innerText = "ALUGADO";
                return element;
            }
        }

        throwInHTML(element, text ) {
            let liElement =  document.createElement("li");
            if (element) {
                liElement.appendChild(element);
            } else {
            }
            liElement.appendChild(text);
            let removeButton = document.createElement("button");
            removeButton.setAttribute("type", "button");
            removeButton.setAttribute("onclick", "Application.deleteHouse(this)");
            removeButton.classList.add("delete-button");
            removeButton.innerText = "Apagar";
            removeButton.style.position = "absolute";
            removeButton.style.bottom = "5px";
            removeButton.style.rigth = "50px;"
            liElement.appendChild(removeButton);
            liElement.classList.add("house-li");
            let ulElement = document.getElementById("house-list")
            if(ulElement.children.length == 0) {
                this.createTitle();
            }
            ulElement.appendChild(liElement);
        }

        //Para deletar algum elemento criado, será criado um método estático para não necessitar de uma instancia para deletar

        static deleteHouse(element) {
            //ao clicar o botão vamos remover o titulo se ainda a nossa lista tiver 1 elemento (A LI que ainda não foi removida)
            if(element.parentNode.parentNode.children.length == 1) {
                Application.removeTitle();
            }
            element.parentNode.parentNode.removeChild(element.parentNode);


        }
}

// class Houses

class Houses {
    constructor(type, area, rented) {
        this.type = type;
        this.area = area;
        this.rented = rented
    }
}