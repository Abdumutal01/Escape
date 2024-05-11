let elBody = document.querySelector("body");
elBody.style.margin = "0px"
elBody.style.background = "#F7F7F7"


let elHeader = document.createElement("header");
elHeader.style.backgroundImage = "url(./img/headerBg.png)"
elHeader.style.backgroundRepeat = "no-repeat"
elHeader.style.backgroundSize = "cover"
elHeader.style.paddingBottom = "80px"
elBody.appendChild(elHeader);



let navUl = ["Home", "Categories", "About", "Contact"];

function heroFunc() {
    let divContainer = document.createElement("div");
    divContainer.style.width = "960px"
    divContainer.style.margin = "0 auto"
    elHeader.appendChild(divContainer);


    let elNav = document.createElement("nav");
    divContainer.appendChild(elNav)

    let logo = document.createElement("h1");
    logo.innerText = "Escape.";
    logo.style.fontSize = "26px";
    logo.style.lineHeight = "26px";
    logo.style.color = "#FFFFFF"
    elNav.appendChild(logo)

    let navList = document.createElement("ul")
    for (let i = 0; i < navUl.length; i++) {
        let navItem = document.createElement("li")
        navItem.innerHTML = navUl[i];
        navItem.style.listStyle = "none"
        navList.appendChild(navItem)
        navItem.style.color = 'white'
    }
    elNav.appendChild(navList)
    navList.style.display = 'flex'
    navList.style.gap = '30px'
    elNav.style.display = 'flex'
    elNav.style.justifyContent = 'space-between'
    elNav.style.alignItems = 'center'

    let elTitle = document.createElement("h2");
    elTitle.innerText = "Let's do it together."
    elTitle.style.marginTop = "105px"
    elTitle.style.color = "#FFFFFF"
    elTitle.style.fontSize = "50px"
    elTitle.style.fontWeight = "400"
    divContainer.appendChild(elTitle);

    let headerText = document.createElement("p")
    headerText.innerText = "We travel the world in search of stories. Come along for the ride."
    elTitle.style.textAlign = "center"
    headerText.style.fontWeight = "400"
    headerText.style.fontSize = "17px"
    headerText.style.textAlign = "center"
    headerText.style.color = " #FFFFFFA1"
    headerText.style.marginTop = "-35px"
    divContainer.appendChild(headerText);


    let headerBtn = document.createElement("button");
    headerBtn.innerText = "View Latest Posts"
    headerBtn.style.padding = "12px 31px"
    headerBtn.style.color = "#FFFFFF"
    headerBtn.style.backgroundColor = "#DD783F";
    headerBtn.style.textAlign = "center"
    headerBtn.style.display = "flex"
    headerBtn.style.margin = "0 auto"
    headerBtn.style.marginTop = "40px"
    headerBtn.style.marginBottom = "158px"
    headerBtn.style.border = "none"
    divContainer.appendChild(headerBtn)
}
heroFunc();

let linksBoxArr = ["Nature", "Photography", "Relaxation", "Vacation", "Travel", "Adventure"];


function heroListFunc() {
    let nature = document.createElement("div")
    nature.style.backgroundColor = "#FFFFFF"
    elBody.appendChild(nature)


    let divContainer = document.createElement("div")
    divContainer.style.width = "960px"
    divContainer.style.backgroundColor = "#FFFFFF"
    divContainer.style.padding = "10px 0px"
    divContainer.style.margin = "0 auto"


    let list = document.createElement('ul')
    for (let i = 0; i < linksBoxArr.length; i++) {
        let item = document.createElement("li")
        item.innerHTML = linksBoxArr[i]
        item.style.color = "#768088"
        list.append(item)
        list.style.display = "flex"
        list.style.listStyle = "none"
        list.style.justifyContent = "space-between"
        list.style.marginTop = "10px"
    }
    divContainer.appendChild(list)
    nature.append(divContainer)
}
heroListFunc();


let tegMain = document.createElement("main");
elBody.appendChild(tegMain);

