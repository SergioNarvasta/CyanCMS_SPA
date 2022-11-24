using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace RQ_Compra.Models
{
    public class RQCompra
    {
        //Class Purchase requirement
        [Required(ErrorMessage = "Campo obligatorio")]//Campo Requerido
        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string cia_codcia { get; set; }

        [Required(ErrorMessage = "Campo obligatorio")]//Campo Requerido
        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string suc_codsuc { get; set; }

        [Required(ErrorMessage = "Campo obligatorio")]//Campo Requerido
        [MaxLength(10, ErrorMessage = "El campo no debe de tener mas de 10 caracteres")]
        public string rco_numrco { get; set; }

        [Required(ErrorMessage = "Campo obligatorio")]//Campo Requerido
        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string tin_codtin{ get; set; } 

        public DateTime rco_fecreg{ get; set; }  

        public DateTime rco_fecsug { get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string adi_codadi{ get; set; }

        [MaxLength(20, ErrorMessage = "El campo no debe de tener mas de 20 caracteres")]
        public string s10_usuario{ get; set; }

        [MaxLength(200, ErrorMessage = "El campo no debe de tener mas de 200 caracteres")]
        public string rco_motivo{ get; set; }

        [MaxLength(200, ErrorMessage = "El campo no debe de tener mas de 200 caracteres")]
        public string rco_glorco{ get; set; }

        [MaxLength(6, ErrorMessage = "El campo no debe de tener mas de 6 caracteres")]
        public string cco_codcco{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_sitrco{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_sitlog{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(4, ErrorMessage = "El campo no debe de tener mas de 4 caracteres")]
        public string ano_codano{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string mes_codmes{ get; set; }

        [MaxLength(30, ErrorMessage = "El campo no debe de tener mas de 30 caracteres")]
        public string usu_codapr{ get; set; } 
        
        public DateTime rco_fecapr{ get; set; }

        [MaxLength(200, ErrorMessage = "El campo no debe de tener mas de 200 caracteres")]
        public string rco_gloapr{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_indest{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        public DateTime rco_feccre{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(30, ErrorMessage = "El campo no debe de tener mas de 30 caracteres")]
        public string rco_usucre{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        public DateTime rco_fecact{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(30, ErrorMessage = "El campo no debe de tener mas de 30 caracteres")]
        public string rco_codusu{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string ung_codung{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        public Int16 rco_indcie{ get; set; }

        [MaxLength(200, ErrorMessage = "El campo no debe de tener mas de 200 caracteres")]
        public string rco_obscie{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        public Int16 rco_indval{ get; set; }

        [MaxLength(20, ErrorMessage = "El campo no debe de tener mas de 20 caracteres")]
        public string rco_numpcn{ get; set; }

        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string dis_coddis{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracteres")]
        public string rco_rembls{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracteres")]
        public string rco_presup{ get; set; }

        [MaxLength(9, ErrorMessage = "El campo no debe de tener mas de 9 caracteres")]
        public string rco_9digit{ get; set; }

        [Required(ErrorMessage = "Campo obligatorio")] //Campo Requerido
        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracteres")]
        public string rco_priori{ get; set; }

        [MaxLength(11, ErrorMessage = "El campo no debe de tener mas de 11 caracteres")]
        public string rco_codalt{ get; set; }

        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string rco_obspri{ get; set; }

        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string rco_rutdoc{ get; set; }  

        public DateTime rco_fecprg{ get; set; }  

        public Int16 rco_procur{ get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_tiprco{ get; set; }

        [MaxLength(10, ErrorMessage = "El campo no debe de tener mas de 10 caracteres")]
        public string ocm_corocm{ get; set; }

        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string tmo_codtmo{ get; set; }  

        public DateTime rco_fecent{ get; set; } 

        public Double rco_impser{ get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_flgcom{ get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_flgate{ get; set; }

        [MaxLength(200, ErrorMessage = "El campo no debe de tener mas de 200 caracteres")]
        public string rco_jusate{ get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_flgmig{ get; set; }  

        public Double rco_imppor{ get; set; }

        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string rco_hito01{ get; set; }

        [MaxLength(3, ErrorMessage = "El campo no debe de tener mas de 3 caracteres")]
        public string cpa_codcpa{ get; set; } 

        public Double rco_imprec{ get; set; }  

        public Double rco_impfac{ get; set; }

        [MaxLength(10, ErrorMessage = "El campo no debe de tener mas de 10 caracteres")]
        public string rco_numsol{ get; set; }

        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string rco_monpre{ get; set; }  

        public Double rco_imppre{ get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_sitctb{ get; set; }  

        public Double rco_ajufac{ get; set; }  

        public Double rco_impcfm{ get; set; }  

        public Int16 rco_feinre{ get; set; }  

        public Int16 rco_fefire{ get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string rco_clfprv{ get; set; }

        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string rco_gloclf{ get; set; }  

        public Int16 rco_ultcer{ get; set; }  

        public DateTime rco_feaclf{ get; set; }

        [MaxLength(30, ErrorMessage = "El campo no debe de tener mas de 30 caracteres")]
        public string rco_usaclf { get; set; }


    }
}
