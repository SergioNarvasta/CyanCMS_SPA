using Microsoft.AspNetCore.Mvc;
using Site.Models;
using Site.Interfaces;
using System.Diagnostics;

namespace Site.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ISiteMenuOptionsRepository _siteMenuOptionsRepository;
		private readonly IConfiguration _configuration;
        private readonly ICompanyRepository _companyRepository;

		public HomeController(ILogger<HomeController> logger, 
            ISiteMenuOptionsRepository siteMenuOptionsRepository,
			ICompanyRepository companyRepository,

			IConfiguration configuration)
        {
            _siteMenuOptionsRepository = siteMenuOptionsRepository;
            _companyRepository = companyRepository;
            _logger = logger;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
			//var list = _siteMenuOptionsRepository.ListaMenuOpciones();
			//ViewData["ListaMenuOpciones"] = list;
			var company_Pk = _configuration["Company_Pk"];
			var company = _companyRepository.GetByCompanyPk(company_Pk);
            ViewBag.Company = company;
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