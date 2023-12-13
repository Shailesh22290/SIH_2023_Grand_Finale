
let r = []
//         tutorial link : https://www.youtube.com/watch?v=gnqHNJNc_0A
onload = fetch("./prices.csv").then(res => {
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
    arrays.forEach((row, i) => {
        if (arrays[i][2] == "m\r") {
            m += 1;
        }
        if (arrays[i][2] == "f\r") {
            f += 1;
        }
    })
    console.log(m, f);
    return [m, f];
}
function piechartgen(gen) {
    var xValues = ['Male', 'Female'];
    var yValues = gen;
    var barColors = [
        "#b91d47",
        "#00aba9"
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
