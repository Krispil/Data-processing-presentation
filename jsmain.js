

var dis = true; var p; var ind = 0; var newarry = []; var newarryBup = newarry;
function newshareValue() {
    for (var key1 in shareValue) {
        var x = findPercentInt(shareValue[key1][2], shareValue[key1][3]);
        shareValue[key1].push(x);
        if (key1 == findsector(key1))
            shareValue[key1].push(sectors[key1][1]);
        else
            shareValue[key1].push("no sector");
    }
}

function findsector(x) {
    for (var y in sectors)
        if (y == x)
            return x;
    return "no sector";
} newshareValue();

function newarryofopj() {
    for (var k in shareValue) {
        var objz = {
            number: k,
            fullname: shareValue[k][0],
            shortname: shareValue[k][1],
            Gopen: shareValue[k][2],
            Gout: shareValue[k][3],
            anaf: shareValue[k][5],
            modo: shareValue[k][4]
        };
        newarry.push(objz);
    }
} newarryofopj();

function findPercentInt(x, y) {
    var mod = (y - x) / x;
    mod = mod * 100;
    return mod.toFixed(2);
}

//---------------------------------------------------------------------------
function shwotable(arry, ind) {
    var l = ind + 10;
    var tablemain = "";
    for (var k = 0; k < arry.length; k++) {
        if (k >= ind && k < l) {
            tablemain += "<tr>";
            tablemain += `<td>${arry[k].fullname} </td>`;
            tablemain += `<td>${arry[k].shortname} </td>`;
            tablemain += `<td>${arry[k].number}</td>`;
            tablemain += `<td>${arry[k].anaf} </td>`;
            tablemain += `<td>${arry[k].Gopen} </td>`;
            tablemain += `<td>${arry[k].Gout} </td>`;
            if (arry[k].modo > 0)
                tablemain += `<td  style='color:green;' >${arry[k].modo}</td>`;
            else if (arry[k].modo < 0)
                tablemain += `<td  style='color:red;' >${arry[k].modo}</td>`;
            else
                tablemain += `<td  style='color:black;' >0</td>`;
        }
    }
    if (arry.length - ind < 10) {
        var hel = 10 - (arry.length - ind)
        for (var p = 0; p < hel; p++) {
            tablemain += "<tr>";
            tablemain += `<td></td>`;
            tablemain += `<td></td>`;
            tablemain += `<td></td>`;
            tablemain += `<td></td>`;
            tablemain += `<td></td>`;
            tablemain += `<td></td>`;
            tablemain += `<td></td>`;
        }
    }
    AddButtonByPages(arry);
    gopage2(arry, ind);
    document.getElementById("info_table").innerHTML = tablemain;
} shwotable(newarry, 0);
//-------------------------------------------------------------------------

//=========================================================================

function SortcolomNumber(){
    ThArrow();
    if (dis) {
        newarry.sort((a, b) => (Number(a.number) < Number(b.number)) ? 1 : -1);
        dis = false; StyleTHfalse('number', 'number');
    } else {
        newarry.sort((a, b) => (Number(a.number) > Number(b.number)) ? 1 : -1);
        dis = true; StyleTHtrue('number', 'number');
    } shwotable(newarry, ind);
}
function SortcolomAnaf() {
    ThArrow();
    if (dis) {
        newarry.sort((a, b) => (a.anaf < b.anaf) ? 1 : -1);
        dis = false; StyleTHfalse('anaf', 'industry');
    } else {
        newarry.sort((a, b) => (a.anaf > b.anaf) ? 1 : -1);
        dis = true; StyleTHtrue('anaf', 'industry');
    } shwotable(newarry, ind); console.log(ind);
}
function SortcolomFname() {
    ThArrow();
    if (dis) {
        newarry.sort((a, b) => (a.fullname < b.fullname) ? 1 : -1);
        dis = false; StyleTHfalse('fname', 'name');
    } else {
        newarry.sort((a, b) => (a.fullname > b.fullname) ? 1 : -1);
        dis = true; StyleTHtrue('fname', 'name');
    } shwotable(newarry, ind);
}
function SortcolomSname() {
    ThArrow();
    if (dis) {
        newarry.sort((a, b) => (a.shortname < b.shortname) ? 1 : -1);
        dis = false; StyleTHfalse('sname', 'mark');
    } else {
        newarry.sort((a, b) => (a.shortname > b.shortname) ? 1 : -1);
        dis = true; StyleTHtrue('sname', 'mark');
    } shwotable(newarry, ind);
}
function SortcolomGopen() {
    ThArrow();
    if (dis) {
        newarry.sort((a, b) => (Number(a.Gopen) < Number(b.Gopen)) ? 1 : -1);
        dis = false; StyleTHfalse('gopen', 'open gate');
    } else {
        newarry.sort((a, b) => (Number(a.Gopen) > Number(b.Gopen)) ? 1 : -1);
        dis = true; StyleTHtrue('gopen', 'open gate');
    } shwotable(newarry, ind);
}
function SortcolomGout() {
    ThArrow();
    if (dis) {
        newarry.sort((a, b) => (Number(a.Gout) < Number(b.Gout)) ? 1 : -1);
        dis = false; StyleTHfalse('gout', 'End gate');
    } else {
        newarry.sort((a, b) => (Number(a.Gout) > Number(b.Gout)) ? 1 : -1);
        dis = true; StyleTHtrue('gout', 'End gate');
    } shwotable(newarry, ind);
}
function SortcolomModo() {
    ThArrow();
    console.log(ind);
    if (dis) {
        newarry.sort((a, b) => (Number(a.modo) < Number(b.modo)) ? 1 : -1);
        dis = false; StyleTHfalse('modo', 'precent');
    } else {
        newarry.sort((a, b) => (Number(a.modo) > Number(b.modo)) ? 1 : -1);
        dis = true; StyleTHtrue('modo', 'precent');
    } shwotable(newarry, ind);
}
//==================================================================================
function StyleTHfalse(x, y) {
    document.getElementById(x).innerHTML = `${y} &#9650`;
    document.getElementById(x).style.color = "white";
}