function mainFunc() {
    let divContainer2 = document.createElement("div");
    divContainer2.style.width = "960px"
    divContainer2.style.margin = "0 auto"
    tegMain.appendChild(divContainer2)


    let mainTitle = document.createElement("h3");
    mainTitle.style.margin = "0 auto"
    mainTitle.style.marginTop = "60px"
    mainTitle.innerText = "Featured Posts"
    mainTitle.style.color = "#2E2E2E"
    mainTitle.style.fontSize = "20px"
    mainTitle.style.fontWeight = "400"
    mainTitle.style.borderBottom = "2px solid #DEDEDE"
    mainTitle.style.paddingBottom = "16px"
    mainTitle.style.fontFamily = "Oxygen"
    mainTitle.style.width = "161px"
    mainTitle.style.textAlign = "center"
    mainTitle.style.marginBottom = "20px"
    divContainer2.appendChild(mainTitle)


    let mainGeinerDiv = document.createElement("div");
    mainGeinerDiv.style.display = "flex"
    mainGeinerDiv.style.justifyContent = "space-between"
    divContainer2.appendChild(mainGeinerDiv);


    let mainGeinerDivBox1 = document.createElement("div");
    mainGeinerDivBox1.style.width = "420px"
    mainGeinerDivBox1.style.padding = "0px 20px"
    mainGeinerDivBox1.style.backgroundImage = "url(../img/mainFirstImg.png)"
    mainGeinerDivBox1.backgroundRepeat = "no-repeat";
    mainGeinerDivBox1.backgroundSize = "cover";
    mainGeinerDiv.appendChild(mainGeinerDivBox1);


    let mainInner = document.createElement("h4");
    mainInner.innerText = "The Road Ahead";
    mainInner.style.fontSize = "27px"
    mainInner.style.fontWeight = "400"
    mainInner.style.color = "#FFFFFF"
    mainInner.style.marginTop = "130px"
    mainGeinerDivBox1.appendChild(mainInner)


    let mainElText = document.createElement("p");
    mainElText.innerText = "The road ahead might be paved - it might not be."
    mainElText.style.fontWeight = "400"
    mainElText.style.fontSize = "14px"
    mainElText.style.lineHeight = "25px"
    mainElText.style.color = "#FFFFFFB2"
    mainGeinerDivBox1.appendChild(mainElText)



    let mainElUserImg = document.createElement("img");
    mainElUserImg.src = "../img/mainUserImg.png";
    mainGeinerDivBox1.appendChild(mainElUserImg)

    // /////////////////////////////////////////

    let mainGeinerDivBox2 = document.createElement("div");
    mainGeinerDivBox2.style.width = "420px"

    mainGeinerDivBox2.style.padding = "0px 20px"
    mainGeinerDivBox2.style.backgroundImage = "url(../img/mainTwoImg.png)"
    mainGeinerDivBox2.backgroundRepeat = "no-repeat";
    mainGeinerDivBox2.backgroundSize = "cover";

    mainGeinerDiv.appendChild(mainGeinerDivBox2);


    let mainInner2 = document.createElement("h4");
    mainInner2.innerText = "From Top Down";
    mainInner2.style.fontSize = "27px"
    mainInner2.style.fontWeight = "400"
    mainInner2.style.color = "#FFFFFF"
    mainInner2.style.marginTop = "130px"

    mainGeinerDivBox2.appendChild(mainInner2)


    let mainElText2 = document.createElement("p");
    mainElText2.innerText = "Once a year, go someplace you’ve never been before."
    mainElText2.style.fontWeight = "400"
    mainElText2.style.fontSize = "14px"
    mainElText2.style.lineHeight = "25px"
    mainElText2.style.color = "#FFFFFFB2"
    mainGeinerDivBox2.appendChild(mainElText2)


    let mainElUserImg2 = document.createElement("img");
    mainElUserImg2.src = "../img/mainUserImg.png";
    mainGeinerDivBox2.appendChild(mainElUserImg2)
}

let recent = {
    img: ["../img/recent1.png", "../img/recent2.png", "../img/recent3.png", "../img/recent4.png", "../img/recent5.png", "../img/recent6.png"],
    title: ["Still Standing Tall", "Sunny Side Up ", "Water Falls", "Through the Mist", "Awaken Early", "Still Standing Tall"],
    text: ["Life begins at the end of your comfort zone. ", "No place is ever as bad as they tell you it’s going to be.", "We travel not to escape life, but for life not to escape us.", "Travel makes you see what a tiny place you occupy in the world.", "Not all those who wander are lost.", "The world is a book, and those who do not travel read only one page."],
    bottom: ["../img/bottomImg.png", "../img/bottomImg2.png", "../img/bottomImg2.png", "../img/bottomImg.png", "../img/bottomImg2.png", "../img/bottomImg2.png"]
}

