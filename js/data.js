// Function for getting data
var getData = function(number) {
	$.get("files/files.json", function(data) {
		customBuild(data, number);
	});
}

var customBuild = function(data, number) {
	parsedData = JSON.parse(data);
	//parsedData = data;
	//console.log(data);

	$('#url1').append(parsedData[number].Title);
	$("#url1").attr("href", parsedData[number].Url);
	$('#description1').append(parsedData[number].Description);

	var num1 = (number - 2);
	if (num1 < 0) {
		num1 += 8;
	}

	var num2 = (number - 1);
	if (num2 < 0) {
		num2 += 8;
	}

	$("#image1").attr("src", parsedData[num1].Image);
	$("#image2").attr("src", parsedData[num2].Image);
	$("#image3").attr("src", parsedData[number].Image);
	$("#image4").attr("src", parsedData[(number + 1) % 8].Image);
	$("#image5").attr("src", parsedData[(number + 2) % 8].Image);
}