$('#my-button').on('click', async function() {
    const inputVal = $('#my-input').val();

    try {
        const response = await $.ajax({
            url: 'https://n8n.minervasummary.chat/webhook/18f3768f-4443-436f-b630-caf6e507bab7',
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify({ instruction: inputVal }),
        });

        $('#response-image').attr('src', response.url);
        $('#response-image-container').show();
    } catch (error) {
        console.error('Error: ', error);
    }
});
