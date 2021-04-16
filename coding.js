
	




		var chartHidden = [
			true, 
			true, 
			true, 
			true,			
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true,
			true
		];

		var chartFunc = [
			show_chart1,
			show_chart2,
			show_chart3,
			show_chart4,			
			show_mess1,
			show_mess2,
			show_mess3,
			show_mess4,
			show_mess5,
			show_mess6,
			show_mess7,
			show_mess8,
			show_mess9,
			show_mess10,
			show_mess11,
			show_mess12,
			show_mess13,
			show_mess14,
			show_mess15,
			show_mess16,
			show_mess17,
			show_mess18,
			show_mess19,
			show_mess20,
			show_mess21,
			show_mess22
		];


function show_chart1(){
	var chart = new CanvasJS.Chart("barChart1", {
		theme: "light2",
		backgroundColor: "#F7E9D3",
		animationEnabled: true,
		title: {
			text: "Lifetime prevalence of mental health issues in Singapore"
		},
		axisX: {
			interval: 1
		},
		axisY: {
			title: "Percentage in Singapore (%)",
			scaleBreaks: {
				type: "wavy",
				customBreaks: [{
					startValue: 80,
					endValue: 210
					},
					{
						startValue: 230,
						endValue: 600
					}
			]}
		},
		data: [{
			type: "bar",
			color: "#7FA6AD",
			fillOpacity: .7,
			toolTipContent: " <b>{label}</b><br>Percentage: {y}% of surveyed people",
			dataPoints: [
				{ label: "2016", y: 13.9 },
				{ label: "2010", y: 12 }
			]
		}]
	});
	chart.render();
  }

  function show_chart2(){
	var chart2 = new CanvasJS.Chart("barChart2", {
		animationEnabled: true,
		backgroundColor: "#F1E3DC",
		title:{
			text:"Top mental health issues in Singapore"
		},
		axisX:{
			interval: 1
		},
		axisY2:{
			interlacedColor: "rgb(165,183,187,.2)",
			gridColor: "rgb(165,183,187,.1)",
			title: "Percentage in 2016 survey (%)"
		},
		data: [{
			type: "bar",
			name: "companies",
			axisYType: "secondary",
			color: "#70878E",
			fillOpacity: .7,
			dataPoints: [
				{ y: 1.6, label: "Bipolar disorder" },
				{ y: 1.6, label: "Generalized anxiety disorder" },
				{ y: 3.6, label: "OCD" },
				{ y: 4.1, label: "Alcohol abuse" },
				{ y: 6.3, label: "Major Depressive Disorder" }
			]
		}]
	});
	chart2.render();
  }

  function show_chart3(){
	var chart3 = new CanvasJS.Chart("donutChart1", {
		theme: "light2",	
		backgroundColor: "#F7E9D3",
		exportFileName: "Doughnut Chart",
		exportEnabled: true,
		animationEnabled: true,
		title:{
			text: "Mental health illness patients"
		},
		legend:{
			cursor: "pointer",
			itemclick: explodePie
		},
		data: [{
		type: "doughnut",
		explodeOnClick: true,
		startAngle: 86.4,
			innerRadius: 120,
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: #percent%",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 51, name: "Have both mental health issues and chronic disease" },
				{ y: 49, name: "Have only mental health issues" }
			]
		}]
	});
	chart3.render();
	
	function explodePie (e) {
		if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
		} else {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
		}
		e.chart3.render();
	}
  }

  function show_chart4(){
	var chart4 = new CanvasJS.Chart("donutChart2", {
		theme: "light2",
		backgroundColor: "#F1E3DC",
		exportFileName: "Doughnut Chart",
		exportEnabled: true,
		animationEnabled: true,
		title:{
			text: "Life of mental health patients"
		},
		legend:{
			cursor: "pointer",
			itemclick: explodePie
		},
		data: [{
		type: "doughnut",
		explodeOnClick: true,
		startAngle: 271.2,
			innerRadius: 120,
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: #percent%",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 90, name: "Have been affected negatively by stigma" },
				{ y: 10, name: "Have not been affected negatively by stigma" }
			]
		}]
	});
	chart4.render();
	
	function explodePie (e) {
		if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
		} else {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
		}
		e.chart4.render();
	}
	
  }

	/*adding animation on hover to "messages"*/

