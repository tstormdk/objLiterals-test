
let container = document.querySelector(".intro_container");
const objwidth = document.querySelector(".intro_container").clientWidth;
const objHeight = document.querySelector(".intro_container").clientHeight;
const div = document.createElement('div');


function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }


for (let index = 0; index < 10; index++) {


let stylew = getRandomNumber(0, objwidth);
let styleh = getRandomNumber(0, objHeight);

    div.innerHTML += `
    <div class="lantern" id="lantern" style="left:${stylew}px;top:${styleh}px;">
            <div class="outerLantern"></div>
                <div class="lanternBody">
                    <div class="innerLight">
    
                    </div>
                </div>
        </div>`;
}

container.appendChild(div);