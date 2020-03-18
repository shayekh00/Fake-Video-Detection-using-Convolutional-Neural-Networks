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


	



	jQuery('.upload_to_modal').click(function(){
		//path: "Downloads/"+bgPage.simpleScreenshot.localName;
		//console.log("This was called! 1 ");
		$.ajax({
			
			url: 'http://127.0.0.1:5000/',
			type: 'POST',
			//data: image_name,
			data: image_name,
			success: function(response){
				console.log(response);

			} 
		})


	});

});