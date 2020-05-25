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
 * 
 * @param {Object} repo 
 */
function buildRepoContainer(repo){
    var container = `
        <div class='repo__container'>
            <h4>Respository Name: ${repo.name}</h4>
            <h4>
                <a href='${repo.html_url}'>Go to Github Repository</a>
            </h4>
            <h4>Respository Description: ${repo.description}</h4>
        </div>
        <hr>
    `
    return container;
}

getRepos(showRespos)
