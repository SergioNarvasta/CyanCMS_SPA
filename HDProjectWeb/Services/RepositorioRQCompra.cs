using Dapper;
using HDProjectWeb.Models;
using Microsoft.Data.SqlClient;

namespace HDProjectWeb.Services
{
    public interface IRepositorioRQCompra
    {
        //Interface Obtener para la clase diseñada de vista RQComp
        Task<IEnumerable<RQCompraCab>> Obtener(string periodo);
        Task<RQCompraEd> ObtenerporCodigo(string Rco_numero);
        Task Actualizar(RQCompraEd rQCompraEd);
    }
    public class RepositorioRQCompra:IRepositorioRQCompra
    {
        private readonly string connectionString;

        public RepositorioRQCompra(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public async Task Crear(RQCompra rQCompra)
        {
            using var connection = new SqlConnection(connectionString);
            var id = await connection.QuerySingleAsync<string>("");
        }
        public async Task<IEnumerable<RQCompraCab>> Obtener(string periodo) 
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.QueryAsync<RQCompraCab>(@"PA_HD_WEB_RQ_RQCompraCab @Periodo=@periodo", new {periodo});
        }
        public async Task Actualizar(RQCompraEd rQCompraEd)
        {
            using var connection = new SqlConnection(connectionString);
            await connection.ExecuteAsync(@"PA_HD_WEB_RQ_RQCompraCab_Update @Rco_Numero=@Rco_numero ,@Rco_Fec_Registro=@Rco_fec_registro ,@Rco_Motivo =@Rco_motivo,
                            @U_Negocio =@U_negocio, @Centro_Costo=Centro_costo, @Rco_Situacion_Aprobado=@Rco_situacion_aprobado,
                            @Rco_Prioridad =@Rco_prioridad,  @Rco_Justificacion=Rco_justificacion , @Rco_Reembolso =@Rco_reembolso,
                            @Rco_Presupuesto =@Rco_presupuesto,@Rco_Categorizado = @Rco_categorizado,  @Rco_Disciplina = @Rco_disciplina", rQCompraEd);
        }
        public async Task<RQCompraEd> ObtenerporCodigo(string Rco_numero) 
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.QueryFirstOrDefaultAsync<RQCompraEd>(@"SELECT  rco_numrco,rco_fecreg ,rco_motivo,ung_codung,cco_codcco,dis_coddis,
	                                            rco_sitrco,rco_priori,rco_obspri,rco_rembls,rco_presup,rco_indval
                                                FROM REQUERIMIENTO_COMPRA_RCO    WHERE rco_numrco = @Rco_numero ",new {Rco_numero});
        }

    }
}
