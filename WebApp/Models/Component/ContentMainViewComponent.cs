using Microsoft.AspNetCore.Mvc;
using Site.Interfaces;
using Site.Models;

namespace HDProjectWeb.Models.Detalles
{
    [ViewComponent(Name = "ContentMain")]
    public class ContentMainViewComponent : ViewComponent
	{
        private readonly IContentMainRepository _repository;
        private readonly IConfiguration _configuration;
        public ContentMainViewComponent(IContentMainRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _configuration = configuration;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var company_Pk = _configuration[""];
            var list = await _repository.GetByCompanyPk(company_Pk);
            return View(list);
        }
    }
}
