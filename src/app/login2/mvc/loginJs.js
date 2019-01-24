angular.module('loginJs',[])
.controler('LoginController',function LoginController(){
    this.name = "";
    this.password = "";
    this.onLoginClicked = function onLoginClicked() {
        window.alert(this.name + " a " + this.password)
    }
});