function show_mess1(){
	$("#mess1").addClass("animate__animated animate__bounceInUp");
}

function show_mess2(){
	$("#mess2").addClass("animate__animated animate__bounceInUp");
}

function show_mess3(){
	$("#mess3").addClass("animate__animated animate__bounceInUp");
}

function show_mess4(){
	$("#mess4").addClass("animate__animated animate__bounceInUp");
}

function show_mess5(){
	$("#mess5").addClass("animate__animated animate__bounceInUp");
}

function show_mess6(){
	$("#mess6").addClass("animate__animated animate__bounceInUp");
}

function show_mess7(){
	$("#mess7").addClass("animate__animated animate__bounceInUp");
}

function show_mess8(){
	$("#stigmaText").addClass("animate__animated animate__bounceInUp");
}

function show_mess9(){
	$("#mess10").addClass("animate__animated animate__bounceInUp");
}

function show_mess10(){
	$("#mess11").addClass("animate__animated animate__bounceInUp");
}

function show_mess11(){
	$("#mess12").addClass("animate__animated animate__bounceInUp");
}

function show_mess12(){
	$("#mess13").addClass("animate__animated animate__bounceInUp");
}

function show_mess13(){
	$("#mess14").addClass("animate__animated animate__bounceInUp");
}

function show_mess14(){
	$("#mess15").addClass("animate__animated animate__bounceInUp");
}

function show_mess15(){
	$("#mess16").addClass("animate__animated animate__bounceInUp");
}

function show_mess16(){
	$("#mess17").addClass("animate__animated animate__bounceInUp");
}

function show_mess17(){
	$("#mess18").addClass("animate__animated animate__bounceInUp");
}

function show_mess18(){
	$("#mess19").addClass("animate__animated animate__bounceInUp");
}

function show_mess19(){
	$("#mess20").addClass("animate__animated animate__bounceInUp");
}

function show_mess20(){
	$("#mess21").addClass("animate__animated animate__bounceInUp");
}

function show_mess21(){
	$("#mess22").addClass("animate__animated animate__bounceInUp");
}

function show_mess22(){
	$("#mess23").addClass("animate__animated animate__bounceInUp");
}

var jsonSymp=[];
var symptomsList =[];
/*
var possibleD=[];
var diagProb;

*/

