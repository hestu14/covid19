$(document).ready(function(){
var d = new Date();
let b = (d.getMonth());
let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
    ];
let bulan = months[b];

$("#date").html(d.getDate() + " " + bulan + " " + d.getFullYear());
    $.ajax({url: "https://kawalcovid19.harippe.id/api/summary", success: function(result){
    var positif =  result.confirmed.value;
    // var positif2 = positif.split(",");
    // var positif3 = positif2.join("");

    var sembuh = result.recovered.value;
    var meninggal = result.deaths.value;

    $("#terjangkit").html(positif);
    $("#sembuh").html(sembuh);
    $("#meninggal").html(meninggal);
    
    let rate = meninggal / positif * 100;
    let rate2 = rate.toFixed(2);
    $("#rate").html(rate2);

    }});
});