function StyleTHtrue(x, y) {
    document.getElementById(x).innerHTML = `${y} &#9660`;
    document.getElementById(x).style.color = "white";
}

function ThArrow() {
    document.getElementById('fname').innerHTML = "name"; document.getElementById('fname').style.color = "black";
    document.getElementById('sname').innerHTML = "mark"; document.getElementById('sname').style.color = "black";
    document.getElementById('number').innerHTML = "number"; document.getElementById('number').style.color = "black";
    document.getElementById('anaf').innerHTML = "industry"; document.getElementById('anaf').style.color = "black";
    document.getElementById('gopen').innerHTML = "open gate"; document.getElementById('gopen').style.color = "black";
    document.getElementById('gout').innerHTML = " End gate"; document.getElementById('gout').style.color = "black";
    document.getElementById('modo').innerHTML = "Percent"; document.getElementById('modo').style.color = "black";
}
//---------------------------------------------




function AddButtonByPages(arry) {
    var btpage = "";
    var sizepage2 = arry.length;
    p = 1;
    if (sizepage2 < 10) btpage += `<button>${p}</button>`;
    else if (sizepage2 > 10 && sizepage2 < 20) {
        btpage += `<button id='butCol' onclick='gopage1(${p})'>${p}</button>`;
        btpage += `<button id='butCol'  onclick='gopage1(${p})'>${p + 1}</button>`;
    }
    else {
        for (var i = 0; i < Math.floor(sizepage2 / 10); i++) {
            btpage += `<button id='butCol'  onclick='gopage1(${p})'>${p++}</button>`;
        }
    }
    document.getElementById("pagesbutton").innerHTML = btpage;
}

function gopage1(p) {
    if (p == 1) {
        shwotable(newarry, 0);
    }
    else if (p == 2) shwotable(newarry, 10);
    else {
        ind = p * 10;
        shwotable(newarry, ind);
    }
}

function gopage2(arry, ind) {
    var btpage2 = "";
    var sizearry = arry.length - 1;
    var x = sizearry - ind;
    if (ind >= 10 && ind + 10 < sizearry) {
        btpage2 += `<button id='bt' onclick='gopageP(${ind})'>Previous</button>`;
        btpage2 += `<button id='bt' onclick='gopageN(${ind})'>Next</button>`;
    }
    else if (ind < 10 && sizearry > 9) {
        btpage2 += `<button onclick='gopageN(${ind})'>Next</button>`;
    }
    else if (ind >= 10) {
        btpage2 += `<button onclick='gopageP(${ind})'>Previous</button>`;
    }
    if (ind == 0) btpage2 += `<p>Page: ${1}`;
    else if (ind == 10) btpage2 += `<p>Page: ${2}`;
    else btpage2 += `<p>Page: ${ind / 10}`;
    document.getElementById("pagesbutton2").innerHTML = btpage2;
}
function gopageN(x) {
    shwotable(newarry, x + 10);
}
function gopageP(x) {
    shwotable(newarry, x - 10);
}
//--------------------------------------------------------------


//----------------------------------sort by select change
function selctsort() {
   
    ThArrow(); ind = 0;
    var x = document.getElementById("list");
    var i = x.selectedIndex;
    var test = x.options[i].value;
    if (test == "allup") {
        var newarryforsort = []; newarry = newarryBup;
        for (var x = 0; x < newarry.length; x++) {
            if (newarry[x].modo > 0) {
                newarryforsort.push(newarry[x]);
            }
        }
        newarry = newarryforsort; shwotable(newarry, 0);
    }
    else if (test == "alldown") {
        var newarryforsort = []; newarry = newarryBup;
        for (var x = 0; x < newarry.length; x++) {
            if (newarry[x].modo < 0) {
                newarryforsort.push(newarry[x]);
            }
        }
        newarry = newarryforsort; shwotable(newarry, 0);
    }
    else if (test == "up10") {
        var newarryforsort = []; newarry = newarryBup;
        for (var x = 0; x < newarry.length; x++) {
            if (newarry[x].modo >= 10 || newarry[x].modo <= -10) {
                newarryforsort.push(newarry[x]);
            }
        }
        newarry = newarryforsort; shwotable(newarry, 0);
    }
    else if (test == "ddi") {
        newarry = newarryBup;
        shwotable(newarry, 0);
    }
    else if (test == "anaf") {
        var newarryforsort = []; newarry = newarryBup;
        var x = document.getElementById("list");
        var i = x.selectedIndex;
        var test2 = x.options[i].innerHTML;
        for (var x = 0; x < newarry.length; x++) {
            if (newarry[x].anaf == test2) {
                newarryforsort.push(newarry[x]);
            }
        }
        newarry = newarryforsort; shwotable(newarry, 0);
    }
}
