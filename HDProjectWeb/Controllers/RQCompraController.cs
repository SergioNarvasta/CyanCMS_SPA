using Dapper;
using HDProjectWeb.Models;
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
        public RQCompraController(IRepositorioRQCompra repositorioRQCompra,IServicioPeriodo servicioPeriodo) 
        {
            this.repositorioRQCompra = repositorioRQCompra;
            this.servicioPeriodo     = servicioPeriodo;
        } 
        public IActionResult Crear()
        {
            return View();
        }    
        public async Task<IActionResult> Index(PaginacionViewModel paginacionViewModel)
        {
            var periodo    = servicioPeriodo.ObtenerPeriodo();
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
