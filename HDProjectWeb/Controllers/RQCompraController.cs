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
            ViewBag.fecha = date.ToString("yyyy-MM-ddThh:mm");    
            ViewBag.S10_usuario = servicioUsuario.ObtenerCodUsuario();
            ViewBag.Rco_numrco = servicioPeriodo.NroReq();
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Crear(RQCompra rQCompra)
        {
           /* if (!ModelState.IsValid){ return View(rQCompra); }*/       
            rQCompra.Cia_codcia = servicioPeriodo.Compañia();
            rQCompra.Suc_codsuc = servicioPeriodo.Sucursal();
            rQCompra.Ano_codano = servicioPeriodo.Ano();
            rQCompra.Mes_codmes = servicioPeriodo.Mes();
            rQCompra.S10_usuario = servicioUsuario.CodUsuario();
            rQCompra.Rco_usucre = servicioUsuario.ObtenerCodUsuario();
            rQCompra.Rco_codusu = servicioUsuario.ObtenerCodUsuario();
            await repositorioRQCompra.Crear(rQCompra);
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(string periodo,string busqueda,string estado) 
        {
            if (periodo.Length ==0 )
            {
                periodo = servicioPeriodo.ObtenerPeriodo();
            }
            if (busqueda.Length == 0)
            {
                busqueda = "";
            }
            ViewBag.periodo = periodo.Remove(4, 2) + "-" + periodo.Remove(0, 4);
            PaginacionViewModel paginacionViewModel=new PaginacionViewModel();
            string CodUser = servicioUsuario.ObtenerCodUsuario();
            var rQCompra = await repositorioRQCompra.Obtener(periodo, paginacionViewModel, CodUser);
            var totalRegistros = await repositorioRQCompra.ContarRegistros(periodo, CodUser);
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

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Index(PaginacionViewModel paginacionViewModel)
        {
            var periodo = servicioPeriodo.ObtenerPeriodo();
            if (periodo_dinamic is not null)
            {
                periodo = periodo_dinamic;
            }
            ViewBag.periodo =  periodo.Remove(4,2)+"-"+periodo.Remove(0,4);
            string CodUser = servicioUsuario.ObtenerCodUsuario();
            var rQCompra   = await repositorioRQCompra.Obtener(periodo,paginacionViewModel,CodUser);
            var totalRegistros = await repositorioRQCompra.ContarRegistros(periodo, CodUser);
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
