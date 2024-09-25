// Variable global para el contador
let count = 0;

// Obtener referencia al botón de limpiar
let clear = document.getElementById('clear');

// Evento para limpiar los checkboxes y resetear el contador
clear.addEventListener('click', function() {
    count = 0;  // Resetear el contador
    var checkboxes = document.querySelectorAll('#red-flags input[type=checkbox]');
    
    // Desmarcar todos los checkboxes
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
        localStorage.setItem(checkbox.id, false);  // Limpiar el estado en localStorage
    });

    // Limpiar el valor de 'count' en localStorage
    localStorage.setItem('checkboxCount', 0);
    
    console.log("Todos los checkboxes han sido desmarcados y el contador reseteado.");
});

window.onload = function() {
    var checkboxes = document.querySelectorAll('#red-flags input[type=checkbox]');
    
    // Recuperar el valor de 'count' almacenado en localStorage o inicializarlo a 0
    count = parseInt(localStorage.getItem('checkboxCount')) || 0;

    // Mostrar el valor de count al cargar la página
    console.log("Count al cargar la página:", count);
    
    // No incrementar el contador aquí, solo restaurar el estado de los checkboxes
    checkboxes.forEach(function(checkbox) {
        var isChecked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = isChecked;
    });

    // Si hay más de 3 checkboxes marcados al cargar la página, verifica el fraude
    if (count > 3) {
        console.log("Es fraude!");
    }
};

// Guardar el estado de los checkboxes y el count en localStorage
var checkboxes = document.querySelectorAll('#red-flags input[type=checkbox]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            count++;
        } else {
            count--;
        }

        // Guardar el estado del checkbox y el count en localStorage
        localStorage.setItem(checkbox.id, checkbox.checked);
        localStorage.setItem('checkboxCount', count);  // Guardar el valor de count
        
        // Mostrar el valor actual de count
        console.log("Count actual:", count);
        
        // Verificar si count es mayor que 3
        if (count > 3) {
            console.log("Es fraude!");
        }
    });
});
