/* Attraverso una chiamata ajax all’Api di boolean 
avremo a disposizione una decina di dischi musicali. 
Servendoci di Vue JS stampiamo tutto a schermo. */


let app = new Vue ({
    el: "#app",
    data : {
        dischi: [],
    },
    mounted () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            console.log(response);
            this.dischi = response.data.response;
        })
    }
});