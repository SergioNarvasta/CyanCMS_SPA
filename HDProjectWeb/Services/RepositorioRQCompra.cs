using Dapper;
using Microsoft.Data.SqlClient;
using RQ_Compra.Models;

namespace HDProjectWeb.Services
{

    public interface IRepositorioRQCompra
    {
        Task<IEnumerable<RQCompra>> Obtener(string ano);
    }
    public class RepositorioRQCompra:IRepositorioRQCompra
    {
        private readonly string connectionString;

        public RepositorioRQCompra(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public void Crear(RQCompra rQCompra)
        {
            using var connection = new SqlConnection(connectionString);
            //var id = connection.QuerySingle
        }
        public async Task<IEnumerable<RQCompra>> Obtener(string ano) 
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.QueryAsync<RQCompra>(@"SELECT 
                            cia_codcia,suc_codsuc,rco_numrco,tin_codtin,rco_fecreg,rco_fecsug,adi_codadi,s10_usuario,rco_motivo,rco_glorco,cco_codcco,
                            rco_sitrco,rco_sitlog,ano_codano,mes_codmes,usu_codapr,rco_fecapr,rco_gloapr,rco_indest,rco_feccre,rco_usucre,rco_fecact,rco_codusu,ung_codung,
                            rco_indcie,rco_obscie,rco_indval,rco_numpcn,dis_coddis,rco_rembls,rco_presup,rco_9digit,rco_priori,rco_codalt,rco_obspri,rco_rutdoc,rco_fecprg,
                            rco_procur,rco_tiprco,ocm_corocm,tmo_codtmo,rco_fecent,rco_impser,rco_flgcom,rco_flgate,rco_jusate,rco_flgmig,rco_imppor,rco_hito01,cpa_codcpa,
                            rco_imprec,rco_impfac,rco_numsol,rco_monpre,rco_imppre,rco_sitctb,rco_ajufac,rco_impcfm,rco_feinre,rco_fefire,rco_clfprv,rco_gloclf,rco_ultcer,
                            rco_feaclf,rco_usaclf
                          FROM REQUERIMIENTO_COMPRA_RCO
                          WHERE cia_codcia=1 AND suc_codsuc=1 AND ano_codano =@ano ", new { ano });
        }
    }
}
