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
        public RQCompraController(IRepositorioRQCompra repositorioRQCompra) 
        {
            this.repositorioRQCompra = repositorioRQCompra;
        } 
        
        public IActionResult Create()
        {
            return View();
        }
    
        public async Task<IActionResult> Index()
        {
            var ano = "2022"; var mes = "10";
            var rQCompra = await repositorioRQCompra.Obtener(ano+mes);
            return View(rQCompra);
        }

        
    }
}
