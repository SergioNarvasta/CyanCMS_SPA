using Site.Models;

namespace Site.Repositorios
{
	public interface ISiteMenuOptionsRepository
	{
		Task<IEnumerable<SiteMenuOptions>> ListaMenuOpciones();
	}
}
