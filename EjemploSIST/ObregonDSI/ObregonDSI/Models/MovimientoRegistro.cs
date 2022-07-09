using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ObregonDSI.Models
{
    public class MovimientoRegistro
    {
        [Key]
        public int IdMovimientoRegistro { get; set; }
 
        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string Articulo { get; set; }

        [MaxLength(100, ErrorMessage = "El campo no debe de tener mas de 100 caracteres")]
        public string UM { get; set; }
        public decimal Cantidad { get; set; }
        public decimal Precio { get; set; }

        public int IdRegistroDoc { get; set; }
        public virtual RegistroDoc RegistroDoc { get; set; }



    }
}
