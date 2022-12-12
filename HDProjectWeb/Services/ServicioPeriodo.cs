using Dapper;
using HDProjectWeb.Services;
using Microsoft.Data.SqlClient;

namespace HDProjectWeb.Services
{
    public interface IServicioPeriodo
    {
        string Ano();
        string CodUser();
        string Compañia();
        string Mes();
        Task<string> ObtenerCompañia(string codcia);
        string ObtenerPeriodo();
        string Sucursal();
        string User();
        string Usuario_Cre();
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
            //return ano.ToString()+mes.ToString();
            return "202210";
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
        public string Sucursal()
        {
            string suc = "01";
            return suc;
        }
        public string Mes()
        {
            string mes =  DateTime.Now.Month.ToString();
            return mes;
        }
        public string Ano()
        {
            string ano = DateTime.Now.Year.ToString();
            return ano;
        }
        public string Usuario_Cre()
        {
            string user = "OSIS";
            return user;
        }
        public string User()
        {
            string user = "OSIS";
            return user;
        }
        public string CodUser()
        {
            string user = "OSIS";
            return user;
        }
    }
}
