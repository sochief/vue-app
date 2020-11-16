export default{
    data(){
        return{
            searchName: '',
            names: ["you", "are", "such", "good"],
}},
    computed: {
        filteredNames() {
        return this.names.filter((name) => {
            return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
            });
        },
    }
}
//mixins can be initialized globallyin the main file as well
