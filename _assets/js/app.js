$(function () {
    // La méthode .load() nous permettra de récupérer du contenu à insérer dans notre page. 
    // Nous pouvons charger des fichiers du type : HTML, PHP, TXT, XML et JSON.
    // $(selecteur).load(url,data,function(reponse,status,xhr)));
    // url	Requis
    // Une chaîne contenant l'URL vers laquelle la demande est envoyée
    // data	Optionnel
    // Spécifie les données à envoyer vers le serveur en même temps que la demande
    // function(reponse,status,xhr)	Optionnel
    // Indique une fonction à exécuter quand la méthode est terminée
    // Paramètres supplémentaires :
    // - data - contient les données résultant de la demande
    // - status - contient l'état de la demande 
    //            ("success", "notmodified", "error", "timeout", ou "parsererror")
    // - xhr - contient l'objet XMLHttpRequest

    //modification
    /**
        const url = "/pages/users.html";

        $(".container").load(url, function(reponse,status,xhr){
            console.log({reponse,status,xhr});
        })
     * 
     */


    /**
            $.post(url, function (response, status, xhr) {
            console.log({ response, status, xhr });
            if (status == "success" && response.isSuccess) {
                const users = response.results
    
                users.forEach((user, index) => {
                    $('.users').append(`
                        <div class="user-item">
                        <div class="user-name"> Name: ${user.name} </div>
                        <div class="user-email"> Email: ${user.email} </div>
                        <div class="user-address"> Adresse: ${user.address} </div>
                        <div class="user-city"> City: ${user.city} </div>
                        <div class="user-country"> Country: ${user.country} </div>
                    </div>
                    `)
                });
                console.log(users);
            }
            //console.log({data, status, xhr});
        },'json'
        )
        */


    /** +++++++++++++++++  AJAX JQUERY  +++++++++++++++++++++++++++                         */


    // $.ajax(url, {options}); ou $.ajax({options});
    // Paramétrer sa requête
    // Voici les options les plus utilisées :

    // Option	     =>    Description
    // URL	         =>    Adresse à laquelle la requête est envoyée
    // type	         =>    Le type de requête GET (par défaut) ou POST
    // data	         =>    Les données à envoyer au serveur
    // datatype	     =>    Le type de données pouvant être transmises au serveur : 
    //               =>    php, html, script, json et xml
    // success	     =>    La fonction à appeler si la requête a abouti
    // error	     =>    La fonction à appeler si la requête n'a pas abouti
    // timeout	     =>    Le délai maximum en millisecondes de traitement de la demande. 
    //               =>    Passé ce délai, elle retourne le paramètre error.



    const urlApi = "/api/users.json"
    $.ajax(
        {
            url: urlApi,
            type: "GET",
            success: function (response, status, xhr) {

                if (status == "success" && response.isSuccess) {
                    const users = response.results

                    users.forEach((user, index) => {
                        $('.users').append(`
                    <div class="user-item">
                    <div class="user-name"> Name: ${user.name} </div>
                    <div class="user-email"> Email: ${user.email} </div>
                    <div class="user-address"> Adresse: ${user.address} </div>
                    <div class="user-city"> City: ${user.city} </div>
                    <div class="user-country"> Country: ${user.country} </div>
                </div>
                `)
                    });
                    //console.log(users);
                }
                //console.log({data, status, xhr});
            },
            error: function (error) {
                console.log(error.statusText);
            }
        }
    )



})
