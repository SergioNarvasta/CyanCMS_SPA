// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification

/*********  View Index **************/
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
function colocaPeriodo() {
    var objano = document.getElementById("muestra_ano");
    var valueano = objano.innerHTML.substring(5, 9);
    var objmes = document.getElementById("muestra_mes");
    var valuemes = objmes.innerHTML.substring(5, 7);
    if ((valueano + valuemes).length > 5) {
        $("#input_periodo").val(valueano + '-' + valuemes);
        var Objlabel = document.getElementById("label_periodo");
        Objlabel.style.display = 'none';
        var Objinput = document.getElementById("input_periodo");
        Objinput.style.display = '';
        $("#form_periodo").val(valueano + valuemes);
        $("#filtro_periodo").val(valueano + valuemes);
        $("#btn_filtrar").click();
    }
    else {
        alert("Porfavor seleccione Año y Mes !!");
        $("#btn_modal").click();
    }
}
function colocaEstado() {
    var combo = document.getElementById("cbo_estado");
    var selected = combo.options[combo.selectedIndex].value;
    $("#filtro_estado").val(selected);
}
function resetColorThead() {
    var celda = document.getElementById("th_Rco_numrco");
    celda.style.backgroundColor = "#87CEFA";
    var celda = document.getElementById("th_Rco_fec_registro");
    celda.style.backgroundColor = "#87CEFA";
    var celda = document.getElementById("th_Aux_nomaux");
    celda.style.backgroundColor = "#87CEFA";
    var celda = document.getElementById("th_Ung_deslar");
    celda.style.backgroundColor = "#87CEFA";
    var celda = document.getElementById("th_Cco_codcco");
    celda.style.backgroundColor = "#87CEFA";
    var celda = document.getElementById("th_Rco_sitrco");
    celda.style.backgroundColor = "#87CEFA";
    var celda = document.getElementById("th_Rco_priori");
    celda.style.backgroundColor = "#87CEFA";
}
function ordenRco_numrco() {
    $("#filtro_orden").val("1");
    resetColorThead();
    var celda = document.getElementById("th_Rco_numrco");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}
function ordenRco_fec_registro() {
    $("#filtro_orden").val("2");
    resetColorThead();
    var celda = document.getElementById("th_Rco_fec_registro");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}
function ordenAux_nomaux() {
    $("#filtro_orden").val("3");
    resetColorThead();
    var celda = document.getElementById("th_Aux_nomaux");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}
function ordenUng_deslar() {
    $("#filtro_orden").val("4");
    resetColorThead();
    var celda = document.getElementById("th_Ung_deslar");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}
function ordenCco_codcco() {
    $("#filtro_orden").val("5");
    resetColorThead();
    var celda = document.getElementById("th_Cco_codcco");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}
function ordenRco_sitrco() {
    $("#filtro_orden").val("6");
    resetColorThead();
    var celda = document.getElementById("th_Rco_sitrco");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}
function ordenRco_priori() {
    $("#filtro_orden").val("7");
    resetColorThead();
    var celda = document.getElementById("th_Rco_priori");
    celda.style.backgroundColor = "#0000FF";
    $("#btn_filtrar").click();
}

