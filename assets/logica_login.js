function go() {

    if (document.form.password.value == 'password' && document.form.login.value == 'user') {
        document.form.submit();
    }
    else {
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
} 