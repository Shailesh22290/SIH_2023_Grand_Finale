
let r = []
//         tutorial link : https://www.youtube.com/watch?v=gnqHNJNc_0A
onload = fetch("prices.csv").then(res => {
    return res.text()
}).then(data => {
    let s = data.split("\n");
    // let r=s.split(",");
    console.log(s);
    // console.log(r);
    // return s;
    for (let i = 1; i + 1 < s.length; i++) {
        s[i].split("\r");
        // console.log(s[i]);
        r.push(s[i].split(","));
        // r[i-1][2].split("\r");
    }
    // console.log(r);
    let genr = genderratio(r);
    piechartgen(genr);

});

function genderratio(arrays) {
    let m = 0;
    let f = 0;
    let s = 0;
    arrays.forEach((row, i) => {
        if (arrays[i][9] == "m\r") {
            m += 1;
        }
        if (arrays[i][9] == "f\r") {
            f += 1;
        }
        if (arrays[i][9] == "t\r") {
            s += 1;
        }

    })
    console.log(m, f, s);
    // console.log(i);
    return [m, f,s];
}
function piechartgen(gen) {
    var xValues = ['Male', 'Female','Others'];
    var yValues = gen;
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797"
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Gender Ratio"
            }
        }
    });
}
// result.forEach(e => {
//     let m = e.map(e => {
//         return e;
//     })
//     // let ce = document.createElement("tr");
//     // ce.innerHTML = m;
//     // if (ce.innerText != "") {
//     //     document.querySelector("table").appendChild(ce);
//     // }
//     // console.log(e);

// console.log(e);
// })
