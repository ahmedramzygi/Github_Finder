class GitHub{
    constructor(){
        this.client_id=   '0e1cdfe8359697808dc4';
        this.client_secret='05076b317756e263cc6364ca2722c1f19b02253d';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileResponse.json();

        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
        &client_id=${this.client_id}&client_secret=${this.client_secret}`);
   
        const repos=await reposResponse.json();
        return{
            profile,
            repos
        }
    }    
}