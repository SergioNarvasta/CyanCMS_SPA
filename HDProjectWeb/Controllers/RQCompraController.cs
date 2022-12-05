using Dapper;
using HDProjectWeb.Models;
using HDProjectWeb.Validaciones;
using HDProjectWeb.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace HDProjectWeb.Controllers
{
    public class RQCompraController :Controller
    {
        private readonly IRepositorioRQCompra repositorioRQCompra;
        private readonly IServicioPeriodo servicioPeriodo;
        private string periodo_dinamic = null;
      
        public RQCompraController(IRepositorioRQCompra repositorioRQCompra,IServicioPeriodo servicioPeriodo) 
        {
            this.repositorioRQCompra = repositorioRQCompra;
            this.servicioPeriodo     = servicioPeriodo;
        }

        [HttpGet]
        public IActionResult Crear()
        {
            var periodo = servicioPeriodo.ObtenerPeriodo();
            ViewBag.periodo = periodo;
            return View();
        }
        [HttpPost]
        public IActionResult ActualizaPeriodo(ValidacionPeriodo validacionPeriodo) 
        {
            periodo_dinamic = validacionPeriodo.Ano+validacionPeriodo.Mes;
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Index(PaginacionViewModel paginacionViewModel, string Search)
        {
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
        public  async Task<IActionResult> Editar(RQCompraEd rQCompraEd)
        {
           //var usuarioid=servicioPeriodo.ObtenerPeriodo(); //ObtenerUsuarioId
           await repositorioRQCompra.Actualizar(rQCompraEd);
           return RedirectToAction("Index");
        }
    }
}
