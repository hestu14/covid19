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
     $("#terjangkit").html(result[0].positif);
     $("#sembuh").html(result[0].sembuh);
     $("#meninggal").html(result[0].meninggal);
    }});
});


