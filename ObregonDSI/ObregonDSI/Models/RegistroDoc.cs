using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ObregonDSI.Models
{
    public class RegistroDoc
    {
        [Key]
        public int IdRegistroDoc { get; set; }

        [Display(Name = "Proveedor")]
        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string Proveedor { get; set; }
        public DateTime FechaRegistro { get; set; }
    }
}
