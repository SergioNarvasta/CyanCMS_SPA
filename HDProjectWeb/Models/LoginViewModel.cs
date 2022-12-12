using System.ComponentModel.DataAnnotations;

namespace HDProjectWeb.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Campo obligatorio")]
        public string CodUser { get; set; }

        [Required(ErrorMessage = "Campo obligatorio")]
        [DataType(DataType.Password)]   
        public string Password { get; set;}

        public bool Recuerdame { get; set;}
    }
}
