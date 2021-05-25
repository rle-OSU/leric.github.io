document.addEventListener("DOMContentLoaded",submitButton);

function submitButton()
{
    document.getElementById("endSubmit").addEventListener("click",function(event)
    {
        let request = new XMLHttpRequest();
        let submitURL = "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php?biome=";
        let biome = document.querySelector('input[name="biome"]:checked').value;
        request.open("GET",submitURL+"?biome="+biome,true);
        request.addEventListener("load",function()
        {
            if(request.status >= 200 && request.status < 400)
            {
                let response = JSON.parse(request.responseText);
                console.log(response.data)
            }
            else
            {
                console.log("Error in network request");
            }
        });
        request.send(null);
        event.preventDefault();
    });
}