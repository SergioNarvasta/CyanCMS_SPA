namespace HDProjectWeb.Models.Helps
{
    public class Disciplina
    {
        public string Cia_codcia { get; set; }
        public string Dis_coddis { get; set; }
        public string Dis_deslar { get; set; }
    }
    public class ListadoDisciplina<T> : Disciplina
    {
        public IEnumerable<T> Elementos { get; set; }
    }
}
