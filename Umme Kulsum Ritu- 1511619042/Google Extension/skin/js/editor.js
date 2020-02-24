var bgPage = chrome.extension.getBackgroundPage();
jQuery(document).ready(function () {
	jQuery('.image_cropped').attr({'src': bgPage.simpleScreenshot.imageCrop});
	jQuery('.save_button').attr({
		'href': bgPage.simpleScreenshot.linkBlobFile,
		'download': bgPage.simpleScreenshot.localName
	});
	document.title = bgPage.simpleScreenshot.localName;   // download image save first
	
	var jsonObjects = {
		
		'image_name':bgPage.simpleScreenshot.localName,
	
	
	};  //for image location

	var image_name = JSON.stringify(jsonObjects);
	console.log(image_name);


	jQuery('.upload_to_modal').click(function(){
		//path: "Downloads/"+bgPage.simpleScreenshot.localName;
		
		$.ajax({
			url: 'http://0.0.0.0:5000/',
			type: 'post',
			data: {image_name: image_name},
			success: function(response){
				console.log(image_name);

			} 
		});


	});

});