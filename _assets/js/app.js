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

    const url = "/pages/users.html"
    $('.container').load(url, function(response, status, xhr){
        
    })
    
    
})