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
		console.log("This was called! 1 ");
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

	// new code!!! 19th March

	$(function() {
		$('#upload-file-btn').click(function() {
			var form_data = new FormData($('#upload-file')[0]);
			$.ajax({
				type: 'POST',
				url: 'http://127.0.0.1:5000/',
				data: form_data,
				contentType: false,
				cache: false,
				processData: false,
				success: function(data) {
					console.log('Success!');
				},
			});
		});
	});

// 	var form_data = new FormData();
//     form_data.append('file', $('#uploadfile').prop('files')[0]);

//     $(function() {
//     $.ajax({
//         type: 'POST',
//         url:  'http://127.0.0.1:5000/',
//         data: form_data,
//         contentType: false,
//         cache: false,
//         processData: false,
//         success: function(data) {
//             console.log('Success!');
//         },
// 	});
// });

	// NEW CODE ENDS 

});