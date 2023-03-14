using Site.Models;

namespace Site.Interfaces
{
	public interface ISliderSecRepository
	{
		Task<IEnumerable<SliderSec>> Listado();
	}
}