$(document).ready(function(){


		var fromTop = [
			$("#barChart1").offset().top - window.innerHeight,
			$("#barChart2").offset().top - window.innerHeight,
			$("#donutChart1").offset().top - window.innerHeight,
			$("#donutChart2").offset().top - window.innerHeight,		
			$("#mess1").offset().top - window.innerHeight,
			$("#mess2").offset().top - window.innerHeight,
			$("#mess3").offset().top - window.innerHeight,
			$("#mess4").offset().top - window.innerHeight,
			$("#mess5").offset().top - window.innerHeight,
			$("#mess6").offset().top - window.innerHeight,
			$("#mess7").offset().top - window.innerHeight,
			$("#stigmaText").offset().top - window.innerHeight,
			$("#mess10").offset().top - window.innerHeight,
			$("#mess11").offset().top - window.innerHeight,
			$("#mess12").offset().top - window.innerHeight,
			$("#mess13").offset().top - window.innerHeight,
			$("#mess14").offset().top - window.innerHeight,
			$("#mess15").offset().top - window.innerHeight,
			$("#mess16").offset().top - window.innerHeight,
			$("#mess17").offset().top - window.innerHeight,
			$("#mess18").offset().top - window.innerHeight,
			$("#mess19").offset().top - window.innerHeight,
			$("#mess20").offset().top - window.innerHeight,
			$("#mess21").offset().top - window.innerHeight,
			$("#mess22").offset().top - window.innerHeight,
			$("#mess23").offset().top - window.innerHeight
		];

		/*API diagnosis*/
		$("#diagnose").click(function(){
			var symptoms = document.getElementsByClassName("selectedSymptom");
			for (i=0; i<symptoms.length; i++){
			symptomsList.push(`{"id":"${symptoms[i].getAttribute("data-value")}","choice_id":"present"}`);
			jsonSymp.push(JSON.parse(symptomsList[i]));
			} 
			//console.log(jsonSymp);
			var settings = {
				"url": "https://api.infermedica.com/v2/diagnosis",
				"method": "POST",
				"timeout": 0,
				"headers": {
				  "App-Id": "646ad701",
				  "App-Key": "b125332136979ad1b01ed99fe05907bc",
				  "Content-Type": "application/json"
				},
				"data": JSON.stringify({
					"sex":"male",
					"evidence":jsonSymp,
					"age":30
				}),
			  };
			  
			  $.ajax(settings).done(function (response) {
				console.log(response.conditions);
				$(".diagno").remove();
				for(var r=0; r<response.conditions.length; r++){
					console.log(response.conditions[r]);
					//$("#diagText").after(`<h3>Number ${r}<br>Name: ${response.conditions[r].name}<br>Common name: ${response.conditions[r].common_name} <br>Probability: ${response.conditions[r].probability} </h3>`);
					
				$("#diagList").append(`<tr class="diagno"><td>${response.conditions[r].common_name}</td><td>${response.conditions[r].name}</td><td>${response.conditions[r].probability}</td></tr>`);
			   }
			  });
				  
				});
	
	
	
/*charts and message animation*/
			$(function() {
		$(window).scroll(function(){
			var posTop = $(window).scrollTop();
			


			for (var cs=0; cs<fromTop.length; cs++){
				if ((posTop > fromTop[cs]) && (chartHidden[cs])) {
					chartHidden[cs] = false;
					chartFunc[cs]();
				}
			}


		

		});
	});

	/*adding animation on hover to "messages"*/

	 



	  



  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#infographic").css("width", "80vw");
  }

$("#popInfo").hide();

/*call to action button*/

$("#optimist").hover(function(){
	$(this).css({"background-color":"rgba(112,135,142,0.9)","cursor":"pointer"});
});

$("#optimist").mouseleave(function(){
	$(this).css({"background-color":"rgba(0,0,0,0.6)","cursor":"default"});
});

/*emoji picker*/

    $("#emotions div").click(function(){
        $("div").removeClass("selectedEmotion");
        $(this).addClass("selectedEmotion");
    });
    $("#amazing").click(function(){
        $(".tips").remove();
        $(".quote").remove();
        $("#emotions").after("<h3 class='quote'>The greatest wealth is health</h3>");
        $(".quote").after("<h3 class='tips'><i>Keeping track of your emotions throughout the day can help you to understand your mental state.</i></h3>");
    });
    $("#good").click(function(){
        $(".tips").remove();
        $(".quote").remove();
        $("#emotions").after("<h3 class='quote'>Every day is a fresh start</h3>");
        $(".quote").after("<h3 class='tips'><i>Keeping track of your emotions throughout the day can help you to understand your mental state.</i></h3>");
    });
    $("#meh").click(function(){
        $(".tips").remove();
        $(".quote").remove();
        $("#emotions").after("<h3 class='quote'>Start where you are. Use what you have. Do what you can.</h3>");
        $(".quote").after("<h3 class='tips'><i>Keeping track of your emotions throughout the day can help you to understand your mental state.</i></h3>");
    });
    $("#bad").click(function(){
        $(".tips").remove();
        $(".quote").remove();
        $("#emotions").after("<h3 class='quote'>Always remember that the future comes one day at a time</h3>");
        $(".quote").after("<h3 class='tips'><i>Keeping track of your emotions throughout the day can help you to understand your mental state.</i></h3>");
    });
    $("#awful").click(function(){
        $(".tips").remove();
        $(".quote").remove();
        $("#emotions").after("<h3 class='quote'>The strongest people are those who fight unseen battles </h3>");
        $(".quote").after("<h3 class='tips'><i>Keeping track of your emotions throughout the day can help you to understand your mental state.</i></h3>");
    });

	/*classes to assist diagnosis API*/
    $(".grid-item").click(function(){
        
        if($(this).hasClass("nSelected")){
        $(this).addClass("selectedSymptom"); 
        $(this).removeClass("nSelected");
        }
        else if($(this).hasClass("selectedSymptom")){
            $(this).addClass("nSelected"); 
            $(this).removeClass("selectedSymptom");
            }
	});
	














    /*interaction of hovering and infomation appear*/
    $(".sadhuman2").hover(function(){
      $("#popInfo").show();
    });


    
    
})






//chart render inside a function (scroll function)
//represent probabily diagnosis data as a chart