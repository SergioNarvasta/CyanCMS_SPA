using Dapper;
using HDProjectWeb.Services;
using Microsoft.Data.SqlClient;

namespace HDProjectWeb.Services
{
    public interface IServicioPeriodo
    {
        string Compañia();
        Task<string> ObtenerCompañia(string codcia);
        string ObtenerPeriodo();
    }
    
    public class ServicioPeriodo :IServicioPeriodo
    {
        private readonly string connectionString;
        public ServicioPeriodo(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public string ObtenerPeriodo()
        {
            int mes = DateTime.Now.Month;
            int ano = DateTime.Now.Year;
            return ano.ToString()+mes.ToString();
        }  
        public string Compañia()
        {
            string cia = "01";
            return cia; 
        }
        public async Task<string> ObtenerCompañia(string codcia)
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.QuerySingleAsync<string>(@"SELECT CIA_NOMCIA 
                   FROM COMPANIA_CIA WHERE CIA_CODCIA = @codcia",new {codcia});
        }
    }
}
