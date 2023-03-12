using Microsoft.AspNetCore.Mvc;
using Site.Models;
using Site.Repositorios;
using System.Diagnostics;

namespace Site.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ISiteMenuOptionsRepository _siteMenuOptionsRepository;

        public HomeController(ILogger<HomeController> logger, ISiteMenuOptionsRepository siteMenuOptionsRepository)
        {
            _siteMenuOptionsRepository = siteMenuOptionsRepository;
            _logger = logger;
        }

        public IActionResult Index()
        {
            //var list = _siteMenuOptionsRepository.ListaMenuOpciones();
            //ViewData["ListaMenuOpciones"] = list;
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}