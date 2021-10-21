function tempinfo() {
    let user = {
        f_naam: document.getElementById("f_naam").value,
        m_naam: document.getElementById("m_naam").value,
        l_naam: document.getElementById("l_naam").value,
        roll: document.getElementById("roll").value,
        sem: document.getElementById("sem").value,
        library: document.getElementById("library").value,
        branch: document.getElementById("branch").value
    }
    localStorage.setItem('temp', JSON.stringify(user))
}
function notPresent(element) {
    let my_eroor = { f_naam: "label_naam", m_naam: "label_naam", l_naam: "label_naam", roll: "label_roll", library: "label_library", branch: "label_branch" }
    let my_eroor_dark = { f_naam: "tr_naam", m_naam: "tr_naam", l_naam: "tr_naam", roll: "tr_roll", library: "tr_library", branch: "tr_branch" }
    let a = my_eroor[element]
    let b = my_eroor_dark[element]
    document.getElementById(a).style.color = "red";
    document.getElementById(b).style.backgroundColor = "rgba(0,0,0, .1)";
    if (localStorage.getItem('error_element') == null) {
        let error_element = [[a, b]]
        localStorage.setItem('error_element', JSON.stringify(error_element))
    }
    else {
        errorStr = localStorage.getItem('error_element')
        error_element = JSON.parse(errorStr)
        new_element = [a, b]
        for (let index = 0; index < error_element.length; index++) {
            errorb = error_element[index]
            for (let i = 0; i < 2; i++) {
                if (errorb[i] == new_element[i]) {
                    return
                }
            }
        }
        error_element.push([a, b])
        localStorage.setItem('error_element', JSON.stringify(error_element))
    }
}
function update() {
    let a = localStorage.getItem('error_element')
    let abhi = JSON.parse(a)
    if (abhi == null) {
        return
    }
    else {
        abhi.forEach(element => {
            document.getElementById(element[0]).style.color = "black"
            document.getElementById(element[1]).style.backgroundColor = 'rgba(0,0,0,0)';
        });
    }
}
function specific(element) {
    let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/", "`", "~"]
    if (element == "f_naam" || element == "l_naam" || element == "m_naam") {
        a = document.getElementById(element).value
        for (let index = 0; index < a.length; index++) {
            if (a[index] == null || a[index] == "") {
                alert("hi")
                return false
            }
            if (!isNaN(a[index])) {
                alert("You can't enter number in name")
                notPresent(element)
                return false;
            }
            else {
                for (const x of symbols) {
                    if (a[index] == x) {
                        alert("You can't enter symbols in name")
                        notPresent(element)
                        return false;
                    }
                }
            }
        }
        return true
    }
    if (element == "roll") {
        a = document.getElementById(element).value
        if (isNaN(a)) {
            alert("You can't enter character in roll number")
            notPresent(element)
            return
        }
        else if (a < 2000000000000) {
            alert("Invalid roll number")
            notPresent(element)
            return
        }
        return true
    }
    if (element == "library") {
        a = document.getElementById(element).value
        for (let index = 0; index < 7; index++) {
            if (index < 2) {
                if (a[index] == "" || a[index] == null || isNaN(a[index])) {
                    alert("Invalid library number \nFormat Example ( 20CS001 )")
                    notPresent(element)
                    return false;
                }
            }
            if (index > 1) {
                if (index < 4) {
                    if (a[index] == "" || a[index] == null || !isNaN(a[index])) {
                        alert("Invalid library number \nFormat Example ( 20CS001 )")
                        notPresent(element)
                        return false;
                    }
                    else if (isNaN(a[index])) {
                        for (const x of symbols) {
                            if (a[index] == x) {
                                alert("You can't enter symbols in name")
                                notPresent(element)
                                return false;
                            }
                        }
                    }
                }
                else if (index > 3) {
                    if (a[index] == "" || a[index] == null || isNaN(a[index])) {
                        alert("Invalid library number \nFormat Example ( 20CS001 )")
                        notPresent(element)
                        return false;
                    }
                }
            }
        }

    }
}


function check() {
    Array = ["f_naam", "m_naam", "l_naam", "roll", "library", "branch"]
    update()
    for (let element of Array) {
        let a = document.getElementById(element).value
        if (a == "" && element != "m_naam") {
            notPresent(element)
            alert("Please fill all the entry")
            return false
        }
        else {
            pta = specific(element)
            if (pta == false) {
                return false
            }
        }
    }
    return true
}
function forward(){
    button=document.getElementById('submit')
    button.click()
}

add = document.getElementById("add");
add.addEventListener("click", () => {
    fill = check()
    if (fill == true) {
        tempinfo()
        forward()
        localStorage.removeItem('error_element')
    }
})