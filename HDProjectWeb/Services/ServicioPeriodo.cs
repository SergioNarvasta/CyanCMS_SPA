using Dapper;
using HDProjectWeb.Services;
using Microsoft.Data.SqlClient;

namespace HDProjectWeb.Services
{
    public interface IServicioPeriodo
    {
        string Ano();
        string Compañia();
        string Mes();
        string NroReq();
        Task<string> ObtenerCompañia(string codcia);
        string ObtenerPeriodo();
        string Sucursal();

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
        public string NroReq()
        {
            Random rnd = new Random();
            string _base = "RQ";
            string Random = rnd.Next().ToString();
            string NroReq = (_base+ Random).Remove(10,(_base + Random).Length-10);
            return NroReq;
        }
    }
}
