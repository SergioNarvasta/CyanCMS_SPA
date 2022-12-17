namespace HDProjectWeb.Services
{
    public class NotesDesingViewModel
    {
        /* 
          {
          }

          Clases de Bootstrap para diseño de interfaces
           d-flex flex-row    ->> alineamiento horizontal
           me-5 ms-2 ms-xl-5  ->> Margen e(end) left, s(start) right
           form-control-sm    ->> Tamaño de objeto small
           col-sm-4           ->> Ancho de objeto small
        <div class="form-group d-flex flex-row ms-xl-5"> Width en obj textbox


         <!-- 1ER DIV HORIZONTAL-->
            <div class="d-flex flex-row">
                <div class="form-group d-flex flex-row me-3">
                    <label class="me-2">Requerimiento</label>
                    <input asp-for="Rco_numero" class="form-control form-control-sm col-sm-4 " />
                    <span asp-validation-for="Rco_numero" class="text-danger"></span>
                </div>
                <div class="form-group d-flex flex-row ms-xl-5">
                    <label class="ms-xl-5">Fecha_Reg</label>
                    <input asp-for="Rco_fec_registro" class="form-control form-control-sm ms-2" />
                    <span asp-validation-for="Rco_fec_registro" class="text-danger"></span>
                </div>
                <div class="d-flex flex-row ms-xl-5">
                    <span>Estado </span>
                    <select name="cboEstado" class="ms-2">
                        <option value=1>VIGENTE</option>
                        <option value=0>ANULADO</option>
                    </select>
                </div>
                <div class="d-flex flex-row ms-xl-5">
                    <span>Tipo_Req </span>
                    <select name="cboEstado" class="ms-2">
                        <option value=1>COMPRA REGULAR</option>
                        <option value=2>CERTIF. CONFORMIDAD</option>
                        <option value=3>ADENDA CONTRATO</option>
                        <option value=4>CLS CONSULTOR</option>
                        <option value=5>CLS EMPRESA</option>
                        <option value=6>AM CONSULTOR</option>
                        <option value=7>AM EMPRESA</option>
                    </select>
                </div>
                <div class="d-flex flex-row ms-xl-5">
                    <span>Prioridad </span>
                    <select name="cboEstado" class="ms-2">
                        <option value=1>MUY ALTA</option>
                        <option value=2>ALTA</option>
                        <option value=3>MEDIA</option>
                        <option value=4>BAJA</option>
                    </select>
                </div>          
            </div> <br />   
            <!-- 2DO DIV HORIZONTAL-->
            <div class="d-flex flex-row">
                <div class="form-group d-flex flex-row ">
                    <label >U.Negocio</label>
                    <select asp-for="U_negocio" name="cboEstado" class="ms-2">
                        <option value=1>MINING & METALURGY    </option>
                        <option value=2>INFRAESTRUCTURE E&W   </option>
                        <option value=3>O&G-FEED & ENGINEERING</option>
                        <option value=4>SHARED SERVICES</option>    
                        <option value=5>O&G - PROJECTS </option>
                        <option value=6>M&M - E&G      </option>
                        <option value=7>ANTAMINA FASE VII</option>
                    </select>
                    <span asp-validation-for="U_negocio" class="text-danger"></span>
                </div>
                <div class="form-group d-flex flex-row ms-2 me-5">
                    <label asp-for="Centro_costo" class="control-label"></label>
                    <input asp-for="Centro_costo" class="form-control col-sm-1 ms-2" />
                    <span asp-validation-for="Centro_costo" class="text-danger"></span>
                </div>
                <div class="form-group d-flex flex-row ms-xl-5">
                    <label>Situacion</label>
                    <select asp-for="Rco_situacion_aprobado" id="CboSituacion" class="ms-2">
                        <option value=1>PENDIENTE</option>
                        <option value=2>APROBADO </option>
                        <option value=2>RECHAZADO</option>
                    </select>
                    <span asp-validation-for="Rco_situacion_aprobado" class="text-danger"></span>
                </div>
                <div class="form-group d-flex flex-row ms-5 me-5">
                    <label class="control-label me-2">Solicitud</label>
                    <input asp-for="User_solicita" class="form-control form-control-sm col-sm-4" />
                    <span asp-validation-for="User_solicita" class="text-danger"></span>
                </div>
            </div> <br />
            <!--3ER DIV HORIZONTAL-->
            <div class="d-flex flex-row">
                <div class="form-group d-flex flex-row me-5">
                    <label asp-for="User_solicita" class="control-label me-2"></label>
                    <input asp-for="User_solicita" class="form-control form-control-sm col-sm-4" />
                    <span asp-validation-for="User_solicita" class="text-danger"></span>
                </div>
                <div class="form-group d-flex flex-row ms-5 me-5">
                    <label  class="control-label me-2">Resumen</label>
                    <input asp-for="User_solicita" class="form-control form-control-sm col-sm-4" />
                    <span asp-validation-for="User_solicita" class="text-danger"></span>
                </div>


            </div>
            
         */
    }
}
