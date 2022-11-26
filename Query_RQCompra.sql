USE [LAVALIN]
GO



ALTER PROCEDURE PA_HD_WEB_RQ_RQCompraCab @Periodo as char(6)
AS
--HDProjectWeb
--Clase RQCompraCab - Index
--SNarvasta 25-11-2022
Select 
    a.rco_numrco as Rco_Numero,             
	a.rco_fecreg as Rco_Fec_Registro, 
	Isnull(rtrim(g.s10_nomusu),'') as Usuario_Origen,
	Isnull(rtrim(d.aux_nomaux),'') as User_Solicita,
	a.rco_motivo as Rco_Motivo,
	rtrim(b.ung_deslar) as U_Negocio,
	rtrim(a.cco_codcco) + '-' + rtrim(c.cco_deslar) as Centro_Costo,
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
Left Join Unidad_Negocio_Ung B on a.cia_codcia=b.cia_codcia and a.ung_codung=b.ung_codung
Left Join Centro_Costo_Cco C on a.cia_codcia=c.cia_codcia and a.cco_codcco=c.cco_codcco
Left Join Auxiliares_AUX D on a.cia_codcia=d.cia_codcia and a.s10_usuario=d.aux_codaux
Left Join DISCIPLINAS_DIS E on a.cia_codcia=e.cia_codcia and a.dis_coddis=e.dis_coddis
Left Join APROBAC_REQCOM_APROBACIONES_ARA F On a.cia_codcia=f.cia_codcia and a.suc_codsuc=f.suc_codsuc and a.rco_numrco=f.rco_numrco and f.anm_codanm='0'
Left Join sys_tabla_usuarios_s10 G on f.s10_usuario=g.s10_usuario
Left Join tipo_requisicion_tir h On h.cia_codcia = a.cia_codcia And h.rco_tiprco = a.rco_tiprco
Where A.cia_codcia=1 AND A.suc_codsuc=1 AND A.ano_codano+ mes_codmes=@periodo
and isnull(a.rco_flgmig,'0')='0'
--and isnull(rco_indest,'0')='1'
--V_HD_REQUERIMIENTO_COMPRA_CAB




GO


