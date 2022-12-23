using System.ComponentModel.DataAnnotations;

namespace HDProjectWeb.Models
{
    public class DetallesReq
    {
        //Model for details products
    
        public string Item { get; set; }    
        public string Descri { get; set; }
        public string Codigo { get; set; }
        public string Glosa { get; set; }
        public string Unidad { get; set; }
        public string Cantidad { get; set; }
        public string Codprov { get; set; }
        public string Nomprov { get; set; }


    }
}
