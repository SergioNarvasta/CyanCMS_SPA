using Dapper;
using HDProjectWeb.Models;
using HDProjectWeb.Validaciones;
using HDProjectWeb.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace HDProjectWeb.Controllers
{
    public class RQCompraController :Controller
    {
        private readonly IRepositorioRQCompra repositorioRQCompra;
        private readonly IServicioPeriodo servicioPeriodo;
        private readonly IServicioUsuario servicioUsuario;
        private string periodo_dinamic = null;
      
        public RQCompraController(IRepositorioRQCompra repositorioRQCompra,IServicioPeriodo servicioPeriodo,IServicioUsuario servicioUsuario) 
        {
            this.repositorioRQCompra = repositorioRQCompra;
            this.servicioPeriodo     = servicioPeriodo;
            this.servicioUsuario = servicioUsuario;
        }

        [HttpGet]
        public IActionResult Crear()
        {
            var periodo = servicioPeriodo.ObtenerPeriodo();
            var date = DateTime.Now;
            ViewBag.periodo = periodo;
            ViewBag.fecha = date;    
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Crear(RQCompra rQCompra)
        {
            if (!ModelState.IsValid)
            {
                return View(rQCompra);
            }
         
            rQCompra.Cia_codcia = servicioPeriodo.Compañia();
            rQCompra.Suc_codsuc = servicioPeriodo.Sucursal();
            rQCompra.Ano_codano = servicioPeriodo.Ano();
            rQCompra.Mes_codmes = servicioPeriodo.Mes();
            rQCompra.S10_usuario = servicioPeriodo.User();
            rQCompra.Rco_usucre = servicioPeriodo.Usuario_Cre();
            rQCompra.Rco_codusu = servicioPeriodo.CodUser();

            await repositorioRQCompra.Crear(rQCompra);
            return View();
        }

        [HttpPost]
        public IActionResult ActualizaPeriodo(ValidacionPeriodo validacionPeriodo) 
        {
            periodo_dinamic = validacionPeriodo.Ano+validacionPeriodo.Mes;
            return View();
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Index(PaginacionViewModel paginacionViewModel, string Search)
        {
            var user = servicioUsuario.ObtenerCodUsuario();
            var periodo = servicioPeriodo.ObtenerPeriodo();
            if (periodo_dinamic is not null)
            {
                periodo = periodo_dinamic;
            }
            ViewBag.periodo =  periodo.Remove(4,2)+"-"+periodo.Remove(0,4);
            var rQCompra   = await repositorioRQCompra.Obtener(periodo,paginacionViewModel);
            var totalRegistros = await repositorioRQCompra.ContarRegistros(periodo);
            var respuesta = new PaginacionRespuesta<RQCompraCab>
            {
                Elementos = rQCompra,
                Pagina = paginacionViewModel.Pagina,
                RecordsporPagina = paginacionViewModel.RecordsPorPagina,
                CantidadRegistros = totalRegistros,
                BaseURL = Url.Action()
            };

            return View(respuesta);
        }

        [HttpGet]
        public async Task<IActionResult> Editar(string Rco_Numero)
        {
            var rQCompra = await repositorioRQCompra.ObtenerporCodigo(Rco_Numero);
           /* if(rQCompra is null)
            {
                return RedirectToAction("NoEncontrado","Home");   
            }*/
            return View(rQCompra);
        }

        [HttpPost]
        public  async Task<IActionResult> Editar(RQCompra rQCompraEd)
        {
           //var usuarioid=servicioPeriodo.ObtenerPeriodo(); //ObtenerUsuarioId
           await repositorioRQCompra.Actualizar(rQCompraEd);
           return RedirectToAction("Index");
        }
    }
}
