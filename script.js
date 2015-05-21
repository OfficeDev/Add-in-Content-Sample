
// The initialize function must be run each time a new page is loaded
Office.initialize = function (reason) {
	$(document).ready(function () {
		$('#get-data-from-selection').click(getDataFromSelection);
	});
};

// Reads data from current document selection and displays a notification
function getDataFromSelection() {
	console.log("getDataFromSelection called");
	Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
		function (result) {
			if (result.status === Office.AsyncResultStatus.Succeeded) {
				$('#display-data').text('The selected text is: ' + result.value);
			} else {
				$('#display-data').text('Error: ' + result.error.message);
			}
		}
	);
}