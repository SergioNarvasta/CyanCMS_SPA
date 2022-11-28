using System.ComponentModel.DataAnnotations;

namespace HDProjectWeb.Models
{
    public class RQCompraEd
    {
        [Key]
        
        public string Rco_numero { get; set; }

        public DateTime Rco_fec_registro { get; set; }

        [MaxLength(200, ErrorMessage = "El campo no debe de tener mas de 200 caracteres")]
        public string Rco_motivo { get; set; }

        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string U_negocio { get; set; }

        [MaxLength(6, ErrorMessage = "El campo no debe de tener mas de 6 caracteres")]
        public string Centro_costo { get; set; }

        [MaxLength(2, ErrorMessage = "El campo no debe de tener mas de 2 caracteres")]
        public string Disciplina { get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string Rco_situacion_aprobado { get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracteres")]
        public string Rco_prioridad { get; set; }

        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string Rco_justificacion { get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string Rco_reembolso { get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string Rco_presupuesto { get; set; }

        [MaxLength(1, ErrorMessage = "El campo no debe de tener mas de 1 caracter")]
        public string Rco_categorizado { get; set; }
    }
}
