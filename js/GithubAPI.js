/**
 * Getting all the public respos from
 * rauloliva user
 * 
 * @param {Function} cb 
 */
async function getRepos(cb){
    var response = await fetch('https://api.github.com/users/rauloliva/repos')
    var data = await response.json()
    cb(data)
}

/**
 * Displays the containers with the repos's info
 * in the content element
 * 
 * @param {Array} repos 
 */
function showRespos(repos){
    repos.map(repo => {
        var container = buildRepoContainer(repo)
        $("#content").append(container)
    })   
}

/**
 * Build the container with some info about
 * the retrieved repos
 * 
 * @param {Object} repo 
 */
function buildRepoContainer(repo){
    var dateObj = new Date(repo.created_at)
    var date = (dateObj.getDate() + 1 ) + "/" + (dateObj.getMonth() + 1) + "/" + dateObj.getFullYear()
    var container = `
        <div class='repo__container'>
            <h4 class='repo__container-header'>
                Respository Name: 
                <span class='projectName'>${repo.name}</span>
            </h4>
            <h4 class='repo__container-header'>
                <a class='repo__container-link' href='${repo.html_url}'>Go to Github Repository</a>
            </h4>
            <h4 class='repo__container-header'>Respository Description:</h4>
            <p class='content__paragraph'>
                ${repo.description}.
            </p>
            <p class='content__paragraph'>This project was created in ${date}</p>
        </div>
        <hr>
    `
    return container;
}

getRepos(showRespos)
