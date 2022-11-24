using HDProjectWeb.Services;
using Microsoft.AspNetCore.Mvc;

namespace HDProjectWeb.Controllers
{
    public class RQCompraController :Controller
    {
        private readonly RepositorioRQCompra repositorioRQCompra;
        public async Task<IActionResult> Index()
        {
            var ano = "2022";
            var rQCompra = await repositorioRQCompra.Obtener(ano);
            return View(rQCompra);
        }
        public IActionResult Crear()
        {
            return View();
        }
    }
}
