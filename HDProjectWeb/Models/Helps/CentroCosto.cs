namespace HDProjectWeb.Models.Helps
{
    public class CentroCosto
    {
        public string Cia_codcia { get; set; }
        public string Cco_codcco { get; set; }
        public string Cco_deslar { get; set; }
    }
    public class ListadoCentroCosto<T> : CentroCosto
    {
        public IEnumerable<T> Elementos { get; set; }
    }
}
