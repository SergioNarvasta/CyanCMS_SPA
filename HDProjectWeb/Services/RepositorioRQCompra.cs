using Dapper;
using HDProjectWeb.Models;
using Microsoft.Data.SqlClient;

namespace HDProjectWeb.Services
{
    public interface IRepositorioRQCompra
    {
        //Interface Obtener para la clase diseñada de vista RQComp
        Task<RQCompra> ObtenerporCodigo(string Rco_numero);
        Task Actualizar(RQCompra rQCompraEd);
        Task<int> ContarRegistros(string periodo);
        Task Crear(RQCompra rQCompra);
        Task<IEnumerable<RQCompraCab>> Obtener(string periodo, PaginacionViewModel paginacion, string CodAuxUser);
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
            await connection.ExecuteAsync (@" PA_HD_WEB_RQ_Registra_Cabecera @cia_codcia = @cia_codcia, @suc_codsuc = @suc_codsuc, @rco_numrco = @rco_numrco, @tin_codtin = @tin_codtin
                                        ,@s10_usuario = @s10_usuario, @rco_motivo = @rco_motivo, @cco_codcco = @cco_codcco,@rco_sitrco = @rco_sitrco, @rco_sitlog = @rco_sitlog
                                        ,@ano_codano = @ano_codano, @mes_codmes = @mes_codmes, @rco_indest = @rco_indest, @rco_usucre = @rco_usucre , @rco_tiprco = @rco_tiprco
                                        ,@rco_codusu = @rco_codusu, @ung_codung = @ung_codung, @rco_indcie = @rco_indcie, @rco_indval = @rco_indval , @rco_priori = @rco_priori
                                        ,@rco_rembls = @rco_rembls, @rco_presup = @rco_presup, @adi_codadi = @adi_codadi",rQCompra);
        }
        public async Task<IEnumerable<RQCompraCab>> Obtener(string periodo,PaginacionViewModel paginacion,string CodAuxUser) 
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.QueryAsync<RQCompraCab>(@$"Select 
    a.rco_numrco as Rco_Numero,             
	a.rco_fecreg as Rco_Fec_Registro, 
	Isnull(rtrim(g.s10_nomusu),'') as Usuario_Origen,
	Isnull(rtrim(d.aux_nomaux),'') as User_Solicita,
	a.rco_motivo as Rco_Motivo,
	rtrim(b.ung_deslar) as U_Negocio,
	rtrim(a.cco_codcco) + '-' + rtrim(c.cco_deslar) as Centro_Costo,
	e.Dis_DesLar as Disciplina,
	(Case a.rco_sitrco When '1' Then 'PENDIENTE'
                   When '2' Then 'APROBADO'
                   When '3' Then 'RECHAZADO'
                   Else 'NO DEFINIDO' End) as Rco_Situacion_Aprobado,
    (Case a.rco_priori When '1' Then 'MUY ALTA'
                   When '2' Then 'ALTA'
                   When '3' Then 'MEDIA'
                   When '4' Then 'BAJA'
                   Else 'NO DEFINIDO' End) as Rco_Prioridad,
	Isnull(a.rco_obspri,'') as Rco_Justificacion,
	(Case a.rco_rembls When '0' Then 'NO' 
                   When '1' Then 'SI' 
                   Else ' ' End) as Rco_Reembolso,
	(Case a.rco_presup When '0' Then 'NO' 
                   When '1' Then 'SI' 
                   Else ' ' End) as Rco_Presupuesto,
    a.rco_indval as RCO_Categorizado,
	 Isnull((
       Select count(*) as CCC_TotFil From CUADRO_COMPARATIVO_COMPRAS_CCC X 
       Left Join Solicitud_Compra_Scc Y on x.cia_codcia=y.cia_codcia and x.suc_codsuc=y.suc_codsuc and x.scc_numscc=y.scc_numscc 
       Where x.cia_codcia=a.cia_codcia and x.suc_codsuc=a.suc_codsuc and y.rco_numrco=a.rco_numrco and y.scc_indest='1' 
         and isnull(x.ccc_indoky,'0')='1'
     ),0) as CCC_NumeroCCC,
     Isnull((Select Top 1 scc_numscc From Solicitud_Compra_Scc X 
        Where x.cia_codcia=a.cia_codcia and x.suc_codsuc=a.suc_codsuc
        and x.scc_indest='1' and x.rco_numrco=a.rco_numrco),''
     ) as SCC_Cotizacion,
    
     Isnull((Select Top 1 x.ocm_corocm From Orden_Compra_Occ X 
        Left Join Solicitud_Compra_Scc Y on x.cia_codcia=y.cia_codcia and x.suc_codsuc=y.suc_codsuc and x.scc_numscc=y.scc_numscc 
        Where x.cia_codcia=a.cia_codcia and x.suc_codsuc=a.suc_codsuc and y.rco_numrco=a.rco_numrco and x.occ_indest='1' and y.scc_indest='1' 
	  ),'') as OCC_NumeroOCC,
	 Case (Select Top 1 x.occ_sitapr From Orden_Compra_Occ X 
           Left Join Solicitud_Compra_Scc Y on x.cia_codcia=y.cia_codcia and x.suc_codsuc=y.suc_codsuc and x.scc_numscc=y.scc_numscc 
           Where x.cia_codcia=a.cia_codcia and x.suc_codsuc=a.suc_codsuc and y.rco_numrco=a.rco_numrco and x.occ_indest='1' and y.scc_indest='1' )
	   When '1' Then 'PENDIENTE'
	   When '2' Then 'APROBADO'
	   When '3' Then 'RECHAZADO'
	   Else ''
     End As OCC_DesSituacionOCC,
	 Isnull((Select Top 1 z.aux_nomaux From Orden_Compra_Occ X
         Left Join Solicitud_Compra_Scc Y on x.cia_codcia=y.cia_codcia and x.suc_codsuc=y.suc_codsuc and x.scc_numscc=y.scc_numscc 
         Left Join AUXILIARES_AUX z On z.CIA_CODCIA = x.cia_codcia And z.AUX_CODAUX = x.aux_codaux
         Where x.cia_codcia=a.cia_codcia and x.suc_codsuc=a.suc_codsuc and y.rco_numrco=a.rco_numrco and x.occ_indest='1' and y.scc_indest='1' 
     ),'') as OCC_ProveedorOCC

From Requerimiento_Compra_Rco A
Left Join Unidad_Negocio_Ung  B on a.cia_codcia=b.cia_codcia and a.ung_codung=b.ung_codung
Left Join Centro_Costo_Cco    C on a.cia_codcia=c.cia_codcia and a.cco_codcco=c.cco_codcco
Left Join Auxiliares_AUX      D on a.cia_codcia=d.cia_codcia and a.s10_usuario=d.aux_codaux
Left Join DISCIPLINAS_DIS     E on a.cia_codcia=e.cia_codcia and a.dis_coddis=e.dis_coddis
Left Join APROBAC_REQCOM_APROBACIONES_ARA F On a.cia_codcia=f.cia_codcia and a.suc_codsuc=f.suc_codsuc and a.rco_numrco=f.rco_numrco and f.anm_codanm='0'
Left Join sys_tabla_usuarios_s10          G on f.s10_usuario=g.s10_usuario
Left Join tipo_requisicion_tir            H On h.cia_codcia = a.cia_codcia And h.rco_tiprco = a.rco_tiprco
Where A.cia_codcia=1 AND A.suc_codsuc=1 AND A.ano_codano+ mes_codmes=@periodo
and isnull(a.rco_flgmig,'0')='0' AND A.S10_USUARIO = @CodAuxUser
ORDER BY A.rco_feccre DESC
                                       OFFSET {paginacion.RecordsASaltar }
                                       ROWS FETCH NEXT {paginacion.RecordsPorPagina } ROWS ONLY", new {periodo,CodAuxUser});
        }
        public async Task<int> ContarRegistros(string periodo)
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.ExecuteScalarAsync<int>(
                "SELECT COUNT(*) FROM REQUERIMIENTO_COMPRA_RCO WHERE ano_codano+ mes_codmes=@periodo ", new { periodo });
        }
        public async Task Actualizar(RQCompra rQCompraEd)
        {
            using var connection = new SqlConnection(connectionString);
            await connection.ExecuteAsync(@"PA_HD_WEB_RQ_RQCompraCab_Update @Rco_Numero=@Rco_numero ,@Rco_Fec_Registro=@Rco_fec_registro ,@Rco_Motivo =@Rco_motivo,
                            @U_Negocio =@U_negocio, @Centro_Costo=Centro_costo, @Rco_Situacion_Aprobado=@Rco_situacion_aprobado,
                            @Rco_Prioridad =@Rco_prioridad,  @Rco_Justificacion=Rco_justificacion , @Rco_Reembolso =@Rco_reembolso,
                            @Rco_Presupuesto =@Rco_presupuesto,@Rco_Categorizado = @Rco_categorizado,  @Rco_Disciplina = @Rco_disciplina", rQCompraEd);
        }
        public async Task<RQCompra> ObtenerporCodigo(string Rco_numero) 
        {
            using var connection = new SqlConnection(connectionString);
            return await connection.QueryFirstOrDefaultAsync<RQCompra>(@"SELECT  rco_numrco,rco_fecreg ,rco_motivo,ung_codung,cco_codcco,dis_coddis,
	                                            rco_sitrco,rco_priori,rco_obspri,rco_rembls,rco_presup,rco_indval
                                                FROM REQUERIMIENTO_COMPRA_RCO    WHERE rco_numrco = @Rco_numero ",new {Rco_numero});
        }

    }
}
