using Site.Models;

namespace Site.Interfaces
{
	public interface ICompanyRepository
	{
		Task Delete(string id);
		Task<IEnumerable<Company>> GetAll();
		Task<Company> GetById(string company_Pk);
		Task Insert(Company model);
		Task Update(Company model);
	}
}
