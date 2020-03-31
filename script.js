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
    $.ajax({url: "https://api.kawalcorona.com/indonesia/", success: function(result){
    var positif =  result[0].positif;
    var positif2 = positif.split(",");
    var positif3 = positif2.join("");

    var sembuh = result[0].sembuh;
    var meninggal = result[0].meninggal;

    $("#terjangkit").html(positif);
    $("#sembuh").html(sembuh);
    $("#meninggal").html(meninggal);
    
    let rate = meninggal / positif3 * 100;
    let rate2 = rate.toFixed(2);
    $("#rate").html(rate2);

    }});
});



