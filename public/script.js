$('#my-form').on('submit', async function(e) {
    e.preventDefault();

    // Hide the button text and show the spinner
    $('#button-text').hide();
    $('#spinner').show();

    const inputVal = $('#my-input').val();

    try {
        const response = await $.ajax({
            url: 'https://n8n.minervasummary.chat/webhook/18f3768f-4443-436f-b630-caf6e507bab7',
            type: 'GET',
            data: { instruction: inputVal },
        });

        // Show the button text and hide the spinner when the AJAX call is done
        $('#button-text').show();
        $('#spinner').hide();

        $('#response-image').attr('src', response.url);
        $('#response-image-container').show();
    } catch (error) {
        console.error('Error: ', error);

        // If there is an error, show the button text and hide the spinner
        $('#button-text').show();
        $('#spinner').hide();
    }
});
