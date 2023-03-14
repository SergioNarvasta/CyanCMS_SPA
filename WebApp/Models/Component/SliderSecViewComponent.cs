using Microsoft.AspNetCore.Mvc;
using Site.Interfaces;
using Site.Models;

namespace HDProjectWeb.Models.Detalles
{
    [ViewComponent(Name = "SliderSec")]
    public class SliderSecViewComponent : ViewComponent
	{
        private readonly ISliderSecRepository _repository;
        public SliderSecViewComponent(ISliderSecRepository repository)
        {
            _repository = repository;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {  
            var list = await _repository.Listado();
            return View(list);
        }
    }
}
