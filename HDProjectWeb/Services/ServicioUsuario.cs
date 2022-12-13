using System.Security.Claims;

namespace HDProjectWeb.Services
{
    public interface IServicioUsuario
    {
        string ObtenerCodUsuario();
    }
    public class ServicioUsuario : IServicioUsuario
    {
        private readonly HttpContext httpContext;

        public ServicioUsuario(IHttpContextAccessor httpContextAccessor)
        {
            httpContext = httpContextAccessor.HttpContext;
        }
        public string ObtenerCodUsuario()
        {
            if(httpContext.User.Identity.IsAuthenticated)
            {
                var idClaim = httpContext.User
                             .Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault();
                var Cod = idClaim.Value.ToString();
                return Cod;
            }
            else
            {
                throw new ApplicationException("El usuario no esta autenticado");
            }
        }
    }
}