//Ejemplo de Jquery
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
/*********  View Crear **************/
function agregarFila() {
    var cont = 0;
    var item = '00' + (cont + 1).toString();
    var cod = '<input type="text"  value="999900000018" />';
    var des = '<input />';
    var det = '<button  id="btn_detalle" type="button" class="btn btn-outline-success"  data-bs-toggle="modal" data-bs-target="#ModalDetPrd">+</button>' +
        ' <div class="modal" id="ModalDetPrd"> ' +
        ' <div class="modal-dialog"> ' +
        ' <div class="modal-content"> ' +
        ' <div class="modal-header"> ' +
        '<h4 class="modal-title" > Especificaciones de producto </h4> ' +
        ' </div> ' +
        ' <div class="modal-body d-flex flex-column justify-content-center" > ' +
        ' <label>Producto: 999900000018 </label> ' +
        ' <textarea class="col-5 mt-2" style="width:350px;height:200px" > </textarea> ' +
        ' </div> ' +
        ' <div class="modal-footer" > ' +
        ' <button onclick="" type = "button" class="btn btn-danger" data-bs-dismiss="modal" > Retornar </button> ' +
        ' </div> ' +
        ' </div> ' +
        ' </div> ' +
        ' </div> ';
    var uni = "UND";
    var cant = '<input type="text"  value="0.0" />';
    var codprv = "00000000";
    var prov = '<input type="text" placeholder="Proveedor" />';
    var sust = '<input type="text" placeholder="Sustento.." />';
    var fila = "<tr><td></td><td>" + item + "</td><td>" + cod + "</td><td>" + des + "</td><td>" + det + "</td><td>" + uni + "</td><td>" + cant + "</td><td>" + codprv + "</td><td>" + prov + "</td><td>" + sust + "</td> </tr>";
    $('#tblProductos tbody').append(fila);
}
function agregarFilaAdj() {
    var cont = 0;
    var item = '00' + (cont + 1).toString();
    var name = '<input type="text" />';
    var file = ' <div class="form-group" style="width:300px"> '+              
        ' <div class="input-group d-flex flex-row" > ' +
        '               <label class="input-group-btn"> ' +
        '                  <span class="btn btn-file" > ' +
        '                    <input accept=".pdf,.doc,.docx" class="hidden" name="banner" type="file" id="banner" style="width:90px"> ' +
        '                </span> ' +
        '           </label> ' +
        '          <input onchange="coloca_nomb()" class="form-control" id="banner_captura" readonly="readonly" name="banner_captura" type="text" value="" style="width:100px"> ' +
        '     </div> ' +
        '</div > ';
    var codfile = '<input id="nomb_file" type="text" />';
    var fila = "<tr><td></td><td>" + item + "</td><td>" + name + "</td><td>" + file + "</td><td>" + codfile + "</td> </tr>";
    cont++;
    $('#tblAdjuntos tbody').append(fila);
}
function colocaEstado() {
    var combo = document.getElementById("cbo_estado");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_estado").val(selected);
}
function colocaTipo() {
    var combo = document.getElementById("cbo_tipo");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_tipo").val(selected);
}
function colocaPrioridad() {
    var combo = document.getElementById("cbo_prioridad");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_prioridad").val(selected);
}
function colocaUnegocio() {
    var combo = document.getElementById("cbo_unegocio");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_unegocio").val(selected);
}
function colocaSituacion() {
    var combo = document.getElementById("cbo_situacion");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_situacion").val(selected);
}
function colocaPresup() {
    var combo = document.getElementById("cbo_presup");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_presup").val(selected);
}
function colocaReembls() {
    var combo = document.getElementById("cbo_reembls");
    var selected = combo.options[combo.selectedIndex].value;
    $("#input_reembls").val(selected);
}
function AyudaDisciplina1() {
    $.ajax({
        ache: false,
        async: true,
        type: "GET",
        url: '/RQCompra/AyudaDisciplina',
        data: {},
        datatype: "html",
        type: 'POST',
        success: function (result) {
            $('#Modal_Dis').html();
            $('#Modal_Dis').html(result);
        }
    })
}
function AyudaDisciplina2() {
    var laURLDeLaVista = '@Url.Action("AyudaDisciplina", "RQCompra")';
    $.ajax({
        cache: false,
        async: true,
        type: "GET",
        url: laURLDeLaVista,
        data: {},
        success: function (response) {
            $('#resultado').html('');
            $('#resultado').html(response);
        }
    });
}
// AyudaDisciplina 3 con JQuery
$('btn_showModal').on('click', function () {
    $("#div_modal").dialog({
        autoOpen: true,
        position: { my: "center", at: "top+350", of: window },
        width: 1000,
        resizable: false,
        title: 'Add User Form',
        modal: true,
        open: function () {
            $(this).load('@Url.Action("AyudaDisciplina", "RQCompra")');
        }
    });
    return false;
});
//JQuery para Ayuda Disciplina
$(document).ready(function () {
    $('tr#tr_dis').click(function (e) {
        var tr_data = $(this).text().trim();
        var cod = tr_data.substring(0, 2);
        var des = tr_data.substring(2, tr_data.length).trim();
        console.log("-Codigo:" + cod + "-Desc:" + des);
        $("#input_cod_disci").val(cod);
        $("#input_des_disci").val(des);
        $("#btn_cerrar_modal_disci").click();
    });
});
function abrir_modal_disci() {
    $("#btn_abrir_modal_disci").click();

}
//JQUERY Para subir archivo
$(document).on('change', '.btn-file :file', function () {
    var input = $(this);
    var numFiles = input.get(0).files ? input.get(0).files.length : 1;
    var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});
$(document).ready(function () {
    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
        var input = $(this).parents('.input-group').find(':text');
        var log = numFiles > 1 ? numFiles + ' files selected' : label;
        if (input.length) { input.val(log); } else { if (log) alert(log); }
    });
});
function coloca_nomb() {
    var combo = document.getElementById("banner_captura");
    var selected = combo.innerHTML;
    $("#nomb_file").val(selected);
}

window.onload = function() {
    alert('Evento Load ');
    var valor = document.getElementById("input_prioridad");
    var combo = document.getElementById("cbo_prioridad");
    combo.options[combo.selectedIndex].value = valor.innerHTML;
    console.log(valor.innerHTML);
};