function mostRecent() {
    let divContainer2 = document.createElement("div");
    divContainer2.style.width = "960px"
    divContainer2.style.margin = "0 auto"


    let mainTitle = document.createElement("h3");
    mainTitle.style.margin = "0 auto"
    mainTitle.style.marginTop = "60px"
    mainTitle.innerText = "Most Recent"
    mainTitle.style.color = "#2E2E2E"
    mainTitle.style.fontSize = "20px"
    mainTitle.style.fontWeight = "400"
    mainTitle.style.borderBottom = "2px solid #DEDEDE"
    mainTitle.style.paddingBottom = "16px"
    mainTitle.style.fontFamily = "Oxygen"
    mainTitle.style.width = "161px"
    mainTitle.style.textAlign = "center"
    mainTitle.style.marginBottom = "20px"

    divContainer2.appendChild(mainTitle)


    let general = document.createElement("div");

    for (let i = 0; i < recent.img.length; i++) {
        let box = document.createElement("div")
        let imgTitle = document.createElement("img")
        imgTitle.src = recent.img[i]
        let boxTitle = document.createElement("h3")
        boxTitle.innerHTML = recent.title[i]
        boxTitle.style.fontSize = "16px"
        boxTitle.style.flexWrap = "400"
        boxTitle.style.color = "#101315"
        let boxText = document.createElement("p")
        boxText.innerHTML = recent.text[i]
        boxText.style.width = "247px"
        boxText.style.color = "#7A7A7A"
        boxText.style.fontSize = "13px"
        let bottomImg = document.createElement("img")
        bottomImg.src = recent.bottom[i]
        let boxParent = document.createElement("div")


        box.appendChild(imgTitle)
        boxParent.appendChild(boxTitle)
        boxParent.appendChild(boxText)
        box.appendChild(boxParent)
        box.appendChild(bottomImg)
        general.appendChild(box)
        divContainer2.appendChild(general)
        tegMain.appendChild(divContainer2)
    }
    general.style.display = 'flex'
    general.style.flexWrap = 'wrap'
    general.style.justifyContent = "space-between"
    general.style.marginTop = "20px"

}


function footerFunc() {

    let elFooter = document.createElement("footer")
    elFooter.style.backgroundImage = "url(../img/footerBgImg.png)"
    elFooter.style.backgroundSize = "cover"
    elFooter.style.backgroundRepeat = "no-repeat"
    elFooter.style.paddingTop = "30px"
    elFooter.style.width = "100%"
        // elFooter.style.height = "378px"
    elFooter.style.marginTop = "89px"
    elBody.appendChild(elFooter)

    let divContainer2 = document.createElement("div");
    divContainer2.style.width = "960px"
    divContainer2.style.margin = "0 auto"
        // divContainer2.style.border = "3px solid red"
    elFooter.appendChild(divContainer2)

    let footerTitle = document.createElement("h2")
    footerTitle.innerText = "Stay in Touch"
    footerTitle.style.fontWeight = "400"
    footerTitle.style.width = "188px"
    footerTitle.style.fontSize = "25px"
    footerTitle.style.textAlign = "center"
    footerTitle.style.color = "#EFEFEF"
    footerTitle.style.margin = "0 auto"
    footerTitle.style.paddingBottom = "17px"
    footerTitle.style.marginTop = "82px"
    footerTitle.style.borderBottom = "2px solid #DEDEDE"

    divContainer2.appendChild(footerTitle)
    let footerDivForInput = document.createElement("div")
    footerDivForInput.style.display = "flex"
    footerDivForInput.style.justifyContent = "center"
    footerDivForInput.style.alignItems = "center"
    footerDivForInput.style.marginTop = "20px"
    footerDivForInput.style.marginBottom = "80px"

    divContainer2.appendChild(footerDivForInput)

    let footerInput = document.createElement("input")
    footerInput.style.padding = "18px 35px"
    footerInput.style.backgroundColor = "#FFFFFF"
    footerInput.style.border = "none"
    footerInput.style.outline = "none"
    footerInput.placeholder = "Enter your email address"
    footerDivForInput.appendChild(footerInput)

    let footerBtn = document.createElement("button")
    footerBtn.innerHTML = "Submit"
    footerBtn.style.padding = "18px 35px"

    footerBtn.style.backgroundColor = "#FFFFFF47"
    footerBtn.style.color = "#FFFFFF"
    footerBtn.style.border = "none"
    footerBtn.style.outline = "none"
    footerDivForInput.appendChild(footerBtn)


    let elNav = document.createElement("nav");
    divContainer2.appendChild(elNav)

    let logo = document.createElement("h1");
    logo.innerText = "Escape.";
    logo.style.fontSize = "26px";
    logo.style.lineHeight = "26px";
    logo.style.color = "#FFFFFF"
    elNav.appendChild(logo)

    let navList = document.createElement("ul")
    for (let i = 0; i < navUl.length; i++) {
        let navItem = document.createElement("li")
        navItem.innerHTML = navUl[i];
        navItem.style.listStyle = "none"
        navList.appendChild(navItem)
        navItem.style.color = 'white'
    }
    elNav.appendChild(navList)
    navList.style.display = 'flex'
    navList.style.gap = '30px'
    elNav.style.display = 'flex'
    elNav.style.justifyContent = 'space-between'
    elNav.style.alignItems = 'center'

}

mainFunc()
mostRecent()
footerFunc()