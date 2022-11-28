using HDProjectWeb.Services;

namespace HDProjectWeb.Services
{
    public interface IServicioPeriodo
    {
        string ObtenerPeriodo();
    }
    
    public class ServicioPeriodo :IServicioPeriodo
    {
        public string ObtenerPeriodo()
        {
            string ano = "2022";
            string mes = "10";
            return ano+mes;
        }  
    }
}
