namespace HDProjectWeb.Models.Helps
{
    public class Usuario
    {
        public string Codigo { get; set; }
        public string Descri { get; set; }
    }
    public class ListadoUsuario<T> : Usuario
    {
        public IEnumerable<T> Elementos { get; set; }
    }
}
