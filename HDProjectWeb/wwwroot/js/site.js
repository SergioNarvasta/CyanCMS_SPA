// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(function () {
    $('ul.selec_ano li').click(function (e) {
        $("#muestra_ano").text("Año: " + this.id);

    });
});
$(function () {
    $('ul.selec_mes li').click(function (e) {
        $("#muestra_mes").text("Mes: " + this.id);

    });
});

$(document).on('click', '#btnSaveForm', function (event) {
    var title, input_value, data_id;
    $('.newClass').each(function (i, items_list) {
        title = $(this).find('.title').val();
        input_value = $(this).find('.input-value').val();
        data_id = $(this).find('.btn-warning').attr('data-id');

        console.log('Valores recogidos:');
        console.log('titulo: ' + title + ', valor: ' + input_value + ', data_id: ' + data_id);
    });
});

/* 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<ol class="ui-sortable">
  <li data-id="1" class="ui-draggable ui-draggable-handle newClass">
    <div data-id="1" style="min-height: 100px;min-width: 100px">
      <div style="float:left" class="titleField">Campo de Texto<br>
        <input type="text" placeholder="Titulo..." value="título de ejemplo 1" class="title"><br>       
        <input type="text" placeholder="Descripcion..." value="valor de ejemplo 1" class="input-value"><br>
      </div>
      <div style="float:right" class="btnDeleteItem">
        <button class="btn btn-warning" id="1" data-btnid="1" btnid="1" data-id="1">Eliminar</button>
      </div>
    </div>
  </li>
        
        <li data-id="2" class="ui-draggable ui-draggable-handle newClass">
            <div data-id="2" style="min-height: 50px;min-width: 100px"><div style="float:left" class="titleField">Campo de Foto</div>
            <div style="float:right" class="btnDeleteItem">
                <button class="btn btn-warning" id="2" data-btnid="2" btnid="2" data-id="2">Eliminar</button></div>
            </div>
        </li>
    </ol>

<input type="button" id="btnSaveForm" value="Guardar">
 
 */